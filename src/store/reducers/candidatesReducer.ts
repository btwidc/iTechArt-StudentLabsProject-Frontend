import {
  CandidatesState,
  CandidatesActionsTypes,
  GetCandidatesActions,
  GetCandidateActions,
  AddCandidateActions,
  DownloadCandidateCvActions,
  DeleteCandidateActions,
} from '../../types/actionsTypes/candidatesActionsTypes/candidatesActionsTypes';

const initialCandidatesState: CandidatesState = {
  message: '',
  loading: false,
  candidates: [],
  candidate: null,
};

export const candidatesReducer = (
  state = initialCandidatesState,
  action:
    | GetCandidatesActions
    | GetCandidateActions
    | AddCandidateActions
    | DeleteCandidateActions
    | DownloadCandidateCvActions,
): CandidatesState => {
  switch (action.type) {
    case CandidatesActionsTypes.GET_CANDIDATES_LIST_ACTION:
      return {
        ...state,
        message: 'Getting list of candidates...',
        loading: true,
      };
    case CandidatesActionsTypes.GET_CANDIDATES_LIST_FAILED:
      return {
        ...state,
        message: 'Error during getting list of candidates',
        loading: false,
      };
    case CandidatesActionsTypes.GET_CANDIDATES_LIST_SUCCESS:
      return {
        ...state,
        message: 'Successfully got list of candidates',
        loading: false,
        candidates: action?.payload,
      };
    case CandidatesActionsTypes.GET_CANDIDATE_ACTION:
      return {
        ...state,
        message: 'Getting candidate...',
        loading: true,
      };
    case CandidatesActionsTypes.GET_CANDIDATE_FAILED:
      return {
        ...state,
        message: 'Error during getting candidate',
        loading: false,
      };
    case CandidatesActionsTypes.GET_CANDIDATE_SUCCESS:
      return {
        ...state,
        message: 'Successfully got candidate',
        loading: false,
        candidate: action?.payload,
      };
    case CandidatesActionsTypes.ADD_CANDIDATE_ACTION:
      return {
        ...state,
        message: 'Adding candidate...',
        loading: true,
      };
    case CandidatesActionsTypes.ADD_CANDIDATE_FAILED:
      return {
        ...state,
        message: 'Error during adding candidate',
        loading: false,
      };
    case CandidatesActionsTypes.ADD_CANDIDATE_SUCCESS:
      return {
        ...state,
        message: 'Candidate successfully added',
        loading: false,
        ...action?.payload,
      };
    case CandidatesActionsTypes.DELETE_CANDIDATE_ACTION:
      return {
        ...state,
        message: 'Error during deleting candidate...',
        loading: false,
      };
    case CandidatesActionsTypes.DELETE_CANDIDATE_FAILED:
      return {
        ...state,
        message: 'Error during adding candidate',
        loading: false,
      };
    case CandidatesActionsTypes.DELETE_CANDIDATE_SUCCESS:
      return {
        ...state,
        message: 'Candidate successfully deleted',
        loading: false,
      };
    case CandidatesActionsTypes.DOWNLOAD_CANDIDATE_CV_ACTION:
      return {
        ...state,
        message: 'Downloading candidate cv...',
        loading: true,
      };
    case CandidatesActionsTypes.DOWNLOAD_CANDIDATE_CV_FAILED:
      return {
        ...state,
        message: 'Error during downloading candidate cv',
        loading: false,
      };
    case CandidatesActionsTypes.DOWNLOAD_CANDIDATE_CV_SUCCESS:
      return {
        ...state,
        message: 'Candidate cv successfully downloaded',
        loading: false,
      };
    default:
      return state;
  }
};
