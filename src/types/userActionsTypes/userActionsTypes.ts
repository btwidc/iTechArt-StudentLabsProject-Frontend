import { IUser } from '../authTypes/requests/IUser';
import { AuthResponse } from '../authTypes/responses/AuthResponse';

export interface UserAuthState {
    isLoggedIn: boolean;
    loading: boolean;
    isRefreshing?: boolean;
    user?: IUser;
    accessToken?: string;
    refreshToken?: string;
    message?: string;
    errorStatus?: number;
}

export enum UserActionTypes {
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
}

export interface UserAuthAction {
    type:
        | UserActionTypes.LOGIN_ACTION
        | UserActionTypes.LOGIN_FAILED
        | UserActionTypes.LOGIN_SUCCESS
        | UserActionTypes.REGISTER_ACTION
        | UserActionTypes.REGISTER_FAILED
        | UserActionTypes.REGISTER_SUCCESS
        | UserActionTypes.LOGOUT_FAILED
        | UserActionTypes.LOGOUT_SUCCESS
        | UserActionTypes.REFRESH_ACTION
        | UserActionTypes.REFRESH_FAILED
        | UserActionTypes.REFRESH_SUCCESS;
    payload?: AuthResponse;
}
