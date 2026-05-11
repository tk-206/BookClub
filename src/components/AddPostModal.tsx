import { useState, useEffect } from 'react'
import './css/AddPostModal.css'
import clsx from 'clsx'
import { createPost, type Post, type User } from '../types'
import { useMutation, useQueryClient } from '@tanstack/react-query'

type Props = {
  isOpen: boolean
  onClose: () => void
  initialData?: Post
  user?: User
}

const emptyPost: Omit<Post, 'id'> = {
        category: '',
        title: '',
        content: '',
        isRead: false,
        author: '',
        createdAt: '',
        stats: {
            likeCount: 0,
            viewCount: 0,
            commentCount: 0,
        },
        tags: [],
        isSecret: false,
        comments: []
    }

type Category = '독서 토론' | '책 리뷰' | '질문 · 추천' | '모임 모집' | '정보 공유' | '구인구직'

export default function AddPostModal({ isOpen, onClose, initialData, user }: Props) {
    const queryClient = useQueryClient()
    const isEditMode = !!initialData
    const category = ['독서 토론', '책 리뷰', '질문 · 추천', '모임 모집', '정보 공유', '구인구직'] as const
    const [categorySel,setCategorysel] = useState<Category>('독서 토론')
    const [tagInput, setTagInput] = useState('')
    const tags = tagInput
        .split(',')
        .map(tag => tag.trim())
        .filter(Boolean)
        .map(tag => tag.startsWith('#') ? tag : `#${tag}`)
    const [post, setPost] = useState<Omit<Post, 'id'>>(emptyPost)

    useEffect(() => {
        setPost(initialData ?? emptyPost)
    }, [!!initialData, isOpen])

    // 로그인 안되어있을 경우 로그인 시키기.
    const saveMutation = useMutation({
        mutationFn: (post: Omit<Post, "id">) => {
            if(!user) {
                throw new Error('로그인이 필요합니다.')
            }
            return createPost(post, user.id)
        },
        onSuccess: (newPost) => {
            queryClient.setQueryData<Post[]>(
                ['posts'],
                (old = []) => [...old, newPost]
            )
            onClose()
        }
    })

    const updateMutation = () => {}

    const handleSubmit = () => {
        const payload = {
            ...post,
            tags
        }
        if(isEditMode) {
            updateMutation()
        } else {
            saveMutation.mutate(payload)
        }
    }

    const handleChange = <K extends keyof Post>(key: K, value: Post[K]) => {
        setPost(prev => ({
            ...prev,
            [key]: value
        }))
    }

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
                        <button key={c} className={clsx('write-cat', {sel: categorySel === c})} value={post.category} onClick={() => { setCategorysel(c); handleChange('category', c) }}>{c}</button>
                    ))}
                </div>
            </div>
            <div className='write-field'>
                <div className='write-label'>제목</div>
                <input type="text" value={post.title} onChange={e => handleChange('title', e.target.value)} placeholder='제목을 입력하세요'/>
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
                <textarea value={post.content} onChange={e => handleChange('content', e.target.value)} placeholder='독서 이야기를 나눠보세요...'/>
            </div>
            <div className='write-field'>
                <div className='write-label'>태그</div>
                <input type="text" value={tagInput} onChange={e => setTagInput(e.target.value)} placeholder='#태그 입력 (쉼표로 구분) ex) 소설, SF'/>
            </div>
        </div>

        <div className='write-footer'>
            <div className='write-secret'>
                <input type='checkbox' checked={post.isSecret} onChange={() => handleChange('isSecret', !post.isSecret) } ></input> 🔒 비밀글 
            </div>
            <button className='btn-ghost'>임시저장</button>
            <button className='btn-primary' onClick={handleSubmit} >게시하기</button>
        </div>
      </div>
    </div>
  )
}