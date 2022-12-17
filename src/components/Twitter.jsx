import React from "react";
import { Formik, Form } from "formik";
import { useState } from "react/cjs/react.development";
import { Link } from "react-router-dom";
import TailwindInput from "./TailwindInput";
import { SignUpSchema } from "../utils/yupSchema";

function Twitter() {
  const [apiRes, setApiRes] = useState({ error: "", success: "" });
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    fetch("http://localhost:4000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        setSubmitting(false);
        console.log(data);

        if (data.status === 400) {
          setApiRes({
            error: data.message,
            success: "",
          });
          return;
        }
        setApiRes({
          error: "",
          success: data.message,
        });
        resetForm();
      })
      .catch((err) => {
        console.log(err.message, "From Error");
      });
  };

  return (
    <div className='h-full w-full flex flex-col justify-center items-center '>
      <div className='w-4/5 md:w-3/5 m-auto flex flex-col justify-center items-center '>
        {apiRes.error && (
          <p className='bg-red-600 mb-2 text-white p-2 rounded-sm text-sm w-3/5'>
            {apiRes.error}
          </p>
        )}
        {apiRes.success && (
          <p className='bg-green-600 mb-2 text-white p-2 rounded-sm text-sm w-3/5'>
            {apiRes.success}, <Link to='/login'> Login </Link>
          </p>
        )}
        <Formik
          initialValues={initialValues}
          validationSchema={SignUpSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid, dirty, errors, isSubmitting }) => (
            <Form className='border-2 p-8 border-gray-700 rounded-md w-full md:w-3/5'>
              <TailwindInput
                inputName='firstname'
                inputType='text'
                labelName='Firstname'
                errorName={errors.firstname}
              />
              <TailwindInput
                inputName='lastname'
                inputType='text'
                labelName='Lastname'
                errorName={errors.lastname}
              />
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
                className='
                 bg-blue-600  
                 text-center p-3 transition 
                  hover:bg-blue-800 rounded-md w-full text-sm
                  '
                disabled={!(dirty && isValid)}
              >
                {isSubmitting ? "Please Wait..." : "Register"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Twitter;
