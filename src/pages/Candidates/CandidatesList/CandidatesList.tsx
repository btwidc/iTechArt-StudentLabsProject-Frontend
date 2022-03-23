import React, { FC, useEffect } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import { useDispatch } from 'react-redux';
import { getCandidatesListAction } from '../../../store/actions/candidatesActions';

import LoadingAnimation from '../../../components/LoadingAnimation/LoadingAnimation';
import CandidatesListHeader from '../../../components/CandidatesListComponents/CandidatesListHeader/CandidatesListHeader';
import CandidatesListItems from '../../../components/CandidatesListComponents/CandidatesListItems/CandidatesListItems';
import './CandidatesList.scss';

const CandidatesList: FC = () => {
  const dispatch = useDispatch();

  const { loading } = useTypedSelector((state) => state.candidates);

  useEffect(() => {
    dispatch(getCandidatesListAction());
  }, [dispatch]);

  return (
    <div
      className="candidates-list-container"
      style={{ opacity: loading ? 0.5 : 1 }}>
      {loading && <LoadingAnimation />}
      <CandidatesListHeader />
      <CandidatesListItems />
    </div>
  );
};

export default CandidatesList;
