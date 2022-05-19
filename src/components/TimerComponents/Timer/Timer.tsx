import React, { FC, useEffect, useState } from 'react';

import TimeHandler from '../TImeHandler/TimeHandler';
import './Timer.scss';

interface TimerProps {
  toggleResponseForm: () => void;
}

const Timer: FC<TimerProps> = ({ toggleResponseForm }) => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  const startTimer = () => {
    setTimerOn(true);
  };

  const finishTimer = () => {
    setTimerOn(false);
    toggleResponseForm();
    setTime(0);
  };

  useEffect(() => {
    let interval: any = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timerOn]);

  return (
    <div className="timer">
      <TimeHandler time={time} />
      <div className="timer-buttons-block">
        <button className="timer-button" onClick={startTimer}>
          Start Event
        </button>
        <button className="timer-button" onClick={finishTimer}>
          Finish Event
        </button>
      </div>
    </div>
  );
};

export default Timer;
