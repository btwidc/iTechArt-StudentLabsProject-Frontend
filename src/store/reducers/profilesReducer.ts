import {
  GetProfilesActions,
  ProfilesActionsTypes,
  ProfilesState,
} from '../../types/actionsTypes/profiflesActionsTypes/profilesActionsTypes';

const initialProfilesState: ProfilesState = {
  message: '',
  loading: false,
  profiles: [],
};

export const profilesReducer = (
  state = initialProfilesState,
  action: GetProfilesActions,
): ProfilesState => {
  switch (action.type) {
    case ProfilesActionsTypes.GET_PROFILES_LIST_ACTION:
      return {
        ...state,
        message: 'Getting list of profiles...',
        loading: true,
      };
    case ProfilesActionsTypes.GET_PROFILES_LIST_FAILED:
      return {
        ...state,
        message: 'Error during getting list of profiles',
        loading: false,
      };
    case ProfilesActionsTypes.GET_PROFILES_LIST_SUCCESS:
      return {
        ...state,
        message: 'Successfully got list of profiles',
        loading: false,
        profiles: action?.payload,
      };
    default:
      return state;
  }
};
