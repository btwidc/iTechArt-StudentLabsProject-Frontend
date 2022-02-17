import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { LOGIN_ROUTE } from '../../utils/routesPath';

import './MainPage.scss';
import Content from '../../components/Content/Content';
import SidebarNavMenu from '../../components/SidebarNavMenu/SidebarNavMenu';
import SidebarInfo from '../../components/SidebarInfo/SidebarInfo';

const MainPage = () => {
    const navigate = useNavigate();
    const isLoggedIn = useTypedSelector((state) => state.user.isLoggedIn);

    if (!isLoggedIn) {
        navigate(LOGIN_ROUTE);
    }

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const showSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <div className="limiter">
            <div className="header-container">
                <button className="header-nav-drop-down" onClick={showSidebar}>
                    <img src="/images/dropDownIcon.png" alt="Drop down icon" />
                </button>
                <Link className="header-nav-logo" to="/">
                    <img src={'/images/iTechArtLogo.png'} alt="iTechArt logo" />
                </Link>
            </div>
            <SidebarNavMenu open={sidebarOpen} setOpen={setSidebarOpen} />
            <Content />
            <SidebarInfo />
        </div>
    );
};

export default MainPage;
