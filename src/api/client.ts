import axios, { AxiosError } from 'axios';
import { clearAccessToken, getAccessToken } from '../auth/tokenStore';

export const api = axios.create({
  baseURL: 'http://localhost:3001',
});

api.interceptors.request.use((config) => {
  const token = getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      if (error.response.status === 401) {
        console.error('인증 토큰이 만료되었거나 유효하지 않습니다.');
        clearAccessToken();
        window.location.href = '/로그인';
      } else if (error.response.status >= 500) {
        console.error('서버 내부 오류가 발생했습니다.');
      }
    } else if (error.request) {
      console.error('네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.');
    }
    return Promise.reject(error);
  }
);
