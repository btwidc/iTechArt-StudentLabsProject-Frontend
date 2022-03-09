import { ICandidateInfo } from '../candidateTypes/ICandidateInfo';

export interface CandidatesState {
  message: string;
  loading: boolean;
  candidates: Array<ICandidateInfo> | undefined;
}

export enum CandidatesActionsTypes {
  GET_CANDIDATES_LIST_ACTION = 'GET_CANDIDATES_LIST_ACTION',
  GET_CANDIDATES_LIST_FAILED = 'GET_CANDIDATES_LIST_FAILED',
  GET_CANDIDATES_LIST_SUCCESS = 'GET_CANDIDATES_LIST_SUCCESS',
}

export interface CandidatesActions {
  type:
  | CandidatesActionsTypes.GET_CANDIDATES_LIST_ACTION
  | CandidatesActionsTypes.GET_CANDIDATES_LIST_FAILED
  | CandidatesActionsTypes.GET_CANDIDATES_LIST_SUCCESS;
  payload?: Array<ICandidateInfo>;
}
