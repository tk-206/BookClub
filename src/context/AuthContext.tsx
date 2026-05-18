import {
  createContext,
  useContext,
  useState,
  useEffect
} from 'react'

import {
  getAccessToken,
  setAccessToken,
  clearAccessToken
} from '../auth/tokenStore'

type AuthContextType = {
  isAuthenticated: boolean
  login: (token: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({
  children
}: {
  children: React.ReactNode
}) {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    setIsAuthenticated(!!getAccessToken())
  }, [])

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

export function useAuth() {

  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('AuthProvider 필요')
  }

  return context
}