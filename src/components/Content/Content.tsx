import React from 'react';
import './Content.scss';
import { contentRoutes } from '../../routes/routes';
import { Route, Routes } from 'react-router-dom';
import PortalContent from '../../portalContent/PortalContent';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Content = () => {
    const isLoggedIn = useTypedSelector((state) => state.user.isLoggedIn);
    return (
        <div id="content-container">
            <Routes>
                {isLoggedIn &&
                    contentRoutes.map(({ path, Component }) => (
                        <Route
                            key={path}
                            path={path}
                            element={
                                <PortalContent>
                                    <Component />
                                </PortalContent>
                            }
                        />
                    ))}
            </Routes>
        </div>
    );
};

export default Content;
