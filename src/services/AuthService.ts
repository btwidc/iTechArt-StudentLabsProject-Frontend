import api from "../http/index";
import { IUserAuth } from "../types/authTypes/requests/IUserAuth";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../types/authTypes/responses/AuthResponse";
import { RefreshResponse } from "../types/authTypes/responses/RefreshResponse";

export default class AuthService {
  static async login(user: IUserAuth): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>("/user/login", user);
  }

  static async registration(
    user: IUserAuth
  ): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>("/user/registration", user);
  }

  static async logout(refreshToken: string): Promise<void> {
    return api.post("/user/logout", { refreshToken: refreshToken });
  }

  static async refresh(
    refreshToken: string | null
  ): Promise<AxiosResponse<RefreshResponse>> {
    return api.post<RefreshResponse>("/user/refresh", {
      refreshToken: refreshToken,
    });
  }

  static async test() {
    return api.get("/user/test");
  }
}
