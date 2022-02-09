import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  labelName: string;
  htmlFor: string;
  type: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
