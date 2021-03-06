import React, { FC } from 'react';
import FadingBalls from 'react-cssfx-loading/lib/FadingBalls';
import './LoadingAnimation.scss';

const LoadingAnimation: FC = () => {
  return (
    <div className="loading-animation-container">
      <FadingBalls color="#e61919" width="16px" height="15px" duration="0.8s" />
    </div>
  );
};

export default LoadingAnimation;
