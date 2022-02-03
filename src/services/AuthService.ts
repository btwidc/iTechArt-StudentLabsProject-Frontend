import $api from "../http";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/api/user/login", { email, password });
  }

  static async registration(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/api/user/registration", {
      email,
      password,
    });
  }

  static async logout(): Promise<void> {
    console.log($api.post("/api/user/logout"));
    return $api.post("/api/user/logout");
  }
}
