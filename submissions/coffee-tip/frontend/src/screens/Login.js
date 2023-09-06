import { Formik } from "formik";
import * as Yup from "yup";
import { FormContainer } from "../assets/styles";
import { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import Swal from 'sweetalert2'


const cookies = new Cookies();

// Creating schema
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
});

const Login = () => {
  const [Loading, setLoading] = useState(false);

  return (
    <FormContainer>

      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          setLoading(true);
            // set configurations
        const configuration = {
          method: "post",
          url: "http://localhost:5001/login",
          data: values,
        };

            // make the API call
        axios(configuration)
        .then((result) => {
          setLoading(false);
          // set the cookie
          cookies.set("TOKEN", result.data.token, {
            path: "/",
          });
            // set the cookie
            cookies.set("WALLET", result.data.wallets, {
              path: "/",
            });
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Login Successful',
            showConfirmButton: false
          })

          // redirect user to the dashboard page
          window.location.href = "/dashboard";
        })
        .catch((error) => {
          error = new Error();
          setLoading(false);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'User does not exist!'
          })
        });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="login">
            <div className="form">

              <form noValidate onSubmit={handleSubmit}>
                <span>Login</span>
        
               <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>

                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email id / username"
                  className="form-control inp_text"
                  id="email"
                />
             
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control"
                />
                
                <button type="submit">{Loading ? "Loading..." : "Login"}</button>
              </form>
              <p className="account">Dont have an account? <a href="/register">Sign Up</a></p>
            </div>
          </div>
        )}
      </Formik>
    </FormContainer>
  );
}

export default Login;