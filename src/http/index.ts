import axios from "axios";
import AuthService from "../services/AuthService";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use((config: any) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
  )}`;
  return config;
});

let isRetry = false;
api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !isRetry) {
      isRetry = true;
      try {
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await AuthService.refresh(refreshToken);
        console.log(response.data);
        localStorage.setItem("accessToken", response.data.newAccessToken);
        return api.request(originalRequest);
      } catch (e) {
        console.log("Not auth");
      }
    }
    return Promise.reject(error);
  }
);

export default api;
