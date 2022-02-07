import React from "react";
import { useDispatch } from "react-redux";
import { logoutAuthAction } from "../../store/actions/userActions";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import api from "../../http";

const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useTypedSelector((state) => state.user.isLoggedIn);

  const test = async () => {
    const response = await api.test();
    console.log(response.data);
  };

  const handleLogout = async (e: any) => {
    e.preventDefault();
    dispatch(logoutAuthAction(navigate));
  };

  return (
    <div>
      <h1>{isLoggedIn ? "Good" : "Bad"}</h1>
      Main page
      <button onClick={(e) => handleLogout(e)}>Logout</button>
      <button onClick={test}>Test</button>
    </div>
  );
};

export default MainPage;
