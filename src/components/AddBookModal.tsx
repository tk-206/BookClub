import { useState, useEffect } from 'react'
import './css/AddBookModal.css'
import clsx from 'clsx'
import { createBook, deleteBook, type Book } from '../api/book'
import { useMutation, useQueryClient } from '@tanstack/react-query'

type Props = {
  isOpen: boolean
  onClose: () => void
  initialData?: Book
  onSave: (data:Book) => void
}

type Status = "읽는중" | "완독" | "희망"

export default function AddBookModal({ isOpen, onClose, initialData, onSave }: Props) {
  const isEditMode = !!initialData
  const queryClient = useQueryClient()
  const emptyForm: Book = {
    label: '',
    author: '',
    color: '',
    createAt: '',
    doneDate: '',
    readingDate: '',
    review: '',
    stars: 0,
    status: '희망',
    id: 0,
  }

  const [form, setForm] = useState<Book>(emptyForm)


  
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
      setForm(initialData ?? emptyForm)
    }, [initialData, isOpen])

    const saveMutaion = useMutation({
      mutationFn: createBook,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['books'] })
        onClose()
      }
    })

    const deleteMutaion = useMutation({
      mutationFn: deleteBook,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['books'] })
        onClose()
      },
    })

    const handleSubmit = () => {
      saveMutaion.mutate(form, )
    }

    const handleChange = <K extends keyof Book>(key: K, value: Book[K]) => {
      setForm(prev => ({
        ...prev,
        [key]: value
      }))
    }

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
              value={form?.label}
              onChange={(e) => handleChange('label', e.target.value)}
              placeholder="제목을 입력하세요"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
                <label className='form-label'>저자</label>
                <input
                className='form-input'
                value={form?.author}
                onChange={(e) => handleChange('author', e.target.value)}
                placeholder="저자명"
                />
            </div>
            <div className="form-group">
                <label className='form-label'>출판사</label>
                <input
                className='form-input'
                value={form?.publisher}
                onChange={(e) => handleChange('publisher', e.target.value)}
                placeholder="출판사명"
                />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
                <label className='form-label'>독서 상태</label>
                <select
                  value={form?.status}
                  onChange={(e) =>
                    handleChange('status', e.target.value as Status)
                  }
                >
                <option value={"읽는중"}>읽는 중</option>
                <option value={"완독"}>완독</option>
                <option value={"희망"}>희망</option>
                </select>
            </div>
            <div className="form-group">
                <label className='form-label'>완독일</label>
                <input
                className='form-input'
                type="date"
                value={form?.doneDate}
                onChange={(e) => handleChange('doneDate', e.target.value)}
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
                    className={n <= (form?.stars ?? 0) ? 'active' : ''}
                    onClick={() => handleChange('stars', n)}
                >
                    ★
                </button>
                ))}
            </div>
          </div>

            <div className="form-group">
                <label className='form-label'>한 줄 감상</label>
                <textarea
                    value={form?.review}
                    onChange={(e) => handleChange('review', e.target.value)}
                    placeholder="책에 대한 짧은 감상을 남겨보세요..."
                />
            </div>
        </div>
        
        {/* footer */}
        <div className="modal-footer">
          <button className='btn-cancel' onClick={onClose}>취소</button>
          <button className='btn-delete' onClick={() => deleteMutaion.mutate(form.id)}>삭제하기</button>
          <button
            type='button'
            className='btn-save'
            onClick={() => {
              handleSubmit()
            }}
          >
            저장하기
          </button>
        </div>

      </div>
    </div>
  )
}