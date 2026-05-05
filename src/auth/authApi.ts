import axios, { AxiosError } from "axios";
import { clearAccessToken, getAccessToken, setAccessToken } from "../auth/tokenStore";
import { useNavigate } from "react-router-dom";
import { api } from "../api/client";

const API_URL = "http://localhost:3001"
let refreshPromise: Promise<string> | null = null;

export const authApi = axios.create({
    baseURL: API_URL,
    withCredentials: true,
})

authApi.interceptors.request.use(async (config) => {
  if (refreshPromise) {
    const token = await refreshPromise;
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  }

  const token = getAccessToken();
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});


authApi.interceptors.request.use(async (config) => {
  let token = getAccessToken();

  if (token && isTokenExpired(token)) {
    if (!refreshPromise) {
      refreshPromise = api.post('/refresh')
        .then(res => {
          const newToken = res.data.accessToken;
          setAccessToken(newToken);
          return newToken;
        })
        .finally(() => {
          refreshPromise = null;
        });
    }

    token = await refreshPromise;
  }

  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

function getTokenExpiration(token: string) {
  const payload = JSON.parse(atob(token.split('.')[1]));
  return payload.exp * 1000;
}

function isTokenExpired(token: string) {
  const exp = getTokenExpiration(token);
  return Date.now() > exp - 60 * 1000; // 1분 전 미리 갱신
}