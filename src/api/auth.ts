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
}