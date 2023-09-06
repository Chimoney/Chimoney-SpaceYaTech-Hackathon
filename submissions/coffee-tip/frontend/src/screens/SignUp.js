import { Formik } from "formik";
import * as Yup from "yup";
import { FormContainer } from "../assets/styles";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";

// Creating schema
const schema = Yup.object().shape({
  name: Yup.string().required("Full name is a required field"),

  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is required")
    .min(5, "Your password is too short.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  confirmpassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords must match"
  ),
});

const SignUp = () => {
  const [Loading, setLoading] = useState(false);
  return (
    <FormContainer>
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", name: "", password: "" }}
        onSubmit={(values) => {
          setLoading(true);
    // set configurations
    const configuration = {
      method: "post",
      url: "https://coffetip.onrender.com/register",
      data: values,
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        setLoading(false);
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Registration Successful',
          showConfirmButton: false
        })
  // redirect user to the login page
  window.location.href = "/login";
      })
      .catch((error) => {
        error = new Error();
        setLoading(false);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Something went wrong.. please try again later!"
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
                <span>Sign Up</span>

                <p className="error">
                  {errors.name && touched.name && errors.name}
                </p>

                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder="Enter full name"
                  className="form-control inp_text"
                  id="name"
                />

                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>

                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email address"
                  className="form-control inp_text"
                  id="email"
                />

                {/* <p className="error">
                  {errors.phone && touched.phone && errors.phone}
                </p> */}

                {/* <input
                  type="phone"
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  placeholder="Phone number e.g: +234... "
                  className="form-control"
                /> */}

                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>

                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Create password"
                  className="form-control"
                />

                <p className="error">
                  {errors.confirmpassword &&
                    touched.confirmpassword &&
                    errors.confirmpassword}
                </p>

                <input
                  type="password"
                  name="confirmpassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmpassword}
                  placeholder="Confirm password"
                  className="form-control"
                />

                <button type="submit">{Loading ? "Loading..." : "Signup"}</button>
              </form>
              <p className="account">
                Already have an account? <a href="/login">Log In</a>
              </p>
            </div>
          </div>
        )}
      </Formik>
    </FormContainer>
  );
};

export default SignUp;
