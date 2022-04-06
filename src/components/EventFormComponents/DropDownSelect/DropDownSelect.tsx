import React, { CSSProperties, FC } from 'react';
import Select, { StylesConfig, SingleValue } from 'react-select';

import './DropDownSelect.scss';

export type SelectType = {
  label: string;
  value: string;
};

export type SelectState = {
  selectedOption: SelectType | null | undefined;
};

const customContainerStyles: CSSProperties = {
  height: 45,
  border: '2px solid #9f9f9fff',
  borderRadius: 4,
  fontSize: 18,
};

const customOptionStyles: CSSProperties = {
  color: '#000000',
};

const customOptionFocusStyles: CSSProperties = {
  color: '#000000',
  background: '#ffabab',
};

const customOptionSelectStyles: CSSProperties = {
  color: '#000000',
  background: '#fd8484',
};

const selectStyle: StylesConfig<SelectType, false> = {
  control: (base) => ({
    ...base,
    border: 0,
    boxShadow: 'none',
  }),
  container: (provided, state) => {
    return {
      ...provided,
      ...customContainerStyles,
    };
  },
  option: (provided, state) => {
    if (state.isFocused) {
      return {
        ...provided,
        ...customOptionFocusStyles,
      };
    } else if (state.isSelected) {
      return {
        ...provided,
        ...customOptionSelectStyles,
      };
    }
    return {
      ...provided,
      ...customOptionStyles,
    };
  },
};

interface DropDownSelectProps {
  label: string;
  placeholder: string;
  values: SelectType[] | undefined;
  selectedValue: SelectType | null | undefined;
  setValue: (option: SingleValue<SelectType>) => void;
}

const DropDownSelect: FC<DropDownSelectProps> = ({
  label,
  placeholder,
  values,
  selectedValue,
  setValue,
}) => {
  return (
    <div className="drop-down-select-container">
      <label className="drop-down-select-label">{label}</label>
      <Select
        styles={selectStyle}
        isClearable={true}
        placeholder={placeholder}
        value={selectedValue}
        options={values}
        onChange={setValue}
      />
    </div>
  );
};

export default DropDownSelect;
