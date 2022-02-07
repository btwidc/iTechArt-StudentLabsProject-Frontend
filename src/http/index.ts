import axios, { AxiosResponse } from "axios";
import { IUserAuth } from "../models/request/IUserAuth";
import { AuthResponse } from "../models/response/AuthResponse";
import { RefreshResponse } from "../models/response/RefreshResponse";

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const api = {
  login: (user: IUserAuth): Promise<AxiosResponse<AuthResponse>> => {
    return $host.post<AuthResponse>("/user/login", user);
  },
  registration: (user: IUserAuth): Promise<AxiosResponse<AuthResponse>> => {
    return $host.post<AuthResponse>("/user/registration", user);
  },
  logout: (refreshToken: string): Promise<void> => {
    return $host.post("/user/logout", { refreshToken: refreshToken });
  },
  refresh: (
    refreshToken: string | null
  ): Promise<AxiosResponse<RefreshResponse>> => {
    return $host.post<RefreshResponse>("/user/refresh", {
      refreshToken: refreshToken,
    });
  },
  test: () => {
    return $host.get("/user/test");
  },
};

$host.interceptors.request.use((config: any) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
  )}`;
  return config;
});

$host.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await api.refresh(refreshToken);
        console.log(response);
        localStorage.setItem("accessToken", response.data.newAccessToken);
        return $host.request(originalRequest);
      } catch (e) {
        console.log("Auth not");
      }
      throw error;
    }
  }
);

export default api;
