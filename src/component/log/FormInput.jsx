import React, { memo } from "react";

const FormInput = ({ id, label, errorMsg, inputProps }) => {
  return (
    <div>
      <label className="login-label" htmlFor={id}>
        {label}
      </label>
      <input type={id} {...inputProps} className="login-input" />

      <div className="error-msg">{errorMsg}</div>
    </div>
  );
};

export default memo(
  FormInput,
  (prevProps, nextProps) => prevProps.errorMsg === nextProps.errorMsg
);
