<<<<<<< HEAD
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
=======
import api from './client';
import { setAccessToken, clearAccessToken, getAccessToken } from '../auth/tokenStore'
import type { SignUpPayload, User } from '../types';


export async function loginAPI(email: string, password: string) {

  const res = await api.get<User[]>('/users', {
    params: { email }
  })

  const user = res.data[0]

  if (!user) {
    throw new Error('이메일 없음')
  }

  if (user.password !== password) {
    throw new Error('비밀번호 틀림')
  }

  // 가짜 토큰
  const fakeToken = `token-${user.id}`

  setAccessToken(fakeToken)

  return {
    accessToken: fakeToken
  }
}

export function logoutAPI() {
  clearAccessToken();
}

export async function silentRefreshAPI(): Promise<User> {

  const token = getAccessToken()

  if (!token) {
    throw new Error('토큰 없음')
  }

  // token-1 → 1
  const userId = token.split('-')[1]

  const { data } = await api.get<User>(`/users/${userId}`)

  return data
}



export async function signUpAPI(
  payload: SignUpPayload
): Promise<User> {

  const newUser: User = {
    id: crypto.randomUUID(),
    createAt: new Date().toISOString(),
    role: '독서가',

    ...payload
  }

  const res = await api.post('/users', newUser)

  return res.data
>>>>>>> recovery
}