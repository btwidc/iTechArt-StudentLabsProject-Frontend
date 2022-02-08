import React, { useState } from "react";
import "./Auth.scss";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../../utils/routesPath";
import { useDispatch } from "react-redux";
import {
  loginAuthAction,
  registerAuthAction,
} from "../../store/actions/userActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const isLoading = useTypedSelector((state) => state.user.loading);
  const isRefreshing = useTypedSelector((state) => state.user.isRefreshing);

  const isRegistration = location.pathname === REGISTRATION_ROUTE;

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
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
      <div
        className="auth-form-container"
        style={{ opacity: isLoading ? 0.7 : 1 }}
      >
        <div className="auth-form">
          <form className="auth-form-content">
            {isLoading && !isRefreshing && <LoadingAnimation />}
            <span className="auth-form-title">
              {isRegistration ? "Registration" : "Login"}
            </span>
            <div className="auth-form-item">
              <label htmlFor="email" className="auth-form-item-title">
                E-mail
              </label>
              <input
                className="auth-form-item-field"
                type="text"
                id="email"
                placeholder="Type your email"
                value={formState.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="auth-form-item">
              <label htmlFor="password" className="auth-form-item-title">
                Password
              </label>
              <input
                className="auth-form-item-field"
                type="password"
                id="password"
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
