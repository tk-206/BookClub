import axios, { AxiosError } from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3001",
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken')

    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

api.interceptors.response.use(
    (res) => res,
    (err: AxiosError) => {
        if(err.response?.status === 401) {
            localStorage.removeItem('accessToken')
            window.location.href = "/로그인"
        }
        return Promise.reject(err)
    }
)

