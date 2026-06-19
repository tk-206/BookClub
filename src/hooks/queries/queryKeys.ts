export const bookKeys = {
    all: ['books'] as const,
    list: (userId: string) => [...bookKeys.all, userId] as const,
    detail: (id: string) => [...bookKeys.all, 'detail', id] as const 
}

export const postKeys = {
    all: ['posts'] as const,
    list: () => [...postKeys.all] as const,
    detail: (id: string) => [...postKeys.all, 'detail', id] as const 
}

export const commentKeys = {
    all: ['comments'] as const,
    list: (postId: string) => [...commentKeys.all, postId] as const,
}

export const userKeys = {
    all: ['users'] as const,
    detail: (id: string) => [...userKeys.all, id] as const,
}