import { useContext } from 'react'
import { AuthContext } from './authContextValue'

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('AuthProvider 밖에서 useAuth 사용 불가')
  return context
}
