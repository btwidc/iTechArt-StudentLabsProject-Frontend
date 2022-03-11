import React from 'react';

import { ToggleModalProps } from '../../types/propsTypes/ToggleModalProps';
import './CandidateModalHeader.scss';

const CandidatesModalHeader = ({ toggleModal }: ToggleModalProps) => {
  return (
    <div className="candidates-info-form-header">
      <h2 className="candidates-info-form-title">Candidate Info</h2>
      <button className="close-modal-button" onClick={toggleModal}>
        Close
      </button>
    </div>
  );
};

export default CandidatesModalHeader;
