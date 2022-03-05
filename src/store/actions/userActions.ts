import { Dispatch } from 'redux';

import {
  UserAuthActions,
  UserAuthActionsTypes,
} from '../../types/userActionsTypes/userAuthActionsTypes';

import AuthService from '../../services/AuthService';
import { IUserAuth } from '../../types/authTypes/requests/IUserAuth';
import { IUserProfileInfo } from '../../types/authTypes/requests/IUserProfileInfo';

export const loginAuthAction = (formState: IUserAuth) => {
  return async (dispatch: Dispatch<UserAuthActions>) => {
    try {
      dispatch({
        type: UserAuthActionsTypes.LOGIN_ACTION,
      });
      const response = await AuthService.login(formState);
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      dispatch({
        type: UserAuthActionsTypes.LOGIN_SUCCESS,
        payload: response.data,
      });
      dispatch({
        type: UserAuthActionsTypes.GET_PROFILE_INFO_ACTION,
      });
      const isSetProfile = await AuthService.getProfileInfo();
      dispatch({
        type: UserAuthActionsTypes.GET_PROFILE_INFO_SUCCESS,
        payload: isSetProfile.data,
      });
    } catch (e: any) {
      if (e.response.status === 400) {
        dispatch({
          type: UserAuthActionsTypes.GET_PROFILE_INFO_FAILED,
        });
      } else {
        dispatch({
          type: UserAuthActionsTypes.LOGIN_FAILED,
        });
      }
    }
  };
};

export const registerAuthAction = (formState: IUserAuth) => {
  return async (dispatch: Dispatch<UserAuthActions>) => {
    try {
      dispatch({
        type: UserAuthActionsTypes.REGISTER_ACTION,
      });
      const response = await AuthService.registration(formState);
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      dispatch({
        type: UserAuthActionsTypes.REGISTER_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: UserAuthActionsTypes.REGISTER_FAILED,
      });
    }
  }
};

export const logoutAuthAction = () => {
  return async (dispatch: Dispatch<UserAuthActions>) => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      if (refreshToken) await AuthService.logout(refreshToken);
      dispatch({
        type: UserAuthActionsTypes.LOGOUT_SUCCESS,
      });
    } catch (e) {
      dispatch({
        type: UserAuthActionsTypes.LOGOUT_FAILED,
      });
    }
  };
};

export const checkAuthAction = () => {
  return async (dispatch: Dispatch<UserAuthActions>) => {
    try {
      dispatch({
        type: UserAuthActionsTypes.REFRESH_ACTION,
      });
      const refreshToken = localStorage.getItem('refreshToken');
      const response = await AuthService.refresh(refreshToken);
      localStorage.setItem('accessToken', response.data);
      const isSetProfile = await AuthService.getProfileInfo();
      dispatch({
        type: UserAuthActionsTypes.REFRESH_SUCCESS,
        payload: isSetProfile.data,
      });
    } catch (e) {
      dispatch({
        type: UserAuthActionsTypes.REFRESH_FAILED,
      });
    }
  };
};

export const addProfileInfo = (
  profileFormState: IUserProfileInfo,
) => {
  return async (dispatch: Dispatch<UserAuthActions>) => {
    try {
      dispatch({
        type: UserAuthActionsTypes.ADD_PROFILE_INFO_ACTION,
      });
      await AuthService.addProfileInfo(profileFormState);
      dispatch({
        type: UserAuthActionsTypes.ADD_PROFILE_INFO_SUCCESS,
      });
      dispatch({
        type: UserAuthActionsTypes.GET_PROFILE_INFO_ACTION,
      });
      const isSetProfile = await AuthService.getProfileInfo();
      dispatch({
        type: UserAuthActionsTypes.GET_PROFILE_INFO_SUCCESS,
        payload: isSetProfile.data,
      });
    } catch (e: any) {
      if (e.response.status === 400) {
        dispatch({
          type: UserAuthActionsTypes.GET_PROFILE_INFO_FAILED,
        });
      } else {
        dispatch({
          type: UserAuthActionsTypes.ADD_PROFILE_INFO_FAILED,
        });
      }
    }
  };
};
