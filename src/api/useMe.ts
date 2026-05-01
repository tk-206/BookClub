import { useQuery } from "@tanstack/react-query"

export function useMe() {
    return useQuery({
        queryKey: ['me'],
        queryFn: async () => {
            const user = localStorage.getItem('user')
            if (!user) throw new Error("no user")
            return JSON.parse(user)
        },
        staleTime: Infinity,
        refetchOnWindowFocus: false
    })
}