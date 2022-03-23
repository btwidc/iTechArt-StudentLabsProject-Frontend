import { IUser } from '../authTypes/requests/IUser';

import { AuthResponse } from '../authTypes/responses/AuthResponse';
import { UserProfileInfoResponse } from '../authTypes/responses/UserProfileInfoResponse';

export interface UserAuthState {
  message: string;
  loading: boolean;
  isLoggedIn: boolean;
  isSetProfileInfo: boolean;
  isRefreshing: boolean;
  user: IUser | null;
  accessToken: string;
  refreshToken: string;
  name: string;
  surname: string;
  email: string;
  skype: string;
  ageExperience: number;
  department: string;
  summary: string;
}

export enum UserAuthActionsTypes {
  LOGIN_ACTION = 'LOGIN_ACTION',
  LOGIN_FAILED = 'LOGIN_FAILED',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  REGISTER_ACTION = 'REGISTER_ACTION',
  REGISTER_FAILED = 'REGISTER_FAILED',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  LOGOUT_FAILED = 'LOGOUT_FAILED',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
  REFRESH_ACTION = 'REFRESH_ACTION',
  REFRESH_FAILED = 'REFRESH_FAILED',
  REFRESH_SUCCESS = 'REFRESH_SUCCESS',
  ADD_PROFILE_INFO_ACTION = 'ADD_PROFILE_INFO_ACTION',
  ADD_PROFILE_INFO_FAILED = 'ADD_PROFILE_INFO_FAILED',
  ADD_PROFILE_INFO_SUCCESS = 'ADD_PROFILE_INFO_SUCCESS',
  GET_PROFILE_INFO_ACTION = 'GET_PROFILE_INFO_ACTION',
  GET_PROFILE_INFO_FAILED = 'GET_PROFILE_INFO_FAILED',
  GET_PROFILE_INFO_SUCCESS = 'GET_PROFILE_INFO_SUCCESS',
}

export interface UserAuthActions {
  type:
    | UserAuthActionsTypes.LOGIN_ACTION
    | UserAuthActionsTypes.LOGIN_FAILED
    | UserAuthActionsTypes.LOGIN_SUCCESS
    | UserAuthActionsTypes.REGISTER_ACTION
    | UserAuthActionsTypes.REGISTER_FAILED
    | UserAuthActionsTypes.REGISTER_SUCCESS
    | UserAuthActionsTypes.LOGOUT_FAILED
    | UserAuthActionsTypes.LOGOUT_SUCCESS
    | UserAuthActionsTypes.REFRESH_ACTION
    | UserAuthActionsTypes.REFRESH_FAILED
    | UserAuthActionsTypes.REFRESH_SUCCESS
    | UserAuthActionsTypes.ADD_PROFILE_INFO_ACTION
    | UserAuthActionsTypes.ADD_PROFILE_INFO_FAILED
    | UserAuthActionsTypes.ADD_PROFILE_INFO_SUCCESS
    | UserAuthActionsTypes.GET_PROFILE_INFO_ACTION
    | UserAuthActionsTypes.GET_PROFILE_INFO_FAILED
    | UserAuthActionsTypes.GET_PROFILE_INFO_SUCCESS;
  payload?: AuthResponse | UserProfileInfoResponse;
}
