export interface User {
    createAt: string,
    name: string,
    id: number,
    email: string,
    profileImage?: string,
    role: UserRole,
}

type UserRole = 'user' | 'author' | 'admin'


export interface AuthContextType {
    user: User | null,
    isLoggedIn: boolean,
    login: (user: User) => void,
    logout: () => void,
}

