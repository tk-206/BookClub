export interface User {
    createAt: string,
    name: string,
    id: number,
    email: string,
    profileImage?: string,
    role: UserRole,
}

type UserRole = '독서가' | '작가' | '관리자' | '출판사'


export interface AuthContextType {
    user: User | null,
    isLoggedIn: boolean,
    login: (user: User) => void,
    logout: () => void,
}

