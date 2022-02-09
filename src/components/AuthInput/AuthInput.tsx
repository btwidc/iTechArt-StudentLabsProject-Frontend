import React from "react";
import "./AuthInput.scss";
import { InputProps } from "../../types/componentsPropsTypes/InputProps";

const AuthInput = ({
  labelName,
  htmlFor,
  type,
  id,
  placeholder,
  value,
  onChange,
}: InputProps) => {
  return (
    <div className="auth-form-item">
      <label htmlFor={htmlFor} className="auth-form-item-title">
        {labelName}
      </label>
      <input
        className="auth-form-item-field"
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default AuthInput;
