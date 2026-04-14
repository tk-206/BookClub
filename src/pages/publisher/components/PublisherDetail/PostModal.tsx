import { useState, useEffect } from 'react'
import clsx from 'clsx'
import './PostModal.css'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export default function PostModal({ isOpen, onClose }: Props) {

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
      <div className={clsx('pub-post-modal', {open: isOpen})} onClick={(e) => e.stopPropagation()}>
        
        <section className='pub-post-header'>
            <button className='pub-post-close' onClick={() => onClose()}>✕</button>
            <div className='pub-post-cats'>
                <div className='pub-post-logo'>📚</div>
                <div className='pub-post-name'>민음사</div>
            </div>
            <div className='pub-post-title'>문학 편집자 (소설·에세이 분야)</div>
            <div className='pub-post-stats'>
                <span>💼 정규직</span>
                <span>📍 서울 강남구</span>
                <span>⏰ 경력 2년 이상</span>
                <span>🗓 D-12 (4월 1일 마감)</span>
            </div>
        </section>

        <section className='pub-post-body'>
            <div className='pub-post-content'>
                <div className='pub-post-content-title'>업무 내용</div>
                <ul className='pub-post-content-list'>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
                <div className='pub-post-content-title'>자격 요건</div>
                <ul className='pub-post-content-list'>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
                <div className='pub-post-content-title'>우대 사항</div>
                <ul className='pub-post-content-list'>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
                <div className='pub-post-content-title'>근무 조건</div>
                <ul className='pub-post-content-list'>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            </div>
        </section>
        <section className='pub-post-footer'>
                <button className='btn-save-job'>🔖 저장</button>
                <button className='btn-apply'>지원하기</button>
        </section>
      </div>
    </div>
  )
}