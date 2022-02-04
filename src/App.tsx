import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { Context } from "./index";
import { observer } from "mobx-react-lite";
import AuthService from "./services/AuthService";

const App = () => {
  const { userStore } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      AuthService.refresh()
        .then((data) => {
          userStore.setAuth(true);
        })
        .finally(() => setLoading(false));
    }, 1000);
  }, [userStore]);

  if (loading) {
    setTimeout(() => {}, 500);
  }
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default observer(App);
