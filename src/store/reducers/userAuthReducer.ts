import { IUser } from '../../types/authTypes/requests/IUser';
import {
  UserActionTypes,
  UserAuthAction,
  UserAuthState,
} from '../../types/userActionsTypes/userActionsTypes';

const initialUserState: UserAuthState = {
  isLoggedIn: false,
  isRefreshing: false,
  loading: false,
  user: {} as IUser,
  accessToken: '',
  refreshToken: '',
  message: '',
};

export const userAuthReducer = (
  state = initialUserState,
  action: UserAuthAction,
): UserAuthState => {
  switch (action.type) {
    case UserActionTypes.LOGIN_ACTION:
      return {
        ...state,
        isLoggedIn: false,
        loading: true,
        message: 'Login...',
      };
    case UserActionTypes.LOGIN_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        loading: false,
        user: {} as IUser,
        accessToken: '',
        refreshToken: '',
        message: 'Error during login',
      };
    case UserActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
        user: action?.payload?.user,
        accessToken: action?.payload?.accessToken,
        refreshToken: action?.payload?.refreshToken,
        message: 'Successfully logged',
      } as UserAuthState;
    case UserActionTypes.REGISTER_ACTION:
      return {
        ...state,
        isLoggedIn: false,
        loading: true,
        message: 'Register...',
      };
    case UserActionTypes.REGISTER_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        loading: false,
        user: {} as IUser,
        accessToken: '',
        refreshToken: '',
        message: 'Error during register',
      };
    case UserActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
        user: action?.payload?.user,
        accessToken: action?.payload?.accessToken,
        refreshToken: action?.payload?.refreshToken,
        message: 'Successfully registered',
      } as UserAuthState;
    case UserActionTypes.LOGOUT_FAILED:
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
        message: 'Error during logout',
      };
    case UserActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        loading: false,
        message: 'Successfully logout',
      };
    case UserActionTypes.REFRESH_ACTION:
      return {
        ...state,
        isLoggedIn: false,
        isRefreshing: true,
        loading: true,
        message: 'Refresh...',
      };
    case UserActionTypes.REFRESH_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        isRefreshing: false,
        loading: false,
        message: 'Error during refresh',
      };
    case UserActionTypes.REFRESH_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isRefreshing: false,
        loading: false,
        message: 'Successfully refreshed',
      };
    default:
      return state;
  }
};
