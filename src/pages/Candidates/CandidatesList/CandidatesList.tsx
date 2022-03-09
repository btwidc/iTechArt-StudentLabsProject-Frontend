import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import { useDispatch } from 'react-redux';
import { getCandidatesListAction } from '../../../store/actions/candidatesActions';

import CandidatesListHeader from './CandidatesListHeader/CandidatesListHeader';
import './CandidatesList.scss';

const Candidates = () => {
  const dispatch = useDispatch();

  const candidatesList = useTypedSelector((state) => state.candidates.candidates);

  useEffect(() => {
    dispatch(getCandidatesListAction());
  }, [dispatch]);

    return (
      <div className="candidates-list-container">
      <CandidatesListHeader />
      {candidatesList?.map((candidate) => (
        <div key={candidate.id} className="candidates-list-row">
        <Link to={`/candidates/${candidate.id}`}>
          <h3>{candidate.name + ' ' + candidate.surname}</h3>
        </Link>
        </div>
      ))}
      </div>
    );
};

export default Candidates;
