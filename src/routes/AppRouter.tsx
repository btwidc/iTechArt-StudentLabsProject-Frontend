import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { authRoutes, publicRoutes } from "./routes";
import { Context } from "../index";
import Auth from "../components/pages/AuthPage/Auth";
import MainPage from "../components/pages/MainPage/MainPage";
import { observer } from "mobx-react-lite";

const AppRouter = () => {
  const { userStore } = useContext(Context);
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      {userStore.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      {userStore.isAuth ? (
        <Route path="*" element={<MainPage />} />
      ) : (
        <Route path="*" element={<Auth />} />
      )}
    </Routes>
  );
};

export default observer(AppRouter);
