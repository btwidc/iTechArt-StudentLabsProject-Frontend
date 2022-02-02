import React, { useContext, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { Context } from "./index";
import { observer } from "mobx-react-lite";

const App = () => {
  const { userStore } = useContext(Context);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      userStore.checkAuth();
    }
  }, [userStore]);

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default observer(App);
