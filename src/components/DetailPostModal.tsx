import { useEffect } from 'react'
import './css/DetailPostModal.css'
import clsx from 'clsx'
import type { Post } from '../types'

type Props = {
  isOpen: boolean
  onClose: () => void
  post?: Post 
}

export default function DetailPostModal({ isOpen, onClose, post }: Props) {

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
                    <div className='detail-tag'>{t}</div>
                ))}
            </div>
            <div className='detail-reactions'>
                <button className='reaction-btn liked'>❤️ {post?.stats.likeCount}</button>
                <button className='reaction-btn'>🔖 저장</button>
                <button className='reaction-btn'>↗️ 공유</button>
            </div>
            <div className='comments-label'>댓글 {post?.stats.commentCount}개</div>
            <div className='comment-item'>
                <div className='comment-av a'>김</div>
                <div className='comment-bubble'>
                    <div className='comment-author'>김하늘</div>
                    <div className='comment-text'>2부에서 형부의 시선에 대한 분석이 정말 인상적이에요. 저도 이번에 다시 읽으면서 '예술'이라는 이름 아래 이뤄지는 착취의 구조가 선명하게 보였어요.</div>
                    <div className='comment-footer'>
                        <span className='comment-date'>30분 전</span>
                        <button className='comment-action'>❤️ 5</button>
                        <button className='comment-action'>↩ 답글</button>
                    </div>
                </div>
            </div>
            <div className='comment-item mine'>
                <div className='comment-av b'>박</div>
                <div className='comment-bubble'>
                    <div className='comment-author'>박소담 <span>작성자</span></div>
                    <div className='comment-text'>맞아요. 그래서 3부에서 인혜의 시선이 더 아프게 읽혀요. 영혜를 구하려 하지만, '정상적인 삶'의 논리를 놓지 못하는 모순 속에 있잖아요.</div>
                    <div className='comment-footer'>
                        <span className='comment-date'>22분 전</span>
                        <button className='comment-action'>❤️ 3</button>
                        <button className='comment-action'>↩ 답글</button>
                    </div>
                </div>
            </div>
            <div className='comment-item'>
                <div className='comment-av s'>?</div>
                <div className='secret-bubble'>🔒 비밀 댓글입니다. 작성자만 볼 수 있어요.</div>
            </div>
            <div className='comment-input-area'>
                <textarea className='comment-textarea' placeholder='댓글을 남겨보세요...'></textarea>
            </div>
            <div className='comment-options'>
                <label className='secret-check'><input type='checkbox'/> 🔒 비밀 댓글 </label>
                <button className='btn-comment'>등록</button>
            </div>
        </section>
      </div>
    </div>
  )
}

export const formatTimeAgo = (
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