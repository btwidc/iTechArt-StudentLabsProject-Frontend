import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../pages/Auth";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/routesPath";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={LOGIN_ROUTE} element={<Auth />} />
      <Route path={REGISTRATION_ROUTE} element={<Auth />} />
      <Route path="*" element={<Auth />} />
    </Routes>
  );
};

export default AppRouter;
