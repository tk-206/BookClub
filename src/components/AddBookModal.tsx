import { useState, useEffect } from 'react'
import './css/AddBookModal.css'
import clsx from 'clsx'
import { createBook, deleteBook, updateBook, type Book } from '../api/book'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { User } from '../types'

type Props = {
  isOpen: boolean
  onClose: () => void
  initialData?: Book
  user: User
}

type Status = "읽는중" | "완독" | "희망"

export default function AddBookModal({ isOpen, onClose, initialData, user }: Props) {
  const isEditMode = !!initialData
  const queryClient = useQueryClient()
  const emptyForm: Book = {
    label: '',
    author: '',
    color: '',
    createAt: '',
    doneDate: '',
    readingDate: '',
    publisher: '',
    review: '',
    stars: 0,
    status: '희망',
    id: '',
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

  const saveMutation = useMutation({
    mutationFn: (book: Omit<Book, "id" | "userId">) =>
      createBook(book, user!.id),
    onSuccess: (newBook) => {
      queryClient.setQueryData<Book[]>(['books', user?.id], (old = []) => [
        ...old,
        newBook,
      ])
      onClose()
    },
  })

    const updateMutation = useMutation({
    mutationFn: (data: { id: string; book: Book }) =>
      updateBook(data.id, data.book, user!.id),
    onSuccess: (updatedBook) => {
      queryClient.setQueryData<Book[]>(['books', user?.id], (old = []) =>
        old.map((b) => (b.id === updatedBook.id ? updatedBook : b))
      )
      onClose()
    },
  })

    /* const deleteMutaion = useMutation({
      mutationFn: (id: number) => deleteBook(id, user.id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['books', user.id] })
        onClose()
      },
    }) */
   // 삭제: 캐시에서 해당 책 제거 (서버 재요청 없음)
  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteBook(id, user!.id),
    onSuccess: (_, id) => {
      queryClient.setQueryData<Book[]>(['books', user?.id], (old = []) =>
        old.filter((b) => b.id !== id)
      )
      onClose()
    },
  })

    const handleSubmit = () => {
      if(isEditMode) {
        updateMutation.mutate({ id: form.id, book: form })
      } else {
        saveMutation.mutate(form)
      }
    }

    const handleChange = <K extends keyof Book>(key: K, value: Book[K]) => {
      setForm(prev => ({
        ...prev,
        [key]: value
      }))
    }

  return (
    <div className={clsx('modal-overlay', { open: isOpen })} onClick={onClose}>
      <div className={clsx('modal', { open: isOpen })} onClick={(e) => e.stopPropagation()}>

        {/* header */}
        <div className="modal-header">
          <div className="modal-title">{isEditMode ? '책 수정하기' : '책 추가하기'}</div>
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
              {[1, 2, 3, 4, 5].map((n) => (
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
          {isEditMode && (
            <button
              className='btn-delete'
              onClick={() => deleteMutation.mutate(form.id)}
              disabled={deleteMutation.isPending}
            >
              {deleteMutation.isPending ? '삭제 중...' : '삭제하기'}
            </button>
          )}
          <button
            type='button'
            className='btn-save'
            onClick={handleSubmit}
            disabled={saveMutation.isPending || updateMutation.isPending}
          >
            {saveMutation.isPending || updateMutation.isPending
              ? '저장 중...'
              : !isEditMode ? '저장하기' : '수정'}
          </button>
        </div>

      </div>
    </div>
  )
}