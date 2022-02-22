import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import './MainPage.scss';
import Content from '../../components/Content/Content';
import NavMenu from '../../components/NavMenu/NavMenu';
import SidebarInfo from '../../components/SidebarInfo/SidebarInfo';
import LoadingAnimation from '../../components/LoadingAnimation/LoadingAnimation';

const MainPage = () => {
    const isRefreshing = useTypedSelector((state) => state.user.isRefreshing);

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const showSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <div className="limiter" style={{ opacity: isRefreshing ? 0.5 : 1 }}>
            {isRefreshing && <LoadingAnimation />}
            <div className="header-container">
                <button className="header-nav-drop-down" onClick={showSidebar}>
                    <img src="/images/dropDownIcon.png" alt="Drop down icon" />
                </button>
                <Link className="header-nav-logo" to="/">
                    <img src={'/images/iTechArtLogo.png'} alt="iTechArt logo" />
                </Link>
            </div>
            <NavMenu open={sidebarOpen} setOpen={setSidebarOpen} />
            <Content />
            <SidebarInfo />
        </div>
    );
};

export default MainPage;
