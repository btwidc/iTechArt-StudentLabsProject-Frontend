import React, { useEffect } from 'react';
import { useTypedSelector } from './hooks/useTypedSelector';

import { useDispatch } from 'react-redux';
import { checkAuthAction } from './store/actions/userActions';

import MainPage from './pages/MainPage/MainPage';
import Auth from './pages/AuthPage/Auth';
import './App.scss';

const App = () => {
  const dispatch = useDispatch();
  const refreshToken = localStorage.getItem('refreshToken');

  const isLoggedIn = useTypedSelector((state) => state.user.isLoggedIn);
  const isRefreshing = useTypedSelector((state) => state.user.isRefreshing);

  useEffect(() => {
    dispatch(checkAuthAction());
    if (!refreshToken) {
      return;
    }
  }, [dispatch, refreshToken]);

  if (!isLoggedIn && !isRefreshing) {
    return <Auth />;
  }

  return <MainPage />;
};

export default App;
