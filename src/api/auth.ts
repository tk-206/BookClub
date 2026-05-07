import api from './client';
import { setAccessToken, clearAccessToken, getAccessToken } from '../auth/tokenStore'
import type { SignUpPayload, User } from '../types';

const BASE_URL = 'http://localhost:3001'

export async function loginAPI(email: string, password: string) {

  const res = await api.get('/users', {
    params: { email }
  });

  const user = res.data[0];

  if (!user) {
    throw new Error('이메일을 확인해주세요.');
  }

  if (user.password !== password) {
    throw new Error('비밀번호가 올바르지 않습니다.')
  }

  // 가짜 토큰 생성
  const fakeToken = `token-${user.id}`;

  setAccessToken(fakeToken);

  return {
    accessToken: fakeToken,
    user
  };
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

export async function signUpAPI(payload: SignUpPayload) {
  
  const newUser: User = {
    id: crypto.randomUUID(),
    createAt: new Date().toISOString(),
    role: '독서가',

    ...payload
  }

  const res = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  })

  if (!res.ok) {
    throw new Error('회원가입 실패')
  }

  return res.json()
}