import clsx from "clsx"
import { useMe } from "../hooks/useMe"
import { createComment, toggleCommentLike, type CommentType, type CreateCommentInput, type ToggleLikeInput } from "../types"
import { formatTimeAgo } from "../utils/date"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import Button from "./Button"
import ReplyList from "./ReplyLIst"

type Props = {
    comment: CommentType,
    postId: string,
    postAuthorId: string,
    replies: CommentType[],
}


export default function CommentItem({comment, postId, postAuthorId, replies}:Props) {
    const { data: me } = useMe()
    const queryClient = useQueryClient()
    const isMine = me?.id === comment.userId
    const isPostAuthor = comment.userId === postAuthorId
    const isViewerPostAuthor = me?.id === postAuthorId
    const [isReplyOpen, setIsReplyOpen] = useState(false)
    const [replyContent, setReplyContent] = useState('')
    const [isSecret, setIsSecret]= useState(false)

    const canSeeSecret =
        !comment.isSecret ||
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
    const saveMutation = useMutation({
        mutationFn: (com: CreateCommentInput) => {
            if(!me) {
                throw new Error('로그인이 필요합니다.')
            }
            return createComment(com, me.id, postId, me.name, comment.id)
        },
        onSuccess: (newComment) => {
            queryClient.setQueryData<CommentType[]>(
                ['comments', postId],
                (old = []) => [...old, newComment]
            )
            setReplyContent('')
            setIsSecret(false)
        }
    })

    const handleSave = () => {
        if(!replyContent || !me ) return
        saveMutation.mutate({
            content: replyContent,
            isSecret: isSecret,
        })
    }

    const handleLike = () => {
        if (!me) return
        likeMutation.mutate({
            commentId: comment.id,
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
        <section>
            <div className={clsx('comment-item', { mine: isPostAuthor })}>
                <div className='comment-bubble'>
                    <div className='comment-author'>{comment.author} {isPostAuthor && <span>작성자</span>}</div>
                    <div className='comment-text'>{comment.content}</div>
                    <div className='comment-footer'>
                        <span className='comment-date'>{formatTimeAgo(comment.createAt)}</span>
                        <button className='comment-action' type="button" onClick={handleLike}>❤️ {comment.likeCount}</button>
                        <button className='comment-action' type="button" onClick={() => setIsReplyOpen(prev => !prev)}>↩ 답글</button>
                    </div>
                </div>
            </div>
            {isReplyOpen && replies.length > 0 && <ReplyList postAuthorId={postAuthorId} replyList={replies} postId={postId} isParentAuthor={isPostAuthor}/>}
            {isReplyOpen && 
                <div className='reply-form'>
                    <textarea
                        value={replyContent}
                        onChange={(e) =>
                            setReplyContent(e.target.value)
                        }
                        placeholder="답글을 남겨보세요..."
                        maxLength={500}
                    />
                    <div className="reply-option">
                        <label className='secret-check'><input type='checkbox' checked={isSecret} onChange={(e) => setIsSecret(e.target.checked)}/> 🔒 비밀 댓글 </label>
                        <Button className='btn-comment' type="button" onClick={handleSave} size="sm">
                            등록
                        </Button>
                    </div>
                </div>
            }
        </section>
    )
}