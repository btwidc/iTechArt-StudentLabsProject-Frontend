import { Dispatch } from 'redux';

import {
  EventResponseActionsTypes,
  EventResponseAddActions,
  EventResponseGetActions,
} from '../../types/actionsTypes/eventResponseActionsTypes/eventResponseActionsTypes';

import EventsService from '../../services/EventsService';

export const getEventsResponsesAction = (userId: string | undefined) => {
  return async (dispatch: Dispatch<EventResponseGetActions>) => {
    try {
      dispatch({
        type: EventResponseActionsTypes.GET_USER_EVENTS_RESPONSES_ACTION,
      });
      const eventsResponses = await EventsService.getUserEventsResponses(
        userId,
      );
      dispatch({
        type: EventResponseActionsTypes.GET_USER_EVENTS_RESPONSES_SUCCESS,
        payload: eventsResponses.data,
      });
    } catch (e) {
      dispatch({
        type: EventResponseActionsTypes.GET_USER_EVENTS_RESPONSES_FAILED,
      });
    }
  };
};

export const addEventResponseAction = (
  eventId: string,
  responseContent: string,
) => {
  return async (dispatch: Dispatch<EventResponseAddActions>) => {
    try {
      dispatch({
        type: EventResponseActionsTypes.ADD_EVENT_RESPONSE_ACTION,
      });
      const eventResponse = await EventsService.addEventResponse(
        eventId,
        responseContent,
      );
      dispatch({
        type: EventResponseActionsTypes.ADD_EVENT_RESPONSE_SUCCESS,
        payload: eventResponse.data,
      });
    } catch (e) {
      dispatch({
        type: EventResponseActionsTypes.ADD_EVENT_RESPONSE_FAILED,
      });
    }
  };
};
