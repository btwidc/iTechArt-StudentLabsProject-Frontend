import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import { useDispatch } from 'react-redux';
import { getCandidatesListAction } from '../../../store/actions/candidatesActions';

import CandidatesListHeader from '../../../components/CandidatesListHeader/CandidatesListHeader';
import './CandidatesList.scss';

const CandidatesList = () => {
  const dispatch = useDispatch();

  const candidatesList = useTypedSelector(
    (state) => state.candidates.candidates,
  );

  useEffect(() => {
    dispatch(getCandidatesListAction());
  }, [dispatch]);

  return (
    <div className="candidates-list-container">
      <CandidatesListHeader />
      <div className="candidates-list">
        {candidatesList?.map((candidate) => (
          <div key={candidate.id} className="candidates-list-row">
            <Link to={`/candidates/${candidate.id}`}>
              <h3>{candidate.name + ' ' + candidate.surname}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidatesList;
