import React, { FC, useEffect } from 'react';
import { useTypedSelector } from './hooks/useTypedSelector';

import { useDispatch } from 'react-redux';
import { checkAuthAction } from './store/actions/userActions';

import MainPage from './pages/MainPage/MainPage';
import Auth from './pages/AuthPage/Auth';
import './App.scss';

const App: FC = () => {
  const dispatch = useDispatch();

  const { isLoggedIn, isRefreshing } = useTypedSelector((state) => state.user);

  useEffect(() => {
    dispatch(checkAuthAction());
  }, [dispatch]);

  if (!isLoggedIn && !isRefreshing) {
    return <Auth />;
  }

  return <MainPage />;
};

export default App;
