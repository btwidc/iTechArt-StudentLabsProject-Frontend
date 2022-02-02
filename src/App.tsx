import React, { useContext, useEffect } from "react";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { Context } from "./index";
import { observer } from "mobx-react-lite";
import { MAIN_ROUTE } from "./utils/routesPath";

const App = () => {
  const { userStore } = useContext(Context);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      userStore.checkAuth();
    }
  }, [userStore]);

  return (
    <BrowserRouter>
      {userStore.isAuth && console.log(userStore)}
      {userStore.isAuth && (
        <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
      )}
      <AppRouter />
    </BrowserRouter>
  );
};

export default observer(App);
