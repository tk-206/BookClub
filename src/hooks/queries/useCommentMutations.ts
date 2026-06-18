import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createComment, toggleCommentLike, type CommentType, type CreateCommentInput, type ToggleLikeInput, type User } from "../../types";

export default function useCommentMutations(postId: string, user?: User,  commentId?: string) {
    const queryClient = useQueryClient()

    const saveMutation = useMutation({
        mutationFn: (com: CreateCommentInput) => {
            if(!user) {
                throw new Error('로그인이 필요합니다.')
            }
            return createComment(com, user.id, postId, user.name, commentId)
        },
        onSuccess: (newComment) => {
            queryClient.setQueryData<CommentType[]>(
                ['comments', postId],
                (old = []) => [...old, newComment]
            )
        }
    })

    const likeMutation = useMutation({
        mutationFn: ({
            commentId,
            userId,
        }: ToggleLikeInput) => 
            toggleCommentLike(
                commentId,
                userId
            ),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['comments', postId]
            })
        }
    })

    return {
        saveMutation,
        likeMutation
    }
}