import React, { useState } from 'react';

import ModalExtension from '../Portals/ModalExtension';
import CandidatesModalHeader from '../CandidateModalHeader/CandidateModalHeader';
import CandidateForm from '../CandidateForm/CandidateForm';
import './CandidatesListHeader.scss';

const CandidatesListHeader = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="candidates-list-header">
      <h2>Candidates</h2>
      <button onClick={toggleModal}>Add candidate</button>
      {showModal ? (
        <ModalExtension>
          <div className="modal-container">
            <CandidatesModalHeader toggleModal={toggleModal} />
            <CandidateForm toggleModal={toggleModal} />
          </div>
        </ModalExtension>
      ) : null}
    </div>
  );
};

export default CandidatesListHeader;
