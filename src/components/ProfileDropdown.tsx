import { useRef, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/useAuth'
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
      <style>{`@keyframes dropdownIn { from { opacity:0; transform:translateY(-6px) } to { opacity:1; transform:translateY(0) } }`}</style>
      {/* 아바타 버튼 */}
      <button
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        className="w-[34px] h-[34px] rounded-full bg-gradient-to-br from-navy to-navy-light flex items-center justify-center text-gold text-[0.75rem] cursor-pointer border-none"
      >
        {user?.name?.[0] ?? '?'}
      </button>

      {/* 드롭다운 */}
      {isOpen && (
        <div className="absolute top-[calc(100%+10px)] right-0 w-[220px] bg-ivory border border-gold-light/20 shadow-[0_8px_24px_rgba(0,0,0,0.1)] z-[200]" style={{ animation: 'dropdownIn 0.15s ease' }}>

          {/* 유저 정보 */}
          <div className="flex items-center gap-3 p-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-navy to-navy-light flex items-center justify-center text-gold text-base shrink-0">
              {user?.name?.[0] ?? '?'}
            </div>
            <div>
              <div className="font-serif text-[0.88rem] text-navy font-semibold">{user?.name}</div>
              <div className="text-[0.68rem] text-gold mt-[0.15rem] tracking-[0.05em]">{user?.role}</div>
              <div className="text-[0.68rem] text-muted mt-[0.1rem]">{user?.email}</div>
            </div>
          </div>

          <div className="h-px bg-gold-light/15" />

          {/* 메뉴 아이템 */}
          <button
            type="button"
            className="flex items-center gap-[0.6rem] w-full px-4 py-[0.65rem] text-[0.82rem] text-ink bg-transparent border-none text-left cursor-pointer font-sans transition-colors duration-150 hover:bg-cream"
            onClick={() => { navigate('/내 서재'); setIsOpen(false) }}
          >
            📚 내 서재
          </button>
          <button
            type="button"
            className="flex items-center gap-[0.6rem] w-full px-4 py-[0.65rem] text-[0.82rem] text-ink bg-transparent border-none text-left cursor-pointer font-sans transition-colors duration-150 hover:bg-cream"
            onClick={() => { navigate('/'); setIsOpen(false) }}
          >
            ⚙️ 설정
          </button>

          <div className="h-px bg-gold-light/15" />

          <button
            type="button"
            className="flex items-center gap-[0.6rem] w-full px-4 py-[0.65rem] text-[0.82rem] text-rose bg-transparent border-none text-left cursor-pointer font-sans transition-colors duration-150 hover:bg-rose/10"
            onClick={handleLogout}
          >
            로그아웃
          </button>

        </div>
      )}
    </div>
  )
}