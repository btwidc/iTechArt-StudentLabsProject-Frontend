import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { authRoutes, publicRoutes } from "./routes";
import { Context } from "../index";
import Auth from "../components/pages/AuthPage/Auth";

const AppRouter = () => {
  const { userStore } = useContext(Context);
  return (
    <Routes>
      {userStore.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      {!userStore.isAuth && <Route path="*" element={<Auth />} />}
    </Routes>
  );
};

export default AppRouter;
