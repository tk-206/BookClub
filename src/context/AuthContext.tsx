import { useState, useEffect, useCallback } from 'react'
import type { ReactNode } from 'react'
import { loginAPI, logoutAPI, silentRefreshAPI } from '../api/auth'
import type { User } from '../api/auth'
import { AuthContext } from './authContextValue'

export interface AuthContextType {
  user: User | null
  isLoggedIn: boolean
  isLoading: boolean       // 초기 인증 확인 중인지
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)  // 처음엔 true

  // ── 앱 시작할 때 자동 로그인 시도 ──
  // 새로고침해도 로그인 상태 유지되는 원리
  useEffect(() => {
    silentRefreshAPI()
      .then((userData) => setUser(userData))
      .catch(() => setUser(null))   // 실패하면 그냥 비로그인
      .finally(() => setIsLoading(false))
  }, [])

  const login = useCallback(async (email: string, password: string) => {
    const userData = await loginAPI({ email, password })
    setUser(userData)
  }, [])

  const logout = useCallback(async () => {
    await logoutAPI()
    setUser(null)
  }, [])

  return (
    <AuthContext.Provider value={{
      user,
      isLoggedIn: !!user,
      isLoading,
      login,
      logout,
    }}>
      {/* 초기 인증 확인 중엔 아무것도 안 보여주기 */}
      {/* 깜빡임 방지 — 로그인 상태 확인 전에 로그인 페이지 잠깐 보이는 현상 */}
      {!isLoading && children}
    </AuthContext.Provider>
  )
}
