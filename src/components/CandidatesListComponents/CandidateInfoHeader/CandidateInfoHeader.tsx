import React, { FC } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { CANDIDATES_ROUTE } from '../../../routes/routesPath';

import { useDispatch } from 'react-redux';
import { deleteCandidateAction } from '../../../store/actions/candidatesActions';

import './CandidateInfoHeader.scss';

const CandidateInfoHeader: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const deleteCandidateHandler = () => {
    if (id) {
      dispatch(deleteCandidateAction(id));
      navigate(CANDIDATES_ROUTE);
    }
  };

  return (
    <div className="candidates-info-header">
      <h2>Candidate Info</h2>
      <button onClick={deleteCandidateHandler}>Delete</button>
    </div>
  );
};

export default CandidateInfoHeader;
