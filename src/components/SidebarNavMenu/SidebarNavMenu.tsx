import React from "react";
import "./SidebarNavMenu.scss";
import { logoutAuthAction } from "../../store/actions/userActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//import AuthService from "../../services/AuthService";

const SidebarNavMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const test = async () => {
  //   const response = await AuthService.test();
  //   console.log(response.data);
  // };

  const handleLogout = async (e: any) => {
    e.preventDefault();
    dispatch(logoutAuthAction(navigate));
  };

  return (
    <nav className="sidebar-nav-menu">
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default SidebarNavMenu;
