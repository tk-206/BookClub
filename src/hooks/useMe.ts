import { useQuery } from '@tanstack/react-query';
import api from '../api/client';

export function useMe() {
  return useQuery({
    queryKey: ['me'],
    queryFn: getMe,
    retry: false,
  });
}

export async function getMe() {
  const token = localStorage.getItem('accessToken');

  if (!token) {
    throw new Error('토큰 없음');
  }

  // token-1 → 1 추출
  const userId = token.split('-')[1];

  const res = await api.get(`/users/${userId}`);

  return res.data;
}