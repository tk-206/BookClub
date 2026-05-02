import axios, { AxiosError } from "axios";
import { clearAccessToken, getAccessToken, setAccessToken } from "./tokenStore";

export const api = axios.create({
    baseURL: "http://localhost:3001",
    withCredentials: true,
})

let isRefreshing = false
let queue: any[] = []

api.interceptors.request.use((config) => {
    const token = getAccessToken()

    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

api.interceptors.response.use(
    (res) => res,
    async error => {
        const originalRequest = error.config

        if (error.response?.status === 401) {
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
                    window.location.href = '/login'
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

