import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import { Context } from "../index";

const AppRouter = () => {
  const { userStore } = useContext(Context);
  console.log(userStore);
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};

export default AppRouter;
