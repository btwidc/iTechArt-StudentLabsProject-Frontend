import React from "react";
import { useDispatch } from "react-redux";
import { logoutAuthAction } from "../../store/actions/userActions";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import api from "../../http";
import { LOGIN_ROUTE } from "../../utils/routesPath";

const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useTypedSelector((state) => state.user.isLoggedIn);

  const test = async () => {
    const response = await api.test();
    console.log(response.data);
  };

  if (!isLoggedIn) {
    navigate(LOGIN_ROUTE);
  }

  const handleLogout = async (e: any) => {
    e.preventDefault();
    dispatch(logoutAuthAction(navigate));
  };

  return (
    <div>
      <button onClick={(e) => handleLogout(e)}>Logout</button>
      <button onClick={test}>Test</button>
    </div>
  );
};

export default MainPage;
