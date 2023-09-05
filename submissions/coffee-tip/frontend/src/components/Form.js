import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import styled from "styled-components";


const Form = () => {
//   const initialValues = {
//     fullName: "",
//     phoneNumber: "",
//     email: "",
//     relatedProduct: "",
//     message: "",
//   };

//   const contactSchema = Yup.object().shape({
//     email: Yup.string().email("Invalid Email").required("Email is required"),
//     fullName: Yup.string().required("First name is required"),
//     phoneNumber: Yup.string().required("Phone number is required"),
//     relatedProduct: Yup.string().required("related product is required"),
//     message: Yup.string().required("message is required"),
//   });

  return (
    <FormContainer>
      <Formik
        // initialValues={initialValues}
        // validationSchema={contactSchema}
        // onSubmit={(values) => handleSubmit(values)}
      >
        {(formik) => {
          const { errors, touched } = formik;
          return (
            <form className="wrapper" onSubmit={formik.handleSubmit}>
              <h3>Send a CoffeeTweet.. </h3>
           
              <div className="grouped">
                  <ErrorMessage
                    name="amount"
                    component="span"
                    className="error"
                  />
                  <Field
                    id="amount"
                    name="amount"
                    type="text"
                    placeholder="Enter Coffee amount (chimoney)"
                    className={
                      errors.amount && touched.amount ? "input-error" : null
                    }
                  />
              </div>

              <div className="grouped">
                  <ErrorMessage
                    name="userName"
                    component="span"
                    className="error"
                  />
                  <Field
                    id="userName"
                    name="userName"
                    type="text"
                    placeholder="Twitter username of receiver"
                    className={
                      errors.fullName && touched.fullName ? "input-error" : null
                    }
                  />
              </div>

              <div className="text__box">
                <ErrorMessage
                  name="message"
                  component="span"
                  className="error"
                />
                <Field
                  as="textarea"
                  name="message"
                  id="message"
                  cols={30}
                  rows={10}
                  placeholder="Enter a personalized message here....."
                  className={
                    errors.message && touched.message ? "input-error" : ""
                  }
                ></Field>
                <a href="mailto:email@example.com?cc=secondemail@example.com, anotheremail@example.com, &bcc=lastemail@example.com&subject=Mail from our Website&body=Some body text here">Send Email</a>
              </div>
              <button type="submit">Send</button>
            </form>
          );
        }}
      </Formik>
    </FormContainer>
  );
};

const FormContainer = styled.div`
margin-top: 80px;
display: flex;
justify-content: center;

h3{
    align-self: flex-start;
    font-size: 24px;
    color:#222222;
    font-family: 'Lora', serif;
    margin-bottom: 5px;
}

form{
    border:1px solid #E8E8E8;
    padding: 40px 30px;
    border-radius: 20px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

    input,textarea{
        width: 500px;
        padding: 10px;
        height: 30px;
        margin-top: 20px;
        background-color: #F4F4F4;
        font-family: 'Lora', serif;
        border: transparent;
        border-radius: 5px;

        &::placeholder{
            font-weight: 600;
            font-size: 14px;
        }

    &:focus{
        outline: none;
        border: 1px solid #000 ;
    }
    }

    textarea{
        height: 140px;
        resize: none;
    }

    input+input, input+textarea{
        margin-bottom: 20px;
    }

    button{
        margin-top: 30px;
        width: 140px;
        font-size: 14px;
        font-weight: 500;
        height: 45px;
        background-color:#F1A640;
        border: transparent;
        border-radius:5px;
    }
}

`;


export default Form;