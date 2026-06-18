import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost, togglePostLike, type Post, type TogglePostLikeInput, type User } from "../../types";
import { postKeys } from "./queryKeys";

export default function usePostMutations(user?: User, onUpdatePost?: (post: Post) => void) {
    const queryClient = useQueryClient()

    const saveMutation = useMutation({
        mutationFn: (post: Omit<Post, "id">) => {
            if(!user) {
                throw new Error('로그인이 필요합니다.')
            }
            return createPost(post, user.id)
        },
        onSuccess: (newPost: Post) => {
            queryClient.setQueryData<Post[]>(
                [postKeys.list()],
                (old = []) => [...old, newPost]
            )
        }
    })

    const likeMutation = useMutation({
            mutationFn: ({
                postId,
                userId
            }: TogglePostLikeInput) =>
                togglePostLike(
                postId,
                userId
                ),
    
            onSuccess: (updatePost) => {
                queryClient.setQueryData<Post[]>(
                    [postKeys.list()],
                    old =>
                        old?.map(post => 
                            post.id === updatePost.id
                            ? updatePost
                            : post
                        )
                )
                onUpdatePost?.(updatePost)
            }
        })

    return {
        saveMutation,
        likeMutation
    }
}