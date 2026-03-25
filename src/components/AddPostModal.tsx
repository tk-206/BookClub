import { useState, useEffect } from 'react'
import './css/AddPostModal.css'
import clsx from 'clsx'

type Props = {
  isOpen: boolean
  onClose: () => void
}

type Category = '독서 토론' | '책 리뷰' | '질문 · 추천' | '모임 모집' | '정보 공유' | '구인구직'

export default function AddPostModal({ isOpen, onClose }: Props) {

    const category = ['독서 토론', '책 리뷰', '질문 · 추천', '모임 모집', '정보 공유', '구인구직'] as const
    const [categorySel,setCategorysel] = useState<Category>('독서 토론')

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
      <div className={clsx('write-board-modal', {open: isOpen})} onClick={(e) => e.stopPropagation()}>

        <div className='write-header'>
            <div className='write-title'>글쓰기</div>
            <button className='write-close' onClick={() => onClose()}>✕</button>
        </div>

        <div className='write-body'>
            <div className='write-field'>
                <div className='write-label'>게시판 선택</div>
                <div className='write-cats'>
                    {category.map((c) => (
                        <button className={clsx('write-cat', {sel: categorySel === c})} onClick={() => setCategorysel(c)}>{c}</button>
                    ))}
                </div>
            </div>
            <div className='write-field'>
                <div className='write-label'>제목</div>
                <input type="text" placeholder='제목을 입력하세요'/>
            </div>
            <div className='write-field'>
                <div className='write-label'>내용</div>
                <div className='write-toolbar'>
                    <div className='toolbar-btn'><b>B</b></div>
                    <div className='toolbar-btn'><i>I</i></div>
                    <div className='toolbar-btn'>🔗</div>
                    <div className='toolbar-btn'>🖼</div>
                    <div className='toolbar-btn'>❝</div>
                </div>
                <textarea placeholder='독서 이야기를 나눠보세요...'/>
            </div>
            <div className='write-field'>
                <div className='write-label'>태그</div>
                <input type="text" placeholder='#태그 입력 (쉼표로 구분)'/>
            </div>
        </div>

        <div className='write-footer'>
            <div className='write-secret'>
                <input type='checkbox'></input> 🔒 비밀글 
            </div>
            <button className='btn-ghost'>임시저장</button>
            <button className='btn-primary'>게시하기</button>
        </div>
      </div>
    </div>
  )
}