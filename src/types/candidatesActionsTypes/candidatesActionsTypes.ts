import { ICandidateInfo } from '../candidateTypes/ICandidateInfo';

export interface CandidatesState {
  message: string;
  loading: boolean;
  candidates: Array<ICandidateInfo> | undefined;
  candidate: ICandidateInfo | null;
}

export enum CandidatesActionsTypes {
  GET_CANDIDATES_LIST_ACTION = 'GET_CANDIDATES_LIST_ACTION',
  GET_CANDIDATES_LIST_FAILED = 'GET_CANDIDATES_LIST_FAILED',
  GET_CANDIDATES_LIST_SUCCESS = 'GET_CANDIDATES_LIST_SUCCESS',
  ADD_CANDIDATE_ACTION = 'ADD_CANDIDATE_ACTION',
  ADD_CANDIDATE_FAILED = 'ADD_CANDIDATE_FAILED',
  ADD_CANDIDATE_SUCCESS = 'ADD_CANDIDATE_SUCCESS',
}

export interface GetCandidatesActions {
  type:
    | CandidatesActionsTypes.GET_CANDIDATES_LIST_ACTION
    | CandidatesActionsTypes.GET_CANDIDATES_LIST_FAILED
    | CandidatesActionsTypes.GET_CANDIDATES_LIST_SUCCESS;
  payload?: Array<ICandidateInfo>;
}

export interface AddCandidateActions {
  type:
    | CandidatesActionsTypes.ADD_CANDIDATE_ACTION
    | CandidatesActionsTypes.ADD_CANDIDATE_FAILED
    | CandidatesActionsTypes.ADD_CANDIDATE_SUCCESS;
  payload?: ICandidateInfo;
}
