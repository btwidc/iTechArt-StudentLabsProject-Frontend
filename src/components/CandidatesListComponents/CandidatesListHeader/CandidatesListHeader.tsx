import React, { FC, useState } from 'react';

import Modal from '../../Portals/Modal';

import CandidatesModalHeader from '../../CandidatesListComponents/CandidateModalHeader/CandidateModalHeader';
import CandidateForm from '../../CandidatesFormComponents/CandidateForm/CandidateForm';
import './CandidatesListHeader.scss';

const CandidatesListHeader: FC = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="candidates-list-header">
      <h2>Candidates</h2>
      <button onClick={toggleModal}>Add candidate</button>
      {showModal ? (
        <Modal>
          <div className="modal-window-container">
            <div className="modal-container">
              <CandidatesModalHeader toggleModal={toggleModal} />
              <CandidateForm toggleModal={toggleModal} />
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default CandidatesListHeader;
