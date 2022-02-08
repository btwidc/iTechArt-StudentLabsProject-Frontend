import { UserAuthAction, UserActionTypes } from "../../pages/types/User";
import { Dispatch } from "redux";
import { IUserAuth } from "../../models/request/IUserAuth";
import api from "../../http";
import { LOGIN_ROUTE, MAIN_ROUTE } from "../../utils/routesPath";

export const loginAuthAction = (formState: IUserAuth, navigate: any) => {
  return async (dispatch: Dispatch<UserAuthAction>) => {
    try {
      dispatch({
        type: UserActionTypes.LOGIN_ACTION,
      });
      const response = await api.login(formState);
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      dispatch({
        type: UserActionTypes.LOGIN_SUCCESS,
        payload: response.data,
      });
      navigate(MAIN_ROUTE);
    } catch (e) {
      dispatch({
        type: UserActionTypes.LOGIN_FAILED,
      });
    }
  };
};

export const registerAuthAction = (formState: IUserAuth, navigate: any) => {
  return async (dispatch: Dispatch<UserAuthAction>) => {
    try {
      dispatch({
        type: UserActionTypes.REGISTER_ACTION,
      });
      const response = await api.registration(formState);
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      dispatch({
        type: UserActionTypes.REGISTER_SUCCESS,
        payload: response.data,
      });
      navigate(LOGIN_ROUTE);
    } catch (e) {
      dispatch({
        type: UserActionTypes.REGISTER_FAILED,
      });
    }
  };
};

export const logoutAuthAction = (navigate: any) => {
  return async (dispatch: Dispatch<UserAuthAction>) => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      if (refreshToken) await api.logout(refreshToken);
      dispatch({
        type: UserActionTypes.LOGOUT_SUCCESS,
      });
      navigate(LOGIN_ROUTE);
    } catch (e) {
      dispatch({
        type: UserActionTypes.LOGOUT_FAILED,
      });
    }
  };
};

export const checkAuthAction = () => {
  return async (dispatch: Dispatch<UserAuthAction>) => {
    try {
      dispatch({
        type: UserActionTypes.REFRESH_ACTION,
      });

      const refreshToken = localStorage.getItem("refreshToken");
      const response = await api.refresh(refreshToken);
      localStorage.setItem("accessToken", response.data.newAccessToken);
      dispatch({
        type: UserActionTypes.REFRESH_SUCCESS,
      });
    } catch (e) {
      dispatch({
        type: UserActionTypes.REFRESH_FAILED,
      });
    }
  };
};
