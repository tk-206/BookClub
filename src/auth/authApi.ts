import axios, { AxiosError } from "axios";
import { clearAccessToken, getAccessToken, setAccessToken } from "../auth/tokenStore";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3001"
const navigate = useNavigate()

export const api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
})

let isRefreshing = false
let queue: any[] = []

const processQueue = (error: any, token: string | null = null) => {
  queue.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve(token);
  });
  queue = [];
};

api.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


api.interceptors.response.use(
    (res) => res,
    async error => {
        const originalRequest = error.config

        if (error.response?.status !== 401) {
            return Promise.reject(error)
        }

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true

            if(!isRefreshing) {
                isRefreshing = true

                try {
                    const res = await axios.post('/api/auth/refresh', {}, { withCredentials: true })
                    const newToken = res.data.accessToken

                    setAccessToken(newToken)

                    queue.forEach(cb => cb(newToken))
                    queue = []

                } catch (e) {
                    clearAccessToken()
                    navigate('/로그인')
                } finally {
                    isRefreshing = false
                }
            }
        }

        return new Promise(reslove => {
            queue.push((token: string) => {
                originalRequest.headers.Authorization = `Bearer ${token}`
                reslove(api(originalRequest))
            })
        })
    }
)

