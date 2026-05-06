import { api } from './client'
import { setAccessToken } from './client'

export interface User {
  id: string
  nickname: string
  email: string
  role: 'reader' | 'author' | 'publisher'
}

interface LoginParams {
  email: string
  password: string
}

// 로그인
// 서버가 응답으로 accessToken 주고
// Refresh Token은 httpOnly 쿠키로 자동 저장됨
export async function loginAPI(params: LoginParams) {
  const { data } = await api.post<{
    accessToken: string
    user: User
  }>('/auth/login', params)

  setAccessToken(data.accessToken)
  return data.user
}

// 로그아웃
// 서버에서 쿠키 삭제 + DB에서 Refresh Token 무효화
export async function logoutAPI() {
  await api.post('/auth/logout')
  setAccessToken(null)
}

// 내 정보 가져오기
export async function getMeAPI() {
  const { data } = await api.get<User>('/auth/me')
  return data
}

// 앱 시작할 때 자동 로그인 시도
// 쿠키에 Refresh Token 있으면 조용히 새 Access Token 받아오기
export async function silentRefreshAPI() {
  const { data } = await api.post<{
    accessToken: string
    user: User
  }>('/auth/refresh')

  setAccessToken(data.accessToken)
  return data.user
}