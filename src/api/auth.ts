import { api } from "./client"

export const loginApi = async (email: string, password: string) => {
    const res = await api.get(`/users?email=${email}&password=${password}`)

    if (res.data.length === 0) {
        throw new Error("로그인 실패")
    }

    const user = res.data[0]

    return {
        accessToken: "fake-token-" + user.id,
        user
    }
}