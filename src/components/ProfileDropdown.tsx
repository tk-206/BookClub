// src/components/layout/ProfileDropdown.tsx
import { useRef, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './css/ProfileDropdown.css'
import { useMe } from '../hooks/useMe'

export default function ProfileDropdown() {
  const { logout } = useAuth()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { data: user } = useMe()

  // 바깥 클릭하면 닫기
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLogout = () => {
    logout()
    setIsOpen(false)
    navigate('/')
  }

/*   // 역할 한글 변환
  const roleLabel = {
    user: '독자',
    author: '작가',
    publisher: '출판사',
    admin: '관리자',
  }[user?.role ?? 'user'] */

  return (
    <div className="relative" ref={dropdownRef}>

      {/* 아바타 버튼 */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="nav-avatar"  /* 기존 클래스 그대로 */
      >
        {user?.name?.[0] ?? '?'}
      </button>

      {/* 드롭다운 */}
      {isOpen && (
        <div className="dropdown-menu">

          {/* 유저 정보 */}
          <div className="dropdown-header">
            <div className="dropdown-avatar">
              {user?.name?.[0] ?? '?'}
            </div>
            <div>
              <div className="dropdown-name">{user?.name}</div>
              <div className="dropdown-role">{user?.role}</div>
              <div className="dropdown-email">{user?.email}</div>
            </div>
          </div>

          <div className="dropdown-divider" />

          {/* 메뉴 아이템 */}
          <button
            className="dropdown-item"
            onClick={() => { navigate('/내 서재'); setIsOpen(false) }}
          >
            📚 내 서재
          </button>
          <button
            className="dropdown-item"
            onClick={() => { navigate('/'); setIsOpen(false) }}
          >
            ⚙️ 설정
          </button>

          <div className="dropdown-divider" />

          <button
            className="dropdown-item dropdown-item-danger"
            onClick={handleLogout}
          >
            로그아웃
          </button>

        </div>
      )}
    </div>
  )
}