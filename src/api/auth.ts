import api from './client';
import { setAccessToken, clearAccessToken, getAccessToken } from '../auth/tokenStore'
import type { User } from '../types';

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