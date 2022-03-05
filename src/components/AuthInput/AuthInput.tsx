import React from 'react';

import './AuthInput.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className: string;
  labelName: string;
  type: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AuthInput = ({
  className,
  labelName,
  type,
  id,
  placeholder,
  value,
  onChange,
}: InputProps) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="auth-form-item-title">
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
