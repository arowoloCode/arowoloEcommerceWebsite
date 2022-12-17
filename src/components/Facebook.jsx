import React, { useState } from "react";
import { Formik, Form } from "formik";
import { setAccessToken } from "../utils";
import TailwindInput from "./TailwindInput";
import { SignInSchema } from "../utils/yupSchema";

function Facebook() {
  const [apiRes, setApiRes] = useState({});
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        setSubmitting(false);
        if (data.status === 400) {
          setApiRes({
            error: data.message,
          });
          return;
        }

        setAccessToken(data.accessToken);
        window.location = "/";
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <div className='h-full w-full flex flex-col justify-center items-center'>
      <div className='w-4/5 md:w-3/5 m-auto flex flex-col justify-center items-center'>
        {apiRes.error && (
          <p className='bg-red-600 mb-2 text-white p-2 rounded-sm text-sm w-3/5'>
            {apiRes.error}
          </p>
        )}
        <Formik
          initialValues={initialValues}
          validationSchema={SignInSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid, dirty, errors, isSubmitting }) => (
            <Form className='border-2 p-8 border-gray-700 rounded-md w-full md:w-3/5'>
              <TailwindInput
                inputName='email'
                inputType='email'
                labelName='Email'
                errorName={errors.email}
              />
              <TailwindInput
                inputName='password'
                inputType='password'
                labelName='Password'
                errorName={errors.password}
              />
              <button
                type='submit'
                className={`
                 text-center p-3 transition 
                   rounded-md w-full text-sm
                   ${
                     !(dirty && isValid)
                       ? "bg-gray-500 pointer-events-none opacity-30"
                       : "bg-blue-600 hover:bg-blue-800"
                   }  
                  `}
                disabled={!(dirty && isValid)}
              >
                {isSubmitting ? "Please Wait..." : "Login"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Facebook;
