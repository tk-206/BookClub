import { api } from "./client"
import { setAccessToken } from "./tokenStore";

/* export const loginApi = async (email: string, password: string) => {
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
} */

export async function login(data: { email: string; password: string }) {
  const res = await api.post('/auth/login', data)

  setAccessToken(res.data.accessToken)

  return res.data
}
