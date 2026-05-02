import { useQuery } from '@tanstack/react-query'
import { api } from './client'

async function getMe() {
  const res = await api.get('/auth/me')
  return res.data
}

export function useMe() {
  return useQuery({
    queryKey: ['me'],
    queryFn: getMe,
    retry: false,
  })
}