import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes } from "./routes";
import { Context } from "../index";
import { MAIN_ROUTE } from "../utils/routesPath";

const AppRouter = () => {
  const { userStore } = useContext(Context);
  console.log(userStore);
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      {userStore.isAuth && (
        <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
      )}
    </Routes>
  );
};

export default AppRouter;
