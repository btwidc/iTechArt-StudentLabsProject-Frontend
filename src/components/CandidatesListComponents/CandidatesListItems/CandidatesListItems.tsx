import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import './CandidatesListItems.scss';

const CandidatesListItems: FC = () => {
  const { candidates } = useTypedSelector((state) => state.candidates);

  return (
    <div className="candidates-list">
      {candidates?.map((candidate) => (
        <div key={candidate.id} className="candidates-list-row">
          <Link to={`/candidates/${candidate.id}`}>
            <h3>{candidate.name + ' ' + candidate.surname}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CandidatesListItems;
