import React from 'react';
import FadingBalls from 'react-cssfx-loading/lib/FadingBalls';
import './LoadingAnimation.scss';

const LoadingAnimation = () => {
  return (
    <div className="loading-animation-container">
      <FadingBalls color="#ffa07a" width="16px" height="15px" duration="0.8s" />
    </div>
  );
};

export default LoadingAnimation;
