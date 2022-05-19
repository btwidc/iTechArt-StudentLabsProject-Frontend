import React, { FC } from 'react';

import './TimeHandler.scss';

interface TimeHandlerProps {
  time: number;
}

const TimeHandler: FC<TimeHandlerProps> = ({ time }) => {
  return (
    <div className="timeDigits">
      <h2>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</h2>
      <h2>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</h2>
    </div>
  );
};

export default TimeHandler;
