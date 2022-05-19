import {
  EventResponseState,
  EventResponseActionsTypes,
  EventResponseAddActions,
  EventResponseGetActions,
} from '../../types/actionsTypes/eventResponseActionsTypes/eventResponseActionsTypes';

const initialEventResponseState: EventResponseState = {
  message: '',
  loading: false,
  eventResponse: [],
};

export const eventResponseReducer = (
  state = initialEventResponseState,
  action: EventResponseAddActions | EventResponseGetActions,
): EventResponseState => {
  switch (action.type) {
    case EventResponseActionsTypes.GET_USER_EVENTS_RESPONSES_ACTION:
      return {
        ...state,
        message: 'Getting user events responses...',
        loading: true,
      };
    case EventResponseActionsTypes.GET_USER_EVENTS_RESPONSES_FAILED:
      return {
        ...state,
        message: 'Error during getting user events responses...',
        loading: true,
      };
    case EventResponseActionsTypes.GET_USER_EVENTS_RESPONSES_SUCCESS:
      return {
        ...state,
        message: 'User events responses successfully added',
        loading: false,
        eventResponse: action.payload,
      };
    case EventResponseActionsTypes.ADD_EVENT_RESPONSE_ACTION:
      return {
        ...state,
        message: 'Adding event response...',
        loading: true,
      };
    case EventResponseActionsTypes.ADD_EVENT_RESPONSE_FAILED:
      return {
        ...state,
        message: 'Error during adding event response...',
        loading: true,
      };
    case EventResponseActionsTypes.ADD_EVENT_RESPONSE_SUCCESS:
      return {
        ...state,
        message: 'Event response successfully added',
        loading: false,
        ...action?.payload,
      };
    default:
      return state;
  }
};
