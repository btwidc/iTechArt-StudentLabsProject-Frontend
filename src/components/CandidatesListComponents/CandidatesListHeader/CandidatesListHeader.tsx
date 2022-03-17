import React, { FC, useState } from 'react';

import Modal from '../../Portals/Modal/Modal';
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
      <Modal isOpen={showModal}>
        <CandidatesModalHeader toggleModal={toggleModal} />
        <CandidateForm toggleModal={toggleModal} />
      </Modal>
    </div>
  );
};

export default CandidatesListHeader;
