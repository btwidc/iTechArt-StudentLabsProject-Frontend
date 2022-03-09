import { Dispatch } from 'redux';

import {
  CandidatesActionsTypes,
  CandidatesActions,
} from '../../types/candidatesActionsTypes/candidatesActionsTypes';

import CandidatesService from '../../services/CandidatesService';

export const getCandidatesListAction = () => {
  return async (dispatch: Dispatch<CandidatesActions>) => {
    try {
      dispatch({
        type: CandidatesActionsTypes.GET_CANDIDATES_LIST_ACTION,
      });
      const candidatesList = await CandidatesService.getCandidatesList();
      dispatch({
        type: CandidatesActionsTypes.GET_CANDIDATES_LIST_SUCCESS,
        payload: candidatesList.data,
      });
    } catch (e) {
      dispatch({
        type: CandidatesActionsTypes.GET_CANDIDATES_LIST_FAILED,
      });
    }
  }
};
