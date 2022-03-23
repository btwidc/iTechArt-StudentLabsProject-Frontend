import React, { FC } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import AppRouter from '../../routers/AppRouter';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';

import './Content.scss';

const Content: FC = () => {
  const isRefreshing = useTypedSelector((state) => state.user.isRefreshing);
  return (
    <div
      className="content-container"
      style={{ opacity: isRefreshing ? 0.5 : 1 }}>
      <AppRouter />
      {isRefreshing && <LoadingAnimation />}
    </div>
  );
};

export default Content;
