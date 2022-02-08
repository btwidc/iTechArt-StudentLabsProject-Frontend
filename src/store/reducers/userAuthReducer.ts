import { IUser } from "../../models/request/IUser";
import {
  UserActionTypes,
  UserAuthAction,
  UserAuthState,
} from "../../pages/types/User";

const initialUserState: UserAuthState = {
  isLoggedIn: false,
  loading: false,
  user: {} as IUser,
  accessToken: "",
  refreshToken: "",
  message: "",
};

export const userAuthReducer = (
  state = initialUserState,
  action: UserAuthAction
): UserAuthState => {
  switch (action.type) {
    case UserActionTypes.LOGIN_ACTION:
      return {
        isLoggedIn: false,
        loading: true,
        message: "Login...",
      };
    case UserActionTypes.LOGIN_FAILED:
      return {
        isLoggedIn: false,
        loading: false,
        user: {} as IUser,
        accessToken: "",
        refreshToken: "",
        message: "Error during login",
      };
    case UserActionTypes.LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
        loading: false,
        user: action?.payload?.user,
        accessToken: action?.payload?.accessToken,
        refreshToken: action?.payload?.refreshToken,
        message: "Successfully logged",
      };
    case UserActionTypes.REGISTER_ACTION:
      return {
        isLoggedIn: false,
        loading: true,
        message: "Register...",
      };
    case UserActionTypes.REGISTER_FAILED:
      return {
        isLoggedIn: false,
        loading: false,
        user: {} as IUser,
        accessToken: "",
        refreshToken: "",
        message: "Error during register",
      };
    case UserActionTypes.REGISTER_SUCCESS:
      return {
        isLoggedIn: true,
        loading: false,
        user: action?.payload?.user,
        accessToken: action?.payload?.accessToken,
        refreshToken: action?.payload?.refreshToken,
        message: "Successfully registered",
      };
    case UserActionTypes.LOGOUT_FAILED:
      return {
        isLoggedIn: true,
        loading: false,
        message: "Error during logout",
      };
    case UserActionTypes.LOGOUT_SUCCESS:
      return {
        isLoggedIn: false,
        loading: false,
        message: "Successfully logout",
      };
    case UserActionTypes.REFRESH_ACTION:
      return {
        isLoggedIn: false,
        isRefreshing: true,
        loading: true,
        message: "Refresh...",
      };
    case UserActionTypes.REFRESH_FAILED:
      return {
        isLoggedIn: false,
        loading: false,
        message: "Error during refresh",
      };
    case UserActionTypes.REFRESH_SUCCESS:
      return {
        isLoggedIn: true,
        loading: false,
        message: "Successfully refreshed",
      };
    default:
      return state;
  }
};
