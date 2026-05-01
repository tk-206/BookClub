import { api } from "./client"

/* export const loginApi = async (email: string, password: string) => {
    const res = await api.get('/users', {
        params: {
            email: email.trim(),
            password: password.trim()
        }
    })

    if (res.data.length === 0) {
        throw new Error("로그인 실패")
    }

    const user = res.data[0]

    return {
        accessToken: "new-access-token-" + Date.now(),
        user
    }
} */

export const loginApi = async (email: string, password: string) => {
    const res = await api.get('/users')

    const user = res.data.find(
        (u: { email: string; password: string }) =>
            u.email === email.trim() && u.password === password.trim()
    )

    if (!user) {
        throw new Error("로그인 실패")
    }

    return {
        accessToken: "new-access-token-" + Date.now(),
        user
    }
}