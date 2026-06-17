export const bookKeys = {
    all: ['books'] as const,
    list: (userId: string) => [...bookKeys.all, userId] as const,
    detail: (id: string) => [...bookKeys.all, 'detail', id] as const 
}