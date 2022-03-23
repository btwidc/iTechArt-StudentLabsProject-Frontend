import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { contentRoutes } from '../routes/routes';
import { useTypedSelector } from '../hooks/useTypedSelector';

import MainContent from '../components/MainContent/MainContent';
import CandidateInfo from '../pages/Candidates/CandidateInfo/CandidateInfo';

const AppRouter = () => {
  const isLoggedIn = useTypedSelector((state) => state.user.isLoggedIn);
  return (
    <Routes>
      {isLoggedIn &&
        contentRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      <Route path="/candidates/:id" element={<CandidateInfo />} />
      <Route path="*" element={<MainContent />} />
    </Routes>
  );
};

export default AppRouter;
