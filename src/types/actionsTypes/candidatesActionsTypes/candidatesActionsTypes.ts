import { ICandidateInfo } from '../../candidateTypes/ICandidateInfo';

export interface CandidatesState {
  message: string;
  loading: boolean;
  candidates: ICandidateInfo[] | null | undefined;
  candidate: ICandidateInfo | null | undefined;
}

export enum CandidatesActionsTypes {
  GET_CANDIDATES_LIST_ACTION = 'GET_CANDIDATES_LIST_ACTION',
  GET_CANDIDATES_LIST_FAILED = 'GET_CANDIDATES_LIST_FAILED',
  GET_CANDIDATES_LIST_SUCCESS = 'GET_CANDIDATES_LIST_SUCCESS',
  GET_CANDIDATE_ACTION = 'GET_CANDIDATE_ACTION',
  GET_CANDIDATE_FAILED = 'GET_CANDIDATE_FAILED',
  GET_CANDIDATE_SUCCESS = 'GET_CANDIDATE_SUCCESS',
  ADD_CANDIDATE_ACTION = 'ADD_CANDIDATE_ACTION',
  ADD_CANDIDATE_FAILED = 'ADD_CANDIDATE_FAILED',
  ADD_CANDIDATE_SUCCESS = 'ADD_CANDIDATE_SUCCESS',
  DELETE_CANDIDATE_ACTION = 'DELETE_CANDIDATE_ACTION',
  DELETE_CANDIDATE_FAILED = 'DELETE_CANDIDATE_FAILED',
  DELETE_CANDIDATE_SUCCESS = 'DELETE_CANDIDATE_SUCCESS',
  DOWNLOAD_CANDIDATE_CV_ACTION = 'DOWNLOAD_CANDIDATE_CV_ACTION',
  DOWNLOAD_CANDIDATE_CV_FAILED = 'DOWNLOAD_CANDIDATE_CV_FAILED',
  DOWNLOAD_CANDIDATE_CV_SUCCESS = 'DOWNLOAD_CANDIDATE_CV_SUCCESS',
}

export interface GetCandidatesActions {
  type:
    | CandidatesActionsTypes.GET_CANDIDATES_LIST_ACTION
    | CandidatesActionsTypes.GET_CANDIDATES_LIST_FAILED
    | CandidatesActionsTypes.GET_CANDIDATES_LIST_SUCCESS;
  payload?: ICandidateInfo[];
}

export interface GetCandidateActions {
  type:
    | CandidatesActionsTypes.GET_CANDIDATE_ACTION
    | CandidatesActionsTypes.GET_CANDIDATE_FAILED
    | CandidatesActionsTypes.GET_CANDIDATE_SUCCESS;
  payload?: ICandidateInfo;
}

export interface AddCandidateActions {
  type:
    | CandidatesActionsTypes.ADD_CANDIDATE_ACTION
    | CandidatesActionsTypes.ADD_CANDIDATE_FAILED
    | CandidatesActionsTypes.ADD_CANDIDATE_SUCCESS;
  payload?: ICandidateInfo;
}

export interface DeleteCandidateActions {
  type:
    | CandidatesActionsTypes.DELETE_CANDIDATE_ACTION
    | CandidatesActionsTypes.DELETE_CANDIDATE_FAILED
    | CandidatesActionsTypes.DELETE_CANDIDATE_SUCCESS;
}

export interface DownloadCandidateCvActions {
  type:
    | CandidatesActionsTypes.DOWNLOAD_CANDIDATE_CV_ACTION
    | CandidatesActionsTypes.DOWNLOAD_CANDIDATE_CV_FAILED
    | CandidatesActionsTypes.DOWNLOAD_CANDIDATE_CV_SUCCESS;
}
