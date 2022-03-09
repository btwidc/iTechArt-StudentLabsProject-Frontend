import React from 'react';

import './CandidateInfoRow.scss';

interface CandidateInfoRowProps {
  labelName: string;
  rowInfo: string | undefined;
}

const CandidateInfoRow = ({
  labelName,
  rowInfo
}: CandidateInfoRowProps) => {
  return (
      <div className="candidate-info-row">
        <h3 className="candidate-info-label">{labelName}</h3>
        <h4 className="candidate-info-content">{rowInfo}</h4>
      </div>
  );
};

export default CandidateInfoRow;
