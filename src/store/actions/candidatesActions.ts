import { Dispatch } from 'redux';

import {
  CandidatesActionsTypes,
  GetCandidatesActions,
  GetCandidateActions,
  AddCandidateActions,
  DownloadCandidateCvActions,
  DeleteCandidateActions,
} from '../../types/candidatesActionsTypes/candidatesActionsTypes';

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

export const getCandidateAction = (id: string) => {
  return async (dispatch: Dispatch<GetCandidateActions>) => {
    try {
      dispatch({
        type: CandidatesActionsTypes.GET_CANDIDATE_ACTION,
      });
      const candidateInfo = await CandidatesService.getCandidateInfo(id);
      dispatch({
        type: CandidatesActionsTypes.GET_CANDIDATE_SUCCESS,
        payload: candidateInfo.data,
      });
    } catch (e) {
      dispatch({
        type: CandidatesActionsTypes.GET_CANDIDATE_FAILED,
      });
    }
  };
};

export const addCandidateAction = (candidateFormState: any) => {
  return async (
    dispatch: Dispatch<AddCandidateActions | GetCandidatesActions>,
  ) => {
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
      const candidatesList = await CandidatesService.getCandidatesList();
      dispatch({
        type: CandidatesActionsTypes.GET_CANDIDATES_LIST_SUCCESS,
        payload: candidatesList.data,
      });
    } catch (e) {
      dispatch({
        type: CandidatesActionsTypes.ADD_CANDIDATE_FAILED,
      });
    }
  };
};

export const deleteCandidateAction = (id: string) => {
  return async (
    dispatch: Dispatch<GetCandidatesActions | DeleteCandidateActions>,
  ) => {
    try {
      dispatch({
        type: CandidatesActionsTypes.DELETE_CANDIDATE_ACTION,
      });
      await CandidatesService.deleteCandidate(id);
      dispatch({
        type: CandidatesActionsTypes.DELETE_CANDIDATE_SUCCESS,
      });
      const candidatesList = await CandidatesService.getCandidatesList();
      dispatch({
        type: CandidatesActionsTypes.GET_CANDIDATES_LIST_SUCCESS,
        payload: candidatesList.data,
      });
    } catch (e) {
      dispatch({
        type: CandidatesActionsTypes.DELETE_CANDIDATE_FAILED,
      });
    }
  };
};

export const downloadCandidateCvAction = (id: string) => {
  return async (dispatch: Dispatch<DownloadCandidateCvActions>) => {
    try {
      dispatch({
        type: CandidatesActionsTypes.DOWNLOAD_CANDIDATE_CV_ACTION,
      });
      const candidateInfo = await CandidatesService.getCandidateInfo(id);
      const candidateCvName = candidateInfo.data.cvName;
      if (candidateCvName !== null) {
        const downloadResponse = await CandidatesService.downloadCandidateCv(
          id,
        );
        const downloadCv = downloadResponse.data;
        const downloadUrl = window.URL.createObjectURL(downloadCv);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = candidateCvName;
        link.click();
        dispatch({
          type: CandidatesActionsTypes.DOWNLOAD_CANDIDATE_CV_SUCCESS,
        });
      }
    } catch (e) {
      dispatch({
        type: CandidatesActionsTypes.DOWNLOAD_CANDIDATE_CV_FAILED,
      });
    }
  };
};
