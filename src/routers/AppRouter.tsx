import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { contentRoutes } from '../routes/routes';
import { useTypedSelector } from '../hooks/useTypedSelector';

import ContentExtension from '../components/Portals/ContentExtension';

const AppRouter = () => {
    const isLoggedIn = useTypedSelector((state) => state.user.isLoggedIn);
    return (
        <Routes>
            {isLoggedIn &&
                contentRoutes.map(({ path, Component }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <ContentExtension>
                                <Component />
                            </ContentExtension>
                        }
                    />
                ))}
        </Routes>
    );
};

export default AppRouter;
