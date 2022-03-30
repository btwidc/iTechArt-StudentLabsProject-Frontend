import api from '../http/index';
import { AxiosResponse } from 'axios';

import { UserProfileInfoResponse } from '../types/authTypes/responses/UserProfileInfoResponse';

export default class ProfilesService {
  static async getProfilesList(): Promise<
    AxiosResponse<UserProfileInfoResponse[]>
  > {
    return api.get<UserProfileInfoResponse[]>('/user/profiles/list');
  }
}
