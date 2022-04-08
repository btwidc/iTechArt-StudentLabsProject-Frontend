import {
  EventsInfo,
  GetEventActions,
  GetEventsActions,
  AddEventActions,
  EventsActionsTypes,
} from '../../types/actionsTypes/eventsActionsTypes/eventsActionsTypes';

const initialEventsState: EventsInfo = {
  message: '',
  loading: false,
  events: [],
  event: null,
};

export const eventsReducer = (
  state = initialEventsState,
  action: GetEventsActions | GetEventActions | AddEventActions,
): EventsInfo => {
  switch (action.type) {
    case EventsActionsTypes.GET_EVENTS_LIST_ACTION:
      return {
        ...state,
        message: 'Getting list of events...',
        loading: true,
      };
    case EventsActionsTypes.GET_EVENTS_LIST_FAILED:
      return {
        ...state,
        message: 'Error during getting list of events',
        loading: false,
      };
    case EventsActionsTypes.GET_EVENTS_LIST_SUCCESS:
      return {
        ...state,
        message: 'Successfully got list of events',
        loading: false,
        events: action?.payload,
      };
    case EventsActionsTypes.GET_EVENT_ACTION:
      return {
        ...state,
        message: 'Getting event...',
        loading: true,
      };
    case EventsActionsTypes.GET_EVENT_FAILED:
      return {
        ...state,
        message: 'Error during getting event',
        loading: false,
      };
    case EventsActionsTypes.GET_EVENT_SUCCESS:
      return {
        ...state,
        message: 'Successfully got event',
        loading: false,
        event: action?.payload,
      };
    case EventsActionsTypes.ADD_EVENT_ACTION:
      return {
        ...state,
        message: 'Adding event...',
        loading: true,
      };
    case EventsActionsTypes.ADD_EVENT_FAILED:
      return {
        ...state,
        message: 'Error during adding event',
        loading: false,
      };
    case EventsActionsTypes.ADD_EVENT_SUCCESS:
      return {
        ...state,
        message: 'Event successfully added',
        loading: false,
        ...action?.payload,
      };
    default:
      return state;
  }
};
