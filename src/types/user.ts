export interface User {
    createAt: string,
    name: string,
    id: number,
    email: string,
    profileImage?: string,
    role: UserRole,
    accessToken: string,
}

type UserRole = '독서가' | '작가' | '관리자' | '출판사'


export interface AuthContextType {
    isLoggedIn: boolean,
    login: (token: string) => void,
    logout: () => void,
    accessToken: string | null,
    isInitializing: boolean,
}

