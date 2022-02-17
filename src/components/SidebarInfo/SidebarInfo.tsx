import React from 'react';
import './SidebarInfo.scss';
import { sidebarInfoRoutes } from '../../routes/routes';
import { Route, Routes } from 'react-router-dom';
import PortalSidebarInfo from '../../portalContent/PortalSidebarInfo';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const SidebarInfo = () => {
    const isLoggedIn = useTypedSelector((state) => state.user.isLoggedIn);
    return (
        <div id="sidebar-info-container">
            <Routes>
                {isLoggedIn &&
                    sidebarInfoRoutes.map(({ path, Component }) => (
                        <Route
                            key={path}
                            path={path}
                            element={
                                <PortalSidebarInfo>
                                    <Component />
                                </PortalSidebarInfo>
                            }
                        />
                    ))}
            </Routes>
        </div>
    );
};

export default SidebarInfo;
