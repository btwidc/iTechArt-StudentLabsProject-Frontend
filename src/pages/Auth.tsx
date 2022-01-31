import React from "react";
import "../css-modules/Auth.css";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/routesPath";

const Auth = () => {
  const location = useLocation();
  const isRegistration = location.pathname === REGISTRATION_ROUTE;
  return (
    <div className="limiter">
      <div className="auth-form-container">
        <div className="auth-form">
          <form className="auth-form-content">
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
              />
            </div>
            <div className="auth-form-item">
              <span className="auth-form-item-title">Password</span>
              <input
                className="auth-form-item-field"
                type="password"
                name="password"
                placeholder="Type your password"
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
              <button className="auth-form-login-button">
                {isRegistration ? "Register" : "Sign in"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
