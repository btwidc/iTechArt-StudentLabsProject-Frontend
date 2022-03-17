import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import { useDispatch } from 'react-redux';
import {
  downloadCandidateCvAction,
  getCandidateAction,
} from '../../../store/actions/candidatesActions';

import CandidatesList from '../CandidatesList/CandidatesList';
import CandidateInfoHeader from '../../../components/CandidatesListComponents/CandidateInfoHeader/CandidateInfoHeader';
import CandidateInfoRow from '../../../components/CandidatesFormComponents/CandidateInfoRow/CandidateInfoRow';
import CandidateCvRow from '../../../components/CandidatesFormComponents/CandidateCvRow/CandidateCvRow';
import LoadingAnimation from '../../../components/LoadingAnimation/LoadingAnimation';
import './CandidateInfo.scss';

const CandidateInfo: FC = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const { loading, candidate } = useTypedSelector((state) => state.candidates);
  const cvName = candidate?.cvName;

  useEffect(() => {
    if (id) {
      dispatch(getCandidateAction(id));
    }
  }, [dispatch, id]);

  if (!candidate) {
    return <CandidatesList />;
  }

  const downloadCvHandler = () => {
    if (id) {
      dispatch(downloadCandidateCvAction(id));
    }
  };

  return (
    <div
      className="candidate-info-container"
      style={{ opacity: loading ? 0.5 : 1 }}>
      {loading && <LoadingAnimation />}
      <CandidateInfoHeader />
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
      {cvName !== null && (
        <CandidateCvRow
          labelName={'CV:'}
          downloadFunction={downloadCvHandler}
        />
      )}
    </div>
  );
};

export default CandidateInfo;
