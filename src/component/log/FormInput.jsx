import React from "react";

const FormInput = ({ id, label, errorMsg, inputProps }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={id} {...inputProps} />
      <button></button>
      <span>{errorMsg}</span>
    </div>
  );
};

export default FormInput;
