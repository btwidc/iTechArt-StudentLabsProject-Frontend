import React, { FC } from 'react';

import './FileInput.scss';

interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput: FC<FileInputProps> = ({ id, type, name, onChange }) => {
  return (
    <div className="file-input-container">
      <label htmlFor={id} className="file-input-title">
        CV
      </label>
      <input
        className="file-input"
        id={id}
        type={type}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default FileInput;
