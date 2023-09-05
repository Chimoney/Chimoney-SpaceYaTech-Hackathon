import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { styled } from "styled-components";
import { BtnContainer, Flexbox } from "../../assets/styles";

// Creating schema
const schema = Yup.object().shape({
  amount: Yup.number().required("amount is a required field"),
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
});

const Form = () => {
  return (
    <FormContainer>
      <Formik
        validationSchema={schema}
        initialValues={{ amount: 1, email: "" }}
        onSubmit={(values) => {
          // Alert the input values of the form that we filled
          alert(JSON.stringify(values));
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
          <form className="wrapper" onSubmit={handleSubmit}>
            <h3>Send a CoffeeTip.. </h3>
            <div className="grouped">
              <p className="error">
                {errors.fullname && touched.fullname && errors.fullname}
              </p>
           
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  placeholder="Enter your name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullname}
                  className="form-control inp_text"
                />
            </div>

            <div className="grouped">
              <p className="error">
                {errors.amount && touched.amount && errors.amount}
              </p>
              <div className="boxed">
                <p className="usd">$</p>
                <input
                  id="amount"
                  name="amount"
                  type="number"
                  placeholder="amount in USD"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.amount}
                  className="form-control inp_text"
                />
              </div>
            </div>

            <div className="grouped">
              <p className="error">
                {errors.email && touched.email && errors.email}
              </p>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="your email address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="form-control inp_text"
              />
            </div>

            <div className="grouped">
              <p className="error">
                {errors.message && touched.message && errors.message}
              </p>
              <textarea
                id="message"
                name="message"
                type="text"
                cols={30}
                rows={10}
                placeholder="Enter a personalized message here....."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                className="form-control inp_text"
              ></textarea>
            </div>
<BtnContainer>
            <button type="submit">Send</button>
</BtnContainer>
          </form>
        )}
      </Formik>
    </FormContainer>
  );
};


const FormContainer = styled.section`
  margin-top: 80px;
  display: flex;
  justify-content: center;

  h3 {
    align-self: flex-start;
    font-size: 24px;
    color: #222222;
    font-family: "Lora", serif;
    margin-bottom: 5px;
  }

  form {
    border: 1px solid #e8e8e8;
    padding: 40px 30px;
    border-radius: 20px;
    display: flex;
    /* justify-content: flex-start;
    align-items: center; */
    flex-direction: column;
    
    .grouped {
      margin-top: 20px;

      .boxed{
        line-height: 50px;
        display: inline-flex;

        p{
            width: 50px;
            text-align: center;
            /* height: 30px; */
            background-color: #F1A640;
            color: white;
            font-weight: 600;
            font-size: 18px;
        }
        input{
            width: 150px ;
        }
      }

      input,
      textarea {
        width: 500px;
        padding: 10px;
        height: 30px;
        background-color: #f4f4f4;
        font-family: "Lora", serif;
        border: transparent;
        border-radius: 5px;

        &::placeholder {
          font-weight: 600;
          font-size: 14px;
        }

        &:focus {
          outline: none;
          border: 1px solid #000;
        }
      }

      textarea {
        height: 140px;
        resize: none;
      }

      input + input,
      input + textarea {
        margin-bottom: 20px;
      }

      p.error {
        margin-top: 10px;
        /* margin-bottom: 5px; */
        text-align: left;
        font-size: 14px;
        color: red;
      }
    }

    button {
      /* margin-top: 30px; */
      width: 140px;
      font-size: 14px;
      font-weight: 500;
      height: 45px;
      background-color: #f1a640;
      border: transparent;
      border-radius: 5px;
    }
  }
`;

export default Form;
