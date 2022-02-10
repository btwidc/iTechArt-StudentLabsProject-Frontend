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
    <div className="sidebar-nav-container">
      <section className="sidebar-nav-menu-container">
        <a className="sidebar-nav-logo" href="/">
          <img
            className="sidebar-nav-logo"
            src={"/images/iTechArtLogo.png"}
            alt="iTechArt logo"
          />
        </a>
        <div className="sidebar-nav-menu">
          <nav className="nav-menu">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#">Profile</a>
              </li>
              <li className="nav-item">
                <a href="#">Company</a>
              </li>
              <li className="nav-item">
                <a href="#">Contacts</a>
              </li>
              <li className="divider" />
              <li className="nav-item">
                <a onClick={handleLogout} href="#">
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default SidebarNavMenu;
