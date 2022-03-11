import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import { useDispatch } from 'react-redux';
import { getCandidatesListAction } from '../../../store/actions/candidatesActions';

import CandidateInfoRow from '../../../components/CandidateInfoRow/CandidateInfoRow';
import './CandidateInfo.scss';

const Candidates = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const candidatesList = useTypedSelector(
    (state) => state.candidates.candidates,
  );
  const candidate = candidatesList?.find(
    (candidate) => candidate.id.toString() === id,
  );

  useEffect(() => {
    dispatch(getCandidatesListAction());
  }, [dispatch]);

  return (
    <div className="candidate-info-container">
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

export default Candidates;
