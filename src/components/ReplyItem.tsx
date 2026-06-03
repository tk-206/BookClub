import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useMe } from "../hooks/useMe"
import { toggleCommentLike, type CommentType, type ToggleLikeInput } from "../types"
import { formatTimeAgo } from "../utils/date"
import clsx from "clsx"
import Button from "./Button"

type Props = {
    reply: CommentType,
    isParentAuthor: boolean
    postAuthorId: string,
    postId: string,
}

export default function ReplyItem({reply, postAuthorId, postId, isParentAuthor}: Props) {
    const { data: me } = useMe()
    const queryClient = useQueryClient()
    const isMine = me?.id === reply.userId
    const isViewerPostAuthor = me?.id === postAuthorId

    const canSeeSecret =
        !reply.isSecret ||
        isMine ||
        isViewerPostAuthor

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

    const handleLike = () => {
        if (!me) return
        likeMutation.mutate({
            commentId: reply.id,
            userId: me.id,
        })
    }

    if (!canSeeSecret) {
        return (
            <div className='comment-item'>
                <div className='comment-av s'>?</div>
                <div className='secret-bubble'>🔒 비밀 댓글입니다. 작성자만 볼 수 있어요.</div>
            </div>
        )
    }

    return (
        <div className={clsx("reply-item", {mine: isParentAuthor})}>
            <span className="reply-arrow">↳</span>
            <div className="comment-bubble">
                <div className='comment-author'>{reply.author}</div>
                <div className='comment-text'>{reply.content}</div>
                <div className='comment-footer'>
                    <span className='comment-date'>{formatTimeAgo(reply.createAt)}</span>
                    <Button variant="none" size='sm' type="button" onClick={handleLike}>❤️ {reply.likeCount}</Button>
                </div>
            </div>
        </div>
    )
}