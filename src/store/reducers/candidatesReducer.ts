import {
  CandidatesState,
  CandidatesActionsTypes,
  CandidatesActions,
} from '../../types/candidatesActionsTypes/candidatesActionsTypes';

const initialCandidatesState: CandidatesState = {
  message: '',
  loading: false,
  candidates: [],
};

export const candidatesReducer = (
  state = initialCandidatesState,
  action: CandidatesActions,
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
        candidates: action ?.payload,
      };
    default:
      return state;
  }
};
