import {
  useState,
} from 'react'

import {
  getAccessToken,
  setAccessToken,
  clearAccessToken
} from '../auth/tokenStore'
import { AuthContext } from './authContextValue'

export interface AuthContextType {
  isAuthenticated: boolean
  login: (token: string) => void
  logout: () => void
}

export function AuthProvider({
  children
}: {
  children: React.ReactNode
}) {

  const [isAuthenticated, setIsAuthenticated] = useState(() => !!getAccessToken())

  const login = (token: string) => {
    setAccessToken(token)
    setIsAuthenticated(true)
  }

  const logout = () => {
    clearAccessToken()
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

