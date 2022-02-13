import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { LOGIN_ROUTE } from '../../utils/routesPath';
import './MainPage.scss';

const MainPage = () => {
    const navigate = useNavigate();
    const isLoggedIn = useTypedSelector((state) => state.user.isLoggedIn);

    if (!isLoggedIn) {
        navigate(LOGIN_ROUTE);
    }

    return <div className="limiter"></div>;
};

export default MainPage;
