import { useEffect, useState } from 'react'
import './css/DetailPostModal.css'
import clsx from 'clsx'
import { type Post } from '../types'
import { useMe } from '../hooks/useMe'
import CommentList from './CommentList'
import { formatTimeAgo } from '../utils/date'
import usePostMutations from '../hooks/queries/usePostMutations'
import useCommentMutations from '../hooks/queries/useCommentMutations'

type Props = {
  isOpen: boolean
  onClose: () => void
  post: Post 
  onUpdatePost: (updatedPost: Post) => void
}

export default function DetailPostModal({ isOpen, onClose, post, onUpdatePost }: Props) { 
    const { data: user } = useMe()
    const { saveMutation } = useCommentMutations(post.id, user)
    const { likeMutation } = usePostMutations(user, onUpdatePost)
    const [commentContent, setCommentContent] = useState<string>('')
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

    const handleLike = () => {
        if (!user) return
        likeMutation.mutate({
            postId: post.id,
            userId: user.id,
        })
    }
    const handleSave = () => {
        if(!commentContent || !user ) return
        saveMutation.mutate({
            content: commentContent,
            isSecret: isSecret,
        })
    }

  return (
    <div className={clsx('modal-overlay', {open: isOpen})} onClick={onClose}>
      <div className={clsx('detail-modal', {open: isOpen})} onClick={(e) => e.stopPropagation()}>
        
        <section className='detail-header'>
            <button className='detail-close' type="button" onClick={() => onClose()}>✕</button>
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
                <button type="button" className='reaction-btn liked' onClick={handleLike} >❤️ {post?.stats.likeCount}</button>
                <button type="button" className='reaction-btn'>🔖 저장</button>
                <button type="button" className='reaction-btn'>↗️ 공유</button>
            </div>
            <div className='comments-label'>댓글 {post?.stats.commentCount}개</div>
            <CommentList postId={post?.id} postAuthorId={post.userId}/>
            <div className='comment-input-area'>
                <textarea className='comment-textarea' placeholder='댓글을 남겨보세요...'  value={commentContent} onChange={(e) => setCommentContent(e.target.value)} maxLength={1000}></textarea>
            </div>
            <div className='comment-options'>
                <label className='secret-check'><input type='checkbox' checked={isSecret} onChange={(e) => setIsSecret(e.target.checked)}/> 🔒 비밀 댓글 </label>
                <button className='btn-comment' type="button" onClick={handleSave}>등록</button>
            </div>
        </section>
      </div>
    </div>
  )
}