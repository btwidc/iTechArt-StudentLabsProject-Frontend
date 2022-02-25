import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/routesPath';
import { useDispatch } from 'react-redux';
import {
  loginAuthAction,
  registerAuthAction,
} from '../../store/actions/userActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import AuthInput from '../../components/AuthInput/AuthInput';
import LoadingAnimation from '../../components/LoadingAnimation/LoadingAnimation';
import './Auth.scss';

const Auth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

  const isLoading = useTypedSelector((state) => state.user.loading);

    const isRegistration = location.pathname === REGISTRATION_ROUTE;

  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFormState({ ...formState, [e.target.id]: e.target.value });
    };

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(loginAuthAction(formState, navigate));
    setFormState({ email: '', password: '' });
  };

  const handleRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(registerAuthAction(formState, navigate));
    setFormState({ email: '', password: '' });
  };

  return (
    <div className="limiter">
      <div
        className="auth-form-container"
        style={{ opacity: isLoading ? 0.7 : 1 }}>
        <div className="auth-form">
          <form className="auth-form-content">
            {isLoading && <LoadingAnimation />}
            <span className="auth-form-title">
              {isRegistration ? 'Registration' : 'Login'}
            </span>
            <AuthInput
              labelName="E-mail"
              type="text"
              id="email"
              placeholder="Type your email"
              value={formState.email}
              onChange={handleChange}
            />
            <AuthInput
              labelName="Password"
              type="password"
              id="password"
              placeholder="Type your password"
              value={formState.password}
              onChange={handleChange}
            />
            <div className="auth-form-link-field">
              <NavLink
                className="auth-form-registration-link"
                to={isRegistration ? LOGIN_ROUTE : REGISTRATION_ROUTE}>
                {isRegistration
                  ? 'Already have an account? Sign in!'
                  : "Don't have an account? Register here!"}
              </NavLink>
            </div>
            <div className="auth-form-button-field">
              <button
                className="auth-form-login-button"
                name={isRegistration ? 'Register' : 'Login'}
                type="submit"
                onClick={isRegistration ? handleRegister : handleLogin}>
                {isRegistration ? 'Register' : 'Sign in'}
              </button>
            </div>
          </form>
        </div>
    );
};

export default Auth;
