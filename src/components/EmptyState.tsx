import EmptyIcon from "./EmptyIcon"
import './css/EmptyState.css'

interface EmptyStateProps {
  type: 'library' | 'posts' | 'search' | 'events' | 'notifications' | 'lounge'
  onAction?: () => void
}

const EMPTY_CONFIG = {
  library: {
    title: '아직 읽은 책이 없어요 🥹',
    desc: '첫 번째 책을 기록하고,\n나만의 서재를 채워보세요.',
    action: '+ 책 추가하기',
  },
  posts: {
    title: '첫 글을 남겨보세요',
    desc: '아직 게시글이 없어요.\n이야기를 시작해보세요.',
    action: '글쓰기',
  },
  search: {
    title: '검색 결과가 없어요',
    desc: '다른 키워드로\n다시 검색해보세요.',
    action: '전체 보기',
  },
  events: {
    title: '예정된 행사가 없어요',
    desc: '새 행사가 등록되면,\n알림으로 알려드려요.',
    action: '알림 설정',
  },
  notifications: {
    title: '새 알림이 없어요',
    desc: '팔로우한 작가나 모임의\n소식을 여기서 받아요.',
    action: '작가 팔로우하기',
  },
  lounge: {
    title: '아직 아무도 말을 꺼내지 않았어요',
    desc: '창작의 고민, 출판 이야기,\n동료 작가와 나누고 싶은 것을\n먼저 꺼내보세요',
    action: '첫 글 쓰기',
  },
}

export default function EmptyState({ type, onAction }: EmptyStateProps) {
  const config = EMPTY_CONFIG[type]
  const isDark = type === 'lounge'

  return (
    <div className={`empty-state ${isDark ? 'empty-state-dark' : ''}`}>
      <EmptyIcon type={type} />
      <p className="empty-title">{config.title}</p>
      <p className="empty-desc">
        {config.desc.split('\n').map((line, i) => (
          <span key={i}>{line}<br /></span>
        ))}
      </p>
      {onAction && (
        <button
          className={isDark ? 'empty-cta-gold' : 'empty-cta'}
          onClick={onAction}
        >
          {config.action}
        </button>
      )}
    </div>
  )
}