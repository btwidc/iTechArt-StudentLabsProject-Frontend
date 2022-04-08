import { UserProfileInfoResponse } from '../../authTypes/responses/UserProfileInfoResponse';

export interface ProfilesState {
  message: string;
  loading: boolean;
  profiles: UserProfileInfoResponse[] | null | undefined;
}

export enum ProfilesActionsTypes {
  GET_PROFILES_LIST_ACTION = 'GET_PROFILES_LIST_ACTION',
  GET_PROFILES_LIST_FAILED = 'GET_PROFILES_LIST_FAILED',
  GET_PROFILES_LIST_SUCCESS = 'GET_PROFILES_LIST_SUCCESS',
}

export interface GetProfilesActions {
  type:
    | ProfilesActionsTypes.GET_PROFILES_LIST_ACTION
    | ProfilesActionsTypes.GET_PROFILES_LIST_FAILED
    | ProfilesActionsTypes.GET_PROFILES_LIST_SUCCESS;
  payload?: UserProfileInfoResponse[];
}
