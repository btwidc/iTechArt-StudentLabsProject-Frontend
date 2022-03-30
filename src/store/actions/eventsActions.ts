import { Dispatch } from 'redux';

import {
  EventsActionsTypes,
  GetEventActions,
  GetEventsActions,
  AddEventActions,
} from '../../types/actionsTypes/eventsActionsTypes/eventsActionsTypes';

import EventsService from '../../services/EventsService';

export const getEventsListAction = () => {
  return async (dispatch: Dispatch<GetEventsActions>) => {
    try {
      dispatch({
        type: EventsActionsTypes.GET_EVENTS_LIST_ACTION,
      });
      const eventsList = await EventsService.getEventsList();
      dispatch({
        type: EventsActionsTypes.GET_EVENTS_LIST_SUCCESS,
        payload: eventsList.data,
      });
    } catch (e) {
      dispatch({
        type: EventsActionsTypes.GET_EVENTS_LIST_SUCCESS,
      });
    }
  };
};

export const getEventAction = (id: string) => {
  return async (dispatch: Dispatch<GetEventActions>) => {
    try {
      dispatch({
        type: EventsActionsTypes.GET_EVENT_ACTION,
      });
      const eventInfo = await EventsService.getEventInfo(id);
      dispatch({
        type: EventsActionsTypes.GET_EVENT_SUCCESS,
        payload: eventInfo.data,
      });
    } catch (e) {
      dispatch({
        type: EventsActionsTypes.GET_EVENT_FAILED,
      });
    }
  };
};

export const addEventAction = (
  date: string | undefined,
  participantFullName: string | undefined,
  candidateFullName: string | undefined,
  categoryName: string | undefined,
) => {
  return async (dispatch: Dispatch<GetEventsActions | AddEventActions>) => {
    try {
      dispatch({
        type: EventsActionsTypes.ADD_EVENT_ACTION,
      });
      const event = await EventsService.addEvent(
        date,
        participantFullName,
        candidateFullName,
        categoryName,
      );
      dispatch({
        type: EventsActionsTypes.ADD_EVENT_SUCCESS,
        payload: event.data,
      });
      const eventsList = await EventsService.getEventsList();
      dispatch({
        type: EventsActionsTypes.GET_EVENTS_LIST_SUCCESS,
        payload: eventsList.data,
      });
    } catch (e) {
      dispatch({
        type: EventsActionsTypes.ADD_EVENT_FAILED,
      });
    }
  };
};
