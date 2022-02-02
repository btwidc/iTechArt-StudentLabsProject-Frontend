import React, { useContext, useState } from "react";
import "./Auth.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  LOGIN_ROUTE,
  MAIN_ROUTE,
  REGISTRATION_ROUTE,
} from "../../../utils/routesPath";
import { Context } from "../../../index";
import { observer } from "mobx-react-lite";

const Auth = () => {
  const { userStore } = useContext(Context);
  const location = useLocation();
  const isRegistration = location.pathname === REGISTRATION_ROUTE;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  if (!userStore.isAuth) {
    return <Auth />;
  }

  return (
    <div className="limiter">
      <div className="auth-form-container">
        <div className="auth-form">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="auth-form-content"
          >
            <span className="auth-form-title">
              {isRegistration ? "Registration" : "Login"}
            </span>
            <div className="auth-form-item">
              <span className="auth-form-item-title">E-mail</span>
              <input
                className="auth-form-item-field"
                type="text"
                name="email"
                placeholder="Type your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="auth-form-item">
              <span className="auth-form-item-title">Password</span>
              <input
                className="auth-form-item-field"
                type="password"
                name="password"
                placeholder="Type your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {isRegistration && (
              <div className="auth-form-item">
                <span className="auth-form-item-title">Confirm Password</span>
                <input
                  className="auth-form-item-field"
                  type="password"
                  name="passwordConfirm"
                  placeholder="Confirm your password"
                />
              </div>
            )}
            <div className="auth-form-link-field">
              {isRegistration ? (
                <NavLink
                  className="auth-form-registration-link"
                  to={LOGIN_ROUTE}
                >
                  Already have an account? Sign in!
                </NavLink>
              ) : (
                <NavLink
                  className="auth-form-registration-link"
                  to={REGISTRATION_ROUTE}
                >
                  Don't have an account? Register here!
                </NavLink>
              )}
            </div>
            <div className="auth-form-button-field">
              {isRegistration ? (
                <button
                  className="auth-form-login-button"
                  onClick={() => userStore.registration(email, password)}
                >
                  Register
                </button>
              ) : (
                <button
                  className="auth-form-login-button"
                  onClick={() => {
                    userStore.login(email, password);
                    console.log(userStore);
                    navigate(MAIN_ROUTE);
                  }}
                >
                  Sign in
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default observer(Auth);
