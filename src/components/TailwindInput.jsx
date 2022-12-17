import { ErrorMessage, Field } from "formik";
import React from "react";

function TailwindInput({ inputName, labelName, inputType, errorName }) {
  return (
    <div className='mb-4'>
      <div className='form__group'>
        <label htmlFor={inputName} className={` block text-sm mb-1`}>
          {labelName}:
        </label>
        <Field
          type={inputType}
          name={inputName}
          id={inputName}
          className={`outline-none bg-transparent rounded-md p-2 border border-gray-700 hover:border-gray-500 w-full  transition`}
        />
      </div>
      <ErrorMessage
        name={inputName}
        component='span'
        className='text-red-600 text-xs'
      />
    </div>
  );
}

export default TailwindInput;
