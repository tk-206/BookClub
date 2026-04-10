import { useState, useEffect } from 'react'
import './css/AddBookModal.css'
import clsx from 'clsx'
import type { Book } from '../types'

type Props = {
  isOpen: boolean
  onClose: () => void
  initialData?: Book
  onSave: (data:Book) => void
}

export default function AddBookModal({ isOpen, onClose, initialData, onSave }: Props) {
  const isEditMode = !!initialData
  const [form, setForm] = useState<Book>({
    label: '',
    author: '',
    color: '',
    createAt: '',
    doneDate: '',
    readingDate: '',
    review: '',
    stars: 0,
    status: '희망'
  })
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publisher, setPublisher] = useState('')
  const [status, setStatus] = useState('희망')
  const [date, setDate] = useState('')
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState('')

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

    useEffect(() => {
      if (initialData) {
        setTitle(initialData.label)
        setAuthor(initialData.author)
        setPublisher(initialData.publisher ?? '')
        setStatus(initialData.status ?? '')
        setDate(initialData.doneDate ?? '')
        setRating(initialData.stars ?? 0)
        setReview(initialData.review ?? '')
      } else {
        // 생성 모드 초기화
        setTitle('')
        setAuthor('')
        setPublisher('')
        setStatus('희망')
        setDate('')
        setRating(0)
        setReview('')
      }
    }, [initialData, isOpen])

  return (
    <div className={clsx('modal-overlay', {open: isOpen})} onClick={onClose}>
      <div className={clsx('modal', {open: isOpen})} onClick={(e) => e.stopPropagation()}>
        
        {/* header */}
        <div className="modal-header">
          <div className="modal-title">책 추가하기</div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        {/* body */}
        <div className="modal-body">
          <div className="form-group">
            <label className='form-label'>책 제목</label>
            <input
              className='form-input'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력하세요"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
                <label className='form-label'>저자</label>
                <input
                className='form-input'
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="저자명"
                />
            </div>
            <div className="form-group">
                <label className='form-label'>출판사</label>
                <input
                className='form-input'
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
                placeholder="출판사명"
                />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
                <label className='form-label'>독서 상태</label>
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option>읽는 중</option>
                <option>완독</option>
                <option>읽고 싶어요</option>
                </select>
            </div>
            <div className="form-group">
                <label className='form-label'>완독일</label>
                <input
                className='form-input'
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                />
            </div>
          </div>

          {/* ⭐ 별점 */}
          <div className="form-group">
            <label className='form-label'>별점</label>
            <div className="star-input">
                {[1,2,3,4,5].map((n) => (
                <button
                    key={n}
                    className={n <= rating ? 'active' : ''}
                    onClick={() => setRating(n)}
                >
                    ★
                </button>
                ))}
            </div>
          </div>

            <div className="form-group">
                <label className='form-label'>한 줄 감상</label>
                <textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="책에 대한 짧은 감상을 남겨보세요..."
                />
            </div>
        </div>
        
        {/* footer */}
        <div className="modal-footer">
          <button className='btn-cancel' onClick={onClose}>취소</button>
          <button
            className='btn-save'
            onClick={() => {
              console.log({
                title, author, publisher, status, date, rating, review
              })
              onClose()
            }}
          >
            저장하기
          </button>
        </div>

      </div>
    </div>
  )
}