import { IUser } from "../../models/request/IUser";
import { AuthResponse } from "../../models/response/AuthResponse";

export interface UserAuthState {
  isLoggedIn: boolean;
  user?: IUser;
  accessToken?: string;
  refreshToken?: string;
  message: string;
}

export enum UserActionTypes {
  LOGIN_FAILED = "LOGIN_FAILED",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  REGISTER_FAILED = "REGISTER_FAILED",
  REGISTER_SUCCESS = "REGISTER_SUCCESS",
  LOGOUT_FAILED = "LOGOUT_FAILED",
  LOGOUT_SUCCESS = "LOGOUT_SUCCESS",
  REFRESH_FAILED = "REFRESH_FAILED",
  REFRESH_SUCCESS = "REFRESH_SUCCESS",
}

export interface UserAuthAction {
  type:
    | UserActionTypes.LOGIN_FAILED
    | UserActionTypes.LOGIN_SUCCESS
    | UserActionTypes.REGISTER_FAILED
    | UserActionTypes.REGISTER_SUCCESS
    | UserActionTypes.LOGOUT_FAILED
    | UserActionTypes.LOGOUT_SUCCESS
    | UserActionTypes.REFRESH_FAILED
    | UserActionTypes.REFRESH_SUCCESS;
  payload?: AuthResponse;
}
