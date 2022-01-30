import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../pages/Auth";
import Registration from "../pages/Registration";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/routesPath";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={LOGIN_ROUTE} element={<Auth />} />
      <Route path={REGISTRATION_ROUTE} element={<Registration />} />
      <Route path="*" element={<Auth />} />
    </Routes>
  );
};

export default AppRouter;
