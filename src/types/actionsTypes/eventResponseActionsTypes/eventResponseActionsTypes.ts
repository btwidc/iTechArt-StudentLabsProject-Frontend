import { EventResponseInfo } from '../../eventTypes/EventResponseInfo';

export interface EventResponseState {
  message: string;
  loading: boolean;
  eventResponse: EventResponseInfo[] | null | undefined;
}

export enum EventResponseActionsTypes {
  GET_USER_EVENTS_RESPONSES_ACTION = 'GET_USER_EVENTS_RESPONSES_ACTION',
  GET_USER_EVENTS_RESPONSES_FAILED = 'GET_USER_EVENTS_RESPONSES_FAILED',
  GET_USER_EVENTS_RESPONSES_SUCCESS = 'GET_USER_EVENTS_RESPONSES_SUCCESS',
  ADD_EVENT_RESPONSE_ACTION = 'ADD_EVENT_RESPONSE_ACTION',
  ADD_EVENT_RESPONSE_FAILED = 'ADD_EVENT_RESPONSE_FAILED',
  ADD_EVENT_RESPONSE_SUCCESS = 'ADD_EVENT_RESPONSE_SUCCESS',
}

export interface EventResponseGetActions {
  type:
    | EventResponseActionsTypes.GET_USER_EVENTS_RESPONSES_ACTION
    | EventResponseActionsTypes.GET_USER_EVENTS_RESPONSES_FAILED
    | EventResponseActionsTypes.GET_USER_EVENTS_RESPONSES_SUCCESS;
  payload?: EventResponseInfo[];
}

export interface EventResponseAddActions {
  type:
    | EventResponseActionsTypes.ADD_EVENT_RESPONSE_ACTION
    | EventResponseActionsTypes.ADD_EVENT_RESPONSE_FAILED
    | EventResponseActionsTypes.ADD_EVENT_RESPONSE_SUCCESS;
  payload?: EventResponseInfo;
}
