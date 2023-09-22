const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const dbConnect = require("./db/dbConnect");
const User = require("./db/userModel");
const auth = require("./auth");
const { uniq } = require("lodash");
require("dotenv").config();

// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// execute database connection
dbConnect();

// Curb Cores Error by adding a header here
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

const port = process.env.PORT || 5001;

app.get("/", (request, response, next) => {
  response.json({ message: "Hey! This is your server response!" });
  next();
});

// register endpoint
app.post("/register", (request, res) => {
  const data = {
    name: request.body.name,
    email: request.body.email,
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": process.env.API_KEY,
    },
  };

  Promise.all([
    axios.post(
      "https://api-v2-sandbox.chimoney.io/v0.2/sub-account/create",
      data,
      config
    ),
    bcrypt.hash(request.body.password, 10),
  ])
    .then((response) => {
      const uniqueId = response[0].data.data.id;
      const hashedPassword = response[1];

      console.log(hashedPassword, uniqueId);

      // create a new user instance and collect the data
      const user = new User({
        name: request.body.name,
        email: request.body.email,
        password: hashedPassword,
        uniqueId: uniqueId,
      });

      // save the new user
      user
        .save()

        // return success if the new user is added to the database successfully
        .then((result) => {
          res.status(200).send({
            message: "User Created Successfully",
            result,
          });
        })

        // catch error if the new user wasn't added successfully to the database
        .catch((error) => {
          res.status(500).send({
            message: "Error creating user",
            result,
          });
        });
    })
    .catch((error) => {
      res.status(500).send({
        message: "Error creating Subaccount",
        result,
      });
    });
});

// login endpoint
app.post("/login", (request, res) => {
  // check if email exists
  User.findOne({ email: request.body.email })

    // if email exists
    .then((user) => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": process.env.API_KEY,
        },
      };

      console.log(user);

      Promise.all([
        axios.get(
          `https://api-v2-sandbox.chimoney.io/v0.2/sub-account/get?id=${user.uniqueId}`,
          config
        ),
        // compare the password entered and the hashed password found
        bcrypt.compare(request.body.password, user.password),
      ])
        .then((response) => {
          const wallets = response[0].data.data.wallets;
          const passwordCheck = response[1];

          console.log(user);
          console.log(wallets);
          // check if password matches
          if (!passwordCheck) {
            return response.status(400).send({
              message: "Passwords does not match",
              error,
            });
          }
          const token = jwt.sign(
            {
              userId: user._id,
              name: user.name,
              wallets: wallets,
              userEmail: user.email
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );

          //   return success response
          res.status(200).send({
            message: "Login Successful",
            name: user.name,
            wallets,
            token,
          });
        })
        // catch error if email does not exist
        .catch((e) => {
          res.status(500).send({
            message: "some error occured",
            e,
          });
        });
    })
    // catch error if email does not exist
    .catch((e) => {
      res.status(404).send({
        message: "Email not found",
        e,
      });
    });
});

// tip user endpoint
  app.post("/payout", (request, res) => {
    console.log("i am here")
    const data = {
      valueInUSD: request.body.amount,
      payerEmail: request.body.email
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": process.env.API_KEY,
      },
    };

      axios.post(
        "https://api-v2-sandbox.chimoney.io/v0.2/payment/initiate",
        data,
        config
      )
      .then((response) => {
        //   return success response
        res.status(200).send({
          message: "Payment Successful",
          data: response.data.data
        });
      })
      // catch error if email does not exist
      .catch((e) => {
        res.status(500).send({
          message: "some error occured",
          e,
        });
      });
  })

// free endpoint
app.get("/free-endpoint", (request, response) => {
  response.json({ message: "You are free to access me anytime" });
});

// authentication endpoint
app.get("/auth", auth, (request, response) => {
  const user = request.user;
  response.json({
    message: "You are authorized to access me",
    email: user.userEmail,
    name: user.name
  });
});

app.listen(port, () => {
  console.log(`port connected at http://localhost:${port}`);
});
