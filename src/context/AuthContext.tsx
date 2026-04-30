import { createContext, useContext, useEffect, useState, } from "react";
import type { ReactNode } from "react";
import type { AuthContextType } from "../types";

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }:{ children: ReactNode }) {
    const [accessToken, setAccessToken] = useState<string | null>(null)
    const [isInitializing, setIsInitializing] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem('accessToken')
        if (token) {
            setAccessToken(token)
        }
        setIsInitializing(false)
    }, [])

    const login = (token: string) => {
        setAccessToken(token)
        localStorage.setItem('accessToken', token)
    }

    const logout = () => {
        setAccessToken(null)
        localStorage.removeItem('accessToken')
    }

    return (
        <AuthContext.Provider value={{ accessToken ,isLoggedIn: !!accessToken, login, logout, isInitializing}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth는 AuthProvider 안에서만 써야 해요')
    }
    return context
}