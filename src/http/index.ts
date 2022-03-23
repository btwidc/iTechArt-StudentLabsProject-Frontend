import axios from 'axios';
import AuthService from '../services/AuthService';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use((config: any) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    'accessToken',
  )}`;
  return config;
});

api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      originalRequest &&
      !originalRequest._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) return;
        const refreshResponse = await AuthService.refresh(refreshToken);
        localStorage.setItem(
          'accessToken',
          refreshResponse.data.newAccessToken,
        );
        return api.request(originalRequest);
      } catch (e) {
        console.log('Not auth');
      }
    }
    return Promise.reject(error);
  },
);

export default api;
