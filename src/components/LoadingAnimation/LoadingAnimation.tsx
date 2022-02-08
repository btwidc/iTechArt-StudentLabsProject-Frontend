import React from "react";
import "./LoadingAnimation.scss";
import FadingBalls from "react-cssfx-loading/lib/FadingBalls";

const LoadingAnimation = () => {
  return (
    <div className="loading-animation-container">
      <FadingBalls
        color="lightsalmon"
        width="16px"
        height="15px"
        duration="0.8s"
      />
    </div>
  );
};

export default LoadingAnimation;
