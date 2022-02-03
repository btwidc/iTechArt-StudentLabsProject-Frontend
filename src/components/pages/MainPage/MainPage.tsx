import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index";
import { LOGIN_ROUTE } from "../../../utils/routesPath";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../../models/IUser";

const MainPage = () => {
  const { userStore } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    userStore.setAuth(false);
    userStore.setUser({} as IUser);
  };

  if (!userStore.isAuth) {
    navigate(LOGIN_ROUTE);
  }

  return (
    <div>
      Main page
      <button onClick={logOut}>Logout</button>
    </div>
  );
};

export default observer(MainPage);
