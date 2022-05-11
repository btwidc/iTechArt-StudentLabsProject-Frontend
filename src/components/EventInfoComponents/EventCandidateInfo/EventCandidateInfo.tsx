import React, { FC } from 'react';

import { ICandidateInfo } from '../../../types/candidateTypes/ICandidateInfo';

import CandidateInfoRow from '../../CandidatesFormComponents/CandidateInfoRow/CandidateInfoRow';
import './EventCandidateInfo.scss';

interface EventCandidateInfoProps {
  candidate: ICandidateInfo;
}

const EventCandidateInfo: FC<EventCandidateInfoProps> = ({ candidate }) => {
  return (
    <div className="candidate-container">
      <h2>Candidate</h2>
      <CandidateInfoRow labelName="Name:" rowInfo={candidate?.name} />
      <CandidateInfoRow labelName="Surname:" rowInfo={candidate?.surname} />
      <CandidateInfoRow labelName="Email:" rowInfo={candidate?.email} />
      <CandidateInfoRow labelName="Skype:" rowInfo={candidate?.skype} />
      <CandidateInfoRow labelName="Phone:" rowInfo={candidate?.phone} />
      <CandidateInfoRow labelName="Education:" rowInfo={candidate?.education} />
      <CandidateInfoRow
        labelName="Technology:"
        rowInfo={candidate?.technology}
      />
    </div>
  );
};

export default EventCandidateInfo;
