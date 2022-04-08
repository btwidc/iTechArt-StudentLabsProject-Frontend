import { Dispatch } from 'redux';

import ProfilesService from '../../services/ProfilesService';
import {
  GetProfilesActions,
  ProfilesActionsTypes,
} from '../../types/actionsTypes/profiflesActionsTypes/profilesActionsTypes';

export const getProfilesListAction = () => {
  return async (dispatch: Dispatch<GetProfilesActions>) => {
    try {
      dispatch({
        type: ProfilesActionsTypes.GET_PROFILES_LIST_ACTION,
      });
      const profilesList = await ProfilesService.getProfilesList();
      dispatch({
        type: ProfilesActionsTypes.GET_PROFILES_LIST_SUCCESS,
        payload: profilesList.data,
      });
    } catch (e) {
      dispatch({
        type: ProfilesActionsTypes.GET_PROFILES_LIST_FAILED,
      });
    }
  };
};
