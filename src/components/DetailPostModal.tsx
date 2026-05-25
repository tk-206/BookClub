import { useEffect, useState } from 'react'
import './css/DetailPostModal.css'
import clsx from 'clsx'
import { createComment, type CommentType, type Post } from '../types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useMe } from '../hooks/useMe'
import CommentList from './CommentList'

type Props = {
  isOpen: boolean
  onClose: () => void
  post: Post 
}

export default function DetailPostModal({ isOpen, onClose, post }: Props) {
    const queryClient = useQueryClient()
    const { data: user } = useMe()
    const [commentContent, setCommentContent] = useState('')
    const [isSecret, setIsSecret] = useState(false)

    useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose()
        }
    }

    if (isOpen) {
        window.addEventListener('keydown', handleEsc)
    }

    return () => {
        window.removeEventListener('keydown', handleEsc)
    }
    }, [isOpen, onClose])
    /* 댓글, 답글 저장 + 표시 해야함. */
    const saveMutation = useMutation({
        mutationFn: (com: Omit<CommentType, "id">) => {
            if(!user) {
                throw new Error('로그인이 필요합니다.')
            }
            return createComment(com, user.id)
        },
        onSuccess: (newComment) => {
            queryClient.setQueryData<CommentType[]>(
                ['comments'],
                (old = []) => [...(old ?? []), newComment]
            )
            onClose()
        }
    })

    const handleSave = () => {
        saveMutation.mutate()
    }

  return (
    <div className={clsx('modal-overlay', {open: isOpen})} onClick={onClose}>
      <div className={clsx('detail-modal', {open: isOpen})} onClick={(e) => e.stopPropagation()}>
        
        <section className='detail-header'>
            <button className='detail-close' onClick={() => onClose()}>✕</button>
            <div className='detail-cats'>
                <div className={clsx('post-category', post?.category)}>{post?.category}</div>
            </div>
            <div className='detail-title'>{post?.title}</div>
            <div className='detail-stats'>
                <div className='detail-poster'>
                    <div className='detail-avatar'>{post?.profileImage}</div>
                    <span className='detail-author'>{post?.author}</span>
                </div>
                <span>·</span>
                <span>{formatTimeAgo(post?.createAt ?? '')}</span>
                <span>·</span>
                <span>👁 {post?.stats.viewCount}</span>
            </div>
        </section>

        <section className='detail-body'>
            <div className='detail-content'>
                {post?.content}
            </div>
            <div className='detail-tags'>
                {!!post?.tags && post?.tags.map((t) => (
                    <div key={t} className='detail-tag'>{t}</div>
                ))}
            </div>
            <div className='detail-reactions'>
                <button className='reaction-btn liked'>❤️ {post?.stats.likeCount}</button>
                <button className='reaction-btn'>🔖 저장</button>
                <button className='reaction-btn'>↗️ 공유</button>
            </div>
            <div className='comments-label'>댓글 {post?.stats.commentCount}개</div>
            <CommentList postId={post.id} />
            <div className='comment-input-area'>
                <textarea className='comment-textarea' placeholder='댓글을 남겨보세요...'></textarea>
            </div>
            <div className='comment-options'>
                <label className='secret-check'><input type='checkbox'/> 🔒 비밀 댓글 </label>
                <button className='btn-comment' onClick={() => handleSave}>등록</button>
            </div>
        </section>
      </div>
    </div>
  )
}

const formatTimeAgo = (
    dataString: string
) => {
    const now = new Date()
    const date = new Date(dataString)

    const diff = now.getTime() - date.getTime()

    const minutes = Math.floor(diff / 1000 / 60)
    const hours = Math.floor(diff / 1000 / 60 / 60)
    const days = Math.floor(diff / 1000 / 60 / 60 / 24)

    if(minutes < 1) return '방금 전'

    if(minutes < 60) return `${minutes}분 전`

    if(hours < 24) return `${hours}시간 전`
    
    if(days < 7) return `${days}일 전`

    const year = date.getFullYear()

    const month = String(
        date.getDate()
    ).padStart(2,'0')

    const day = String(
        date.getDate()
    ).padStart(2,'0')

    return `${year}.${month}.${day}`
}