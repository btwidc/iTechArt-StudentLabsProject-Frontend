import api from '../http/index';
import { AxiosResponse } from 'axios';

import { EventInfo } from '../types/eventTypes/EventInfo';
import { IEventForm } from '../types/eventTypes/IEventForm';

export default class EventsService {
  static async getEventsList(): Promise<AxiosResponse<EventInfo[]>> {
    return api.get<EventInfo[]>('/event/list');
  }

  static async getEventInfo(id: string): Promise<AxiosResponse<EventInfo>> {
    return api.get<EventInfo>(`event/info/${id}`);
  }

  static async addEvent(
    date: string | undefined,
    participantFullName: string | undefined,
    candidateFullName: string | undefined,
    categoryName: string | undefined,
  ): Promise<AxiosResponse<EventInfo>> {
    return api.post<EventInfo>(`event/add`, {
      date,
      participantFullName,
      candidateFullName,
      categoryName,
    });
  }
}
