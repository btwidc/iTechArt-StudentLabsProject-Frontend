import { UserProfileInfoResponse } from '../authTypes/responses/UserProfileInfoResponse';
import { ICandidateInfo } from '../candidateTypes/ICandidateInfo';
import { EventCategoryInfo } from './EventCategoryInfo';
import { EventResponseInfo } from './EventResponseInfo';

export interface EventInfo {
  id: number;
  date: string;
  profile: UserProfileInfoResponse;
  candidate: ICandidateInfo;
  category: EventCategoryInfo;
  eventResponse: EventResponseInfo;
}
