import axios from 'axios'

// ── 토큰을 메모리에 저장 (변수) ──
// localStorage 쓰면 XSS에 노출되니까 변수에만 담아요
let accessToken: string | null = null

export const getAccessToken = () => accessToken
export const setAccessToken = (token: string | null) => {
  accessToken = token
}

// ── axios 인스턴스 ──
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,  // .env에 서버 주소
  withCredentials: true,  // ← 쿠키 자동으로 요청에 포함 (Refresh Token)
})

// ── 요청 인터셉터 ──
// 모든 요청에 Access Token 자동으로 붙이기
api.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})

// ── 응답 인터셉터 ──
// 401 에러 → Access Token 만료 → 자동 재발급 시도
let isRefreshing = false
let failedQueue: Array<{
  resolve: (token: string) => void
  reject: (err: unknown) => void
}> = []

// 대기 중인 요청들 처리
const processQueue = (error: unknown, token: string | null) => {
  failedQueue.forEach(({ resolve, reject }) => {
    if (error) reject(error)
    else resolve(token!)
  })
  failedQueue = []
}

api.interceptors.response.use(
  (response) => response,  // 성공은 그냥 통과

  async (error) => {
    const originalRequest = error.config

    // 401이 아니거나 이미 재시도한 요청이면 그냥 에러
    if (error.response?.status !== 401 || originalRequest._retry) {
      return Promise.reject(error)
    }

    // ── 중복 호출 방지 ──
    // 여러 요청이 동시에 401 받았을 때 refresh를 한 번만 호출
    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject })
      }).then((token) => {
        originalRequest.headers.Authorization = `Bearer ${token}`
        return api(originalRequest)
      })
    }

    originalRequest._retry = true
    isRefreshing = true

    try {
      // Refresh Token으로 새 Access Token 발급
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/refresh`,
        {},
        { withCredentials: true }  // 쿠키에 있는 Refresh Token 자동 전송
      )

      const newToken = data.accessToken
      setAccessToken(newToken)
      processQueue(null, newToken)

      // 원래 요청 재시도
      originalRequest.headers.Authorization = `Bearer ${newToken}`
      return api(originalRequest)

    } catch (refreshError) {
      // Refresh도 실패 → 로그아웃
      setAccessToken(null)
      processQueue(refreshError, null)
      window.location.href = '/로그인'
      return Promise.reject(refreshError)

    } finally {
      isRefreshing = false
    }
  }
)