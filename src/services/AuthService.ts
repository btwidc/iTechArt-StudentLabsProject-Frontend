import api from '../http/index';
import { IUserAuth } from '../types/authTypes/requests/IUserAuth';
import { AxiosResponse } from 'axios';
import { AuthResponse } from '../types/authTypes/responses/AuthResponse';
import { IUserProfileInfo } from '../types/authTypes/requests/IUserProfileInfo';
import { UserProfileInfoResponse } from '../types/authTypes/responses/UserProfileInfoResponse';
import { RefreshResponse } from '../types/authTypes/responses/RefreshResponse';

export default class AuthService {
  static async login(user: IUserAuth): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>('/user/login', user);
  }

  static async registration(
    user: IUserAuth,
  ): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>('/user/registration', user);
  }

  static async logout(refreshToken: string): Promise<void> {
    return api.post('/user/logout', { refreshToken });
  }

  static async refresh(
    refreshToken: string | null,
  ): Promise<AxiosResponse<RefreshResponse>> {
    return api.post<RefreshResponse>('/user/refresh', {
      refreshToken,
    });
  }

  static async addProfileInfo(
    userInfo: IUserProfileInfo,
  ): Promise<AxiosResponse<UserProfileInfoResponse>> {
    return api.post<UserProfileInfoResponse>('/user/profile', userInfo);
  }

  static async getProfileInfo(
    id: string,
  ): Promise<AxiosResponse<UserProfileInfoResponse>> {
    return api.get<UserProfileInfoResponse>(`/user/profile/${id}`);
  }
}
