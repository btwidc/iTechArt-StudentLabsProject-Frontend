import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import AppRouter from '../../routers/AppRouter';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import './Content.scss';

const Content = () => {
  const isRefreshing = useTypedSelector((state) => state.user.isRefreshing);
  return (
    <>
      <AppRouter />
      <div
        className="content-container"
        style={{ opacity: isRefreshing ? 0.5 : 1 }}>
        {isRefreshing && <LoadingAnimation />}
      </div>
    </>
  );
};

export default Content;
