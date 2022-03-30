import React, { FC } from 'react';
import Select, { SingleValue } from 'react-select';

import './DropDownSelect.scss';

export interface Participant {
  label: string;
  value: string;
}
export interface ParticipantSelectState {
  selectedParticipant: Participant | null;
}

export interface Candidate {
  label: string;
  value: string;
}
export interface CandidateSelectState {
  selectedCandidate: Candidate | null;
}

export interface Category {
  label: string;
  value: string;
}
export interface CategorySelectState {
  selectedCategory: Category | null;
}

interface DropDownSelectProps {
  label: string;
  placeholder: string;
  values: Participant[] | Candidate[] | Category[] | undefined;
  selectedValue: Participant | Candidate | Category | null | undefined;
  setValue: (option: SingleValue<Participant | Candidate | Category>) => void;
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
