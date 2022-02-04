import { $host, $authHost } from "../http";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
import jwtDecode from "jwt-decode";

export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    const { data } = await $host.post<AuthResponse>("/api/user/login", {
      email,
      password,
    });
    localStorage.setItem("accessToken", data.accessToken);
    return jwtDecode(data.accessToken);
  }

  static async registration(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    const { data } = await $host.post<AuthResponse>("/api/user/registration", {
      email,
      password,
    });
    localStorage.setItem("accessToken", data.accessToken);
    return jwtDecode(data.accessToken);
  }

  static async refresh() {
    const { data } = await $authHost.get("/api/user/refresh");
    localStorage.setItem("accessToken", data.accessToken);
    return jwtDecode(data.accessToken);
  }
}
