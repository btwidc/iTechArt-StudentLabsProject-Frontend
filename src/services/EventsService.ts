import api from '../http/index';
import { AxiosResponse } from 'axios';

import { EventInfo } from '../types/eventTypes/EventInfo';
import { EventResponseInfo } from '../types/eventTypes/EventResponse';

export default class EventsService {
  static async getEventsList(): Promise<AxiosResponse<EventInfo[]>> {
    return api.get<EventInfo[]>('/event/list');
  }

  static async getEventInfo(id: string): Promise<AxiosResponse<EventInfo>> {
    return api.get<EventInfo>(`event/info/${id}`);
  }

  static async addEvent(
    date?: string,
    participantFullName?: string,
    candidateFullName?: string,
    categoryName?: string,
  ): Promise<AxiosResponse<EventInfo>> {
    return api.post<EventInfo>(`event/add`, {
      date,
      participantFullName,
      candidateFullName,
      categoryName,
    });
  }

  static async getUserEventsResponses(
    userId: string | undefined,
  ): Promise<AxiosResponse<EventResponseInfo[]>> {
    return api.get<EventResponseInfo[]>(`/event/user/${userId}/response`);
  }

  static async addEventResponse(
    eventId: string,
    responseContent: string,
  ): Promise<AxiosResponse<EventResponseInfo>> {
    return api.put<EventResponseInfo>(`/event/response/${eventId}`, {
      responseContent,
    });
  }
}
