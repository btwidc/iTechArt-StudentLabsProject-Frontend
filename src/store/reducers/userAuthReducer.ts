import {
  UserAuthActionsTypes,
  UserAuthActions,
  UserAuthState,
} from '../../types/actionsTypes/userActionsTypes/userAuthActionsTypes';

const initialUserState: UserAuthState = {
  message: '',
  isLoggedIn: false,
  isRefreshing: false,
  isSetProfileInfo: false,
  loading: false,
  user: null,
  userId: 0,
  accessToken: '',
  refreshToken: '',
  name: '',
  surname: '',
  email: '',
  skype: '',
  ageExperience: 0,
  department: '',
  summary: '',
  error: false,
};

export const userAuthReducer = (
  state = initialUserState,
  action: UserAuthActions,
): UserAuthState => {
  switch (action.type) {
    case UserAuthActionsTypes.LOGIN_ACTION:
      return {
        ...state,
        isLoggedIn: false,
        loading: true,
        message: 'Login...',
        error: false,
      };
    case UserAuthActionsTypes.LOGIN_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        loading: false,
        message: 'Error during login',
        error: true,
      };
    case UserAuthActionsTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
        message: 'Successfully logged',
        error: false,
        ...action?.payload,
      };
    case UserAuthActionsTypes.REGISTER_ACTION:
      return {
        ...state,
        isLoggedIn: false,
        loading: true,
        message: 'Register...',
        error: false,
      };
    case UserAuthActionsTypes.REGISTER_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        loading: false,
        message: 'Error during register',
        error: true,
      };
    case UserAuthActionsTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
        message: 'Successfully registered',
        error: false,
        ...action?.payload,
      };
    case UserAuthActionsTypes.LOGOUT_FAILED:
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
        message: 'Error during logout',
        error: false,
      };
    case UserAuthActionsTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        loading: false,
        isSetProfileInfo: false,
        message: 'Successfully logout',
        error: false,
      };
    case UserAuthActionsTypes.REFRESH_ACTION:
      return {
        ...state,
        isLoggedIn: false,
        isRefreshing: true,
        loading: true,
        message: 'Refresh...',
        error: false,
      };
    case UserAuthActionsTypes.REFRESH_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        isRefreshing: false,
        loading: false,
        message: 'Error during refresh',
        error: false,
      };
    case UserAuthActionsTypes.REFRESH_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isRefreshing: false,
        isSetProfileInfo: true,
        loading: false,
        message: 'Successfully refreshed',
        error: false,
        ...action?.payload,
      };
    case UserAuthActionsTypes.ADD_PROFILE_INFO_ACTION:
      return {
        ...state,
        isLoggedIn: true,
        isSetProfileInfo: false,
        loading: true,
        message: 'Adding profile info...',
      };
    case UserAuthActionsTypes.ADD_PROFILE_INFO_FAILED:
      return {
        ...state,
        isLoggedIn: true,
        isSetProfileInfo: false,
        loading: false,
        message: 'Error during adding profile info',
      };
    case UserAuthActionsTypes.ADD_PROFILE_INFO_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isSetProfileInfo: true,
        loading: false,
        message: 'Successfully add profile info',
        ...action?.payload,
      };
    case UserAuthActionsTypes.GET_PROFILE_INFO_ACTION:
      return {
        ...state,
        isLoggedIn: true,
        isSetProfileInfo: false,
        loading: true,
        message: 'Getting profile info...',
      };
    case UserAuthActionsTypes.GET_PROFILE_INFO_FAILED:
      return {
        ...state,
        isLoggedIn: true,
        isSetProfileInfo: false,
        loading: false,
        message: 'Error during getting profile info',
      };
    case UserAuthActionsTypes.GET_PROFILE_INFO_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isSetProfileInfo: true,
        loading: false,
        message: 'Successfully get profile info',
        ...action?.payload,
      };
    default:
      return state;
  }
};
