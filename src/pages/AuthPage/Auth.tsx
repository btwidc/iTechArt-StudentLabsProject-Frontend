import React, { useState } from "react";
import "./Auth.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../../utils/routesPath";
import { useDispatch } from "react-redux";
import {
  loginAuthAction,
  registerAuthAction,
} from "../../store/actions/userActions";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const isRegistration = location.pathname === REGISTRATION_ROUTE;

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    dispatch(loginAuthAction(formState, navigate));
    setFormState({ email: "", password: "" });
  };

  const handleRegister = async (e: any) => {
    e.preventDefault();
    dispatch(registerAuthAction(formState, navigate));
    setFormState({ email: "", password: "" });
  };

  return (
    <div className="limiter">
      <div className={`${formState} auth-form-container`}>
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
                value={formState.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="auth-form-item">
              <span className="auth-form-item-title">Password</span>
              <input
                className="auth-form-item-field"
                type="password"
                name="password"
                placeholder="Type your password"
                value={formState.password}
                onChange={(e) => handleChange(e)}
              />
            </div>
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
                  name="Register"
                  type="submit"
                  onClick={(e) => handleRegister(e)}
                >
                  Register
                </button>
              ) : (
                <button
                  className="auth-form-login-button"
                  name="Login"
                  type="submit"
                  onClick={(e) => handleLogin(e)}
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

export default Auth;
