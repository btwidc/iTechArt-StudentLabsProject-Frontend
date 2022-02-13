import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { authRoutes, publicRoutes } from './routes';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Auth from '../pages/AuthPage/Auth';
import MainPage from '../pages/MainPage/MainPage';

const AppRouter = () => {
    const isLoggedIn = useTypedSelector((state) => state.user.isLoggedIn);
    return (
        <Routes>
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
            {isLoggedIn &&
                authRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
            {isLoggedIn ? (
                <Route path="*" element={<MainPage />} />
            ) : (
                <Route path="*" element={<Auth />} />
            )}
        </Routes>
    );
};

export default AppRouter;
