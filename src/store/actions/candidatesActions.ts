import { Dispatch } from 'redux';

import {
  CandidatesActionsTypes,
  GetCandidatesActions,
  AddCandidateActions,
} from '../../types/candidatesActionsTypes/candidatesActionsTypes';

import { CandidateFormInfo } from '../../types/candidateTypes/CandidateFormInfo';
import CandidatesService from '../../services/CandidatesService';

export const getCandidatesListAction = () => {
  return async (dispatch: Dispatch<GetCandidatesActions>) => {
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
  };
};

export const addCandidateAction = (candidateFormState: any) => {
  return async (dispatch: Dispatch<AddCandidateActions>) => {
    try {
      dispatch({
        type: CandidatesActionsTypes.ADD_CANDIDATE_ACTION,
      });
      const candidate = await CandidatesService.addCandidateInfo(
        candidateFormState,
      );
      dispatch({
        type: CandidatesActionsTypes.ADD_CANDIDATE_SUCCESS,
        payload: candidate.data,
      });
    } catch (e) {
      dispatch({
        type: CandidatesActionsTypes.ADD_CANDIDATE_FAILED,
      });
    }
  };
};
