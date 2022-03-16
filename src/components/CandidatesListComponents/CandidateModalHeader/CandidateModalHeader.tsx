import React, { FC } from 'react';

import './CandidateModalHeader.scss';

interface ToggleModalProps {
  toggleModal: () => void;
}

const CandidatesModalHeader: FC<ToggleModalProps> = ({ toggleModal }) => {
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
