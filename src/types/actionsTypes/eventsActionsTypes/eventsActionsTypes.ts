import { EventInfo } from '../../eventTypes/EventInfo';

export interface EventsInfo {
  message: string;
  loading: boolean;
  event: EventInfo | null | undefined;
  events: EventInfo[] | null | undefined;
}

export enum EventsActionsTypes {
  GET_EVENTS_LIST_ACTION = 'GET_EVENTS_LIST_ACTION',
  GET_EVENTS_LIST_FAILED = 'GET_EVENTS_LIST_FAILED',
  GET_EVENTS_LIST_SUCCESS = 'GET_EVENTS_LIST_SUCCESS',
  GET_EVENT_ACTION = 'GET_EVENT_ACTION',
  GET_EVENT_FAILED = 'GET_EVENT_FAILED',
  GET_EVENT_SUCCESS = 'GET_EVENT_SUCCESS',
  ADD_EVENT_ACTION = 'ADD_EVENT_ACTION',
  ADD_EVENT_FAILED = 'ADD_EVENT_FAILED',
  ADD_EVENT_SUCCESS = 'ADD_EVENT_SUCCESS',
}

export interface GetEventsActions {
  type:
    | EventsActionsTypes.GET_EVENTS_LIST_ACTION
    | EventsActionsTypes.GET_EVENTS_LIST_FAILED
    | EventsActionsTypes.GET_EVENTS_LIST_SUCCESS;
  payload?: EventInfo[];
}

export interface GetEventActions {
  type:
    | EventsActionsTypes.GET_EVENT_ACTION
    | EventsActionsTypes.GET_EVENT_FAILED
    | EventsActionsTypes.GET_EVENT_SUCCESS;
  payload?: EventInfo;
}

export interface AddEventActions {
  type:
    | EventsActionsTypes.ADD_EVENT_ACTION
    | EventsActionsTypes.ADD_EVENT_FAILED
    | EventsActionsTypes.ADD_EVENT_SUCCESS;
  payload?: EventInfo;
}
