// src/components/ui/EmptyIcon.tsx

interface EmptyIconProps {
  type: 'library' | 'posts' | 'search' | 'events' | 'notifications' | 'lounge'
  size?: number
}

export default function EmptyIcon({ type, size = 48 }: EmptyIconProps) {
  const icons = {

    // 📚 내 서재 — 책 3권 + 점선 빈 칸
    library: (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
        {/* 책 1 — 로즈 */}
        <rect x="6" y="10" width="8" height="30" rx="1.5"
          fill="#C4746E" opacity="0.85" />
        <rect x="6" y="10" width="2.5" height="30" rx="1" 
          fill="rgba(0,0,0,0.12)" />

        {/* 책 2 — 네이비 (가장 두꺼움) */}
        <rect x="16" y="6" width="10" height="34" rx="1.5"
          fill="#1A2744" opacity="0.85" />
        <rect x="16" y="6" width="2.5" height="34" rx="1"
          fill="rgba(0,0,0,0.15)" />

        {/* 책 3 — 세이지 */}
        <rect x="28" y="12" width="7" height="28" rx="1.5"
          fill="#6B8C7B" opacity="0.85" />
        <rect x="28" y="12" width="2" height="28" rx="1"
          fill="rgba(0,0,0,0.12)" />

        {/* 빈 칸 — 점선 */}
        <rect x="37" y="14" width="6" height="26" rx="1.5"
          stroke="#C9A84C" strokeWidth="1.5" strokeDasharray="3 2"
          fill="none" opacity="0.6" />
      </svg>
    ),

    // 📝 게시판 — 빈 문서 + 깃털 펜
    posts: (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
        {/* 문서 */}
        <rect x="8" y="6" width="26" height="34" rx="2"
          fill="#F5F0E8" stroke="#C9A84C" strokeWidth="1.2" />
        {/* 줄 */}
        <line x1="13" y1="16" x2="29" y2="16"
          stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="13" y1="22" x2="29" y2="22"
          stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="13" y1="28" x2="22" y2="28"
          stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.4" />
        {/* 깃털 펜 */}
        <path d="M32 8 Q42 12 36 20 Q30 28 28 32 L26 30 Q30 22 34 14 Q36 10 32 8Z"
          fill="#8C7B6B" opacity="0.5" />
        <path d="M28 32 L26 30 L27.5 33Z"
          fill="#8C7B6B" opacity="0.7" />
        <line x1="28" y1="30" x2="26" y2="36"
          stroke="#8C7B6B" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),

    // 🔍 검색 결과 없음 — 돋보기 + 물음표
    search: (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
        {/* 돋보기 원 */}
        <circle cx="20" cy="20" r="12"
          fill="#F5F0E8" stroke="#8C7B6B" strokeWidth="1.5" />
        {/* 손잡이 */}
        <line x1="29" y1="29" x2="40" y2="40"
          stroke="#8C7B6B" strokeWidth="2" strokeLinecap="round" />
        {/* 물음표 */}
        <text x="20" y="25" textAnchor="middle"
          fontSize="12" fill="#C9A84C" fontFamily="serif" fontWeight="400">
          ?
        </text>
      </svg>
    ),

    // 📅 행사 없음 — 달력 + 점선 원
    events: (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
        {/* 달력 */}
        <rect x="6" y="10" width="36" height="32" rx="2"
          fill="#F5F0E8" stroke="#8C7B6B" strokeWidth="1.2" />
        {/* 상단 헤더 */}
        <rect x="6" y="10" width="36" height="10" rx="2"
          fill="#1A2744" opacity="0.08" />
        {/* 날짜 고리 */}
        <line x1="15" y1="6" x2="15" y2="16"
          stroke="#8C7B6B" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="33" y1="6" x2="33" y2="16"
          stroke="#8C7B6B" strokeWidth="1.8" strokeLinecap="round" />
        {/* 날짜 구분선 */}
        <line x1="6" y1="26" x2="42" y2="26"
          stroke="#C9A84C" strokeWidth="0.8" strokeOpacity="0.3" />
        {/* 빈 날짜칸 점선 원 */}
        <circle cx="24" cy="34" r="5"
          stroke="#C9A84C" strokeWidth="1.2" strokeDasharray="2.5 2"
          fill="none" opacity="0.7" />
      </svg>
    ),

    // 🔔 알림 없음 — 종 + 잔잔한 선
    notifications: (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
        {/* 종 몸통 */}
        <path d="M24 6 C15 6 10 13 10 20 L10 30 L6 36 L42 36 L38 30 L38 20 C38 13 33 6 24 6Z"
          fill="#F5F0E8" stroke="#8C7B6B" strokeWidth="1.2" />
        {/* 종 손잡이 */}
        <line x1="24" y1="6" x2="24" y2="3"
          stroke="#8C7B6B" strokeWidth="1.5" strokeLinecap="round" />
        {/* 종 아랫부분 */}
        <path d="M18 36 C18 39.3 20.7 42 24 42 C27.3 42 30 39.3 30 36"
          stroke="#8C7B6B" strokeWidth="1.2" fill="none" />
        {/* 잔잔한 파동 (희미) */}
        <path d="M6 18 Q4 14 6 10"
          stroke="#C9A84C" strokeWidth="1" fill="none"
          strokeLinecap="round" opacity="0.35" />
        <path d="M42 18 Q44 14 42 10"
          stroke="#C9A84C" strokeWidth="1" fill="none"
          strokeLinecap="round" opacity="0.35" />
      </svg>
    ),

    // ✍️ 작가 라운지 — 깃털 + 골드 곡선 (다크용)
    lounge: (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
        {/* 배경 아치 */}
        <path d="M8 40 Q8 8 24 8 Q40 8 40 40"
          stroke="rgba(201,168,76,0.35)" strokeWidth="1.2" fill="none" />
        <path d="M14 40 Q14 14 24 14 Q34 14 34 40"
          stroke="rgba(201,168,76,0.55)" strokeWidth="1" fill="none" />
        {/* 중심 별 */}
        <circle cx="24" cy="8" r="3"
          fill="#C9A84C" opacity="0.8" />
        {/* 하단 선 */}
        <line x1="10" y1="40" x2="38" y2="40"
          stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
        {/* 빛 효과 점들 */}
        <circle cx="14" cy="22" r="1.2" fill="#C9A84C" opacity="0.3" />
        <circle cx="34" cy="22" r="1.2" fill="#C9A84C" opacity="0.3" />
        <circle cx="24" cy="32" r="1.5" fill="#C9A84C" opacity="0.4" />
      </svg>
    ),

  }

  return icons[type] ?? null
}