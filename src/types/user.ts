export interface Agreement {
  terms: boolean
  privacy: boolean
  marketing: boolean
  age: boolean
}

export interface User {
    createAt: string,
    name: string,
    id: string,
    email: string,
    profileImage?: string,
    role: UserRole,
    accessToken?: string,
    agreement: Agreement
    password: string,
}

type UserRole = '독서가' | '작가' | '관리자' | '출판사'


export interface AuthContextType {
    isLoggedIn: boolean,
    login: (token: string) => void,
    logout: () => void,
    accessToken: string | null,
    isInitializing: boolean,
}

export interface SignUpPayload {
  email: string
  password: string
  name: string
  agreement: Agreement
}

