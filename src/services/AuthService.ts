import { $host, $authHost } from "../http";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return await $host.post<AuthResponse>("/api/user/login", {
      email,
      password,
    });
  }

  static async registration(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return await $host.post<AuthResponse>("/api/user/registration", {
      email,
      password,
    });
  }

  // static async logout(): Promise<void> {
  //   return await $authHost.post("/api/user/logout");
  // }

  static async refresh() {
    return await $authHost.get("/api/user/refresh");
  }
}
