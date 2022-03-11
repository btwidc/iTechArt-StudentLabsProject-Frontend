import {
  CandidatesState,
  CandidatesActionsTypes,
  GetCandidatesActions,
  AddCandidateActions,
} from '../../types/candidatesActionsTypes/candidatesActionsTypes';

const initialCandidatesState: CandidatesState = {
  message: '',
  loading: false,
  candidates: [],
  candidate: null,
};

export const candidatesReducer = (
  state = initialCandidatesState,
  action: GetCandidatesActions | AddCandidateActions,
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
    default:
      return state;
  }
};
