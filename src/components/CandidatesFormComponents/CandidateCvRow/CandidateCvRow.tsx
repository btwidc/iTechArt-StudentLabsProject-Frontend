import React, { FC } from 'react';

import '../CandidateInfoRow/CandidateInfoRow';

interface CandidateInfoRowProps {
  labelName: string;
  downloadFunction: () => void;
}

const CandidateCvRow: FC<CandidateInfoRowProps> = ({
  labelName,
  downloadFunction,
}) => {
  return (
    <div className="candidate-info-row">
      <h3 className="candidate-info-label">{labelName}</h3>
      <h4 className="candidate-info-content">
        <button className="download-button" onClick={downloadFunction}>
          Download
        </button>
      </h4>
    </div>
  );
};

export default CandidateCvRow;
