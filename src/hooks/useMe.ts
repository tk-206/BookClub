import { useQuery } from '@tanstack/react-query';
import { api } from '../api/client';
import { getAccessToken } from '../auth/tokenStore';
import type { User } from '../types';

export function useMe() {
  return useQuery({
    queryKey: ['me'],
    queryFn: getMe,
    retry: false,
  });
}

export async function getMe(): Promise<User> {
  const token = getAccessToken()

  if (!token) {
    throw new Error('토큰 없음');
  }

  const userId = token?.split('-')[1]

  const res = await api.get(`/users?id=${userId}`);

  return res.data[0];
}