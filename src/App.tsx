import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from './hooks/useTypedSelector';
import { checkAuthAction } from './store/actions/userActions';

import MainPage from './pages/MainPage/MainPage';
import Auth from './pages/AuthPage/Auth';
import AppRouter from './routers/AppRouter';

const App = () => {
    const dispatch = useDispatch();
    const refreshToken = localStorage.getItem('refreshToken');

    const isLoggedIn = useTypedSelector((state) => state.user.isLoggedIn);
    const isRefreshing = useTypedSelector((state) => state.user.isRefreshing);

    useEffect(() => {
        if (refreshToken) {
            dispatch(checkAuthAction());
        }
    }, [dispatch, refreshToken]);

    if (!isLoggedIn && !isRefreshing) {
        return <Auth />;
    }

    return (
        <div>
            <MainPage />
            <AppRouter />
        </div>
    );
};

export default App;
