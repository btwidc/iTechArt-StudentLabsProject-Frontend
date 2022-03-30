import { Dispatch } from 'redux';

import {
  UserAuthActions,
  UserAuthActionsTypes,
} from '../../types/actionsTypes/userActionsTypes/userAuthActionsTypes';

import AuthService from '../../services/AuthService';
import { IUserAuth } from '../../types/authTypes/requests/IUserAuth';
import { IUserProfileInfo } from '../../types/authTypes/requests/IUserProfileInfo';

export const loginAuthAction = (formState: IUserAuth) => {
  return async (dispatch: Dispatch<UserAuthActions>) => {
    try {
      dispatch({
        type: UserAuthActionsTypes.LOGIN_ACTION,
      });
      const userInfo = await AuthService.login(formState);
      localStorage.setItem('accessToken', userInfo.data.accessToken);
      localStorage.setItem('refreshToken', userInfo.data.refreshToken);
      dispatch({
        type: UserAuthActionsTypes.LOGIN_SUCCESS,
        payload: userInfo.data,
      });
      const userId = userInfo.data.user.id.toString();
      dispatch({
        type: UserAuthActionsTypes.GET_PROFILE_INFO_ACTION,
      });
      const isSetProfile = await AuthService.getProfileInfo(userId);
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
      const userInfo = await AuthService.registration(formState);
      localStorage.setItem('accessToken', userInfo.data.accessToken);
      localStorage.setItem('refreshToken', userInfo.data.refreshToken);
      dispatch({
        type: UserAuthActionsTypes.REGISTER_SUCCESS,
        payload: userInfo.data,
      });
    } catch (e) {
      dispatch({
        type: UserAuthActionsTypes.REGISTER_FAILED,
      });
    }
  };
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
      const refreshResponse = await AuthService.refresh(refreshToken);
      localStorage.setItem('accessToken', refreshResponse.data.newAccessToken);
      const userId = refreshResponse.data.user.id.toString();
      const profileInfo = await AuthService.getProfileInfo(userId);
      dispatch({
        type: UserAuthActionsTypes.REFRESH_SUCCESS,
        payload: profileInfo.data,
      });
    } catch (e) {
      dispatch({
        type: UserAuthActionsTypes.REFRESH_FAILED,
      });
    }
  };
};

export const addProfileInfo = (profileFormState: IUserProfileInfo) => {
  return async (dispatch: Dispatch<UserAuthActions>) => {
    try {
      dispatch({
        type: UserAuthActionsTypes.ADD_PROFILE_INFO_ACTION,
      });
      const profileFormInfo = await AuthService.addProfileInfo(
        profileFormState,
      );
      dispatch({
        type: UserAuthActionsTypes.ADD_PROFILE_INFO_SUCCESS,
        payload: profileFormInfo.data,
      });
      const userId = profileFormInfo.data.userId.toString();
      dispatch({
        type: UserAuthActionsTypes.GET_PROFILE_INFO_ACTION,
      });
      const profileInfo = await AuthService.getProfileInfo(userId);
      dispatch({
        type: UserAuthActionsTypes.GET_PROFILE_INFO_SUCCESS,
        payload: profileInfo.data,
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

export const getProfileInfo = (id: string) => {
  return async (dispatch: Dispatch<UserAuthActions>) => {
    try {
      dispatch({
        type: UserAuthActionsTypes.GET_PROFILE_INFO_ACTION,
      });
      const profileInfo = await AuthService.getProfileInfo(id);
      dispatch({
        type: UserAuthActionsTypes.GET_PROFILE_INFO_SUCCESS,
        payload: profileInfo.data,
      });
    } catch (e) {
      dispatch({
        type: UserAuthActionsTypes.GET_PROFILE_INFO_FAILED,
      });
    }
  };
};
