import { createContext, useContext, useState, } from "react";
import type { ReactNode } from "react";
import type { AuthContextType, User } from "../types";

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }:{ children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null)

    const login = (userData: User) => {
        setUser(userData)

    }

    const logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, logout }}>
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