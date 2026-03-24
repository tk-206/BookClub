import clsx from 'clsx'
import './css/Community.css'
import { useState } from 'react'

type Menu = '전체 글' | '독서 토론' | '책 리뷰' | '질문 · 추천' | '모임 모집' | '정보 공유' | '작가 채널' | '출판사 소식' | '구인구직'
type FilterTab = '최신순' | '인기순' | '댓글순' | '조회순'

export default function Community() {
    const [menu, setMenu] = useState<Menu>('전체 글')
    const [filterTab, setFilterTab] = useState<FilterTab>('최신순')
    const [activeTags, setActiveTags] = useState<string[]>([])

    const boardList = [
        {title: '전체 글', icon: '📋'},
        {title: '독서 토론', icon: '💬'},
        {title: '책 리뷰', icon: '📖'},
        {title: '질문 · 추천', icon: '❓'},
        {title: '모임 모집', icon: '🤝'},
        {title: '정보 공유', icon: '📢'},
    ] as const

    const authorList = [
        {title: '작가 채널', icon: '✍️'},
        {title: '출판사 소식', icon: '🏢'},
        {title: '구인구직', icon: '💼'},
    ] as const
    
    const tagList = [
        '#한강', '#SF소설', '#에세이', '#북페어', '#추천도서', '#독서모임', '#신간', '#고전'
    ]

    const noticeList = [
        {title: '2025년 봄 북클럽 독서 챌린지 — 3월 한 달간 3권 읽기', admin: '관리자 · 2025.03.01'},
        {title: '커뮤니티 이용 규칙 및 작가 인증 절차 안내', admin: '관리자 · 2025.02.15'},
    ] as const

    const filterTabList = [
        '최신순', '인기순', '댓글순', '조회순'
    ] as const

    const postList = [
        {
            id: 'post-1',
            category: '독서 토론',
            title: '이 책 해석 어떻게 생각하세요?',
            content: '저는 이렇게 느꼈는데...',
            isRead: false,

            author: {
                id: 'user-1',
                name: '김태경',
                avatar: '김',
            },

            createdAt: '2025-03-01',

            stats: {
                like: 10,
                commentCount: 3,
                view: 120,
            },

            tags: ['#한강', '#에세이'],

            isSecret: false,

            comments: [
                {
                    id: 'c1',
                    author: {
                        id: 'user-2',
                        name: '이수민',
                        avatar: '이',
                    },
                    content: '저도 비슷하게 느꼈어요',
                    createdAt: '2025-03-01',
                    isSecret: false,

                    replies: [
                        {
                            id: 'r1',
                            author: {
                                id: 'user-1',
                                name: '김태경',
                                avatar: '김',
                            },
                            content: '오 그렇군요!',
                            createdAt: '2025-03-01',
                            isSecret: false,
                        },
                    ],
                },
            ],
        },
        {
            id: 'post-2',
            category: '책 리뷰',
            title: '요즘 또 무슨 책 읽으세요?',
            content: '저는 이거 읽어요...',
            isRead: true,

            author: {
                id: 'user-2',
                name: '이수민',
                avatar: '이',
            },

            createdAt: '2025-03-01',

            stats: {
                like: 20,
                commentCount: 5,
                view: 320,
            },

            tags: ['#한강', '#소설'],

            isSecret: false,

            comments: [
                {
                    id: 'c2',
                    author: {
                        id: 'user-2',
                        name: '이수민',
                        avatar: '이',
                    },
                    content: '재밌더라구요',
                    createdAt: '2025-03-01',
                    isSecret: false,

                    replies: [
                        {
                            id: 'r2',
                            author: {
                                id: 'user-1',
                                name: '김태경',
                                avatar: '김',
                            },
                            content: '오 그렇군요!',
                            createdAt: '2025-03-01',
                            isSecret: false,
                        },
                    ],
                },
            ],
        },
    ]

    const hotPostList = [
        {
            title: '한강 노벨상 이후 한국 문화의 변화',
            like: 284,
        },
        {
            title: 'SF 입문 추천 도서 모음',
            like: 250,
        },
        {
            title: '4월 마포 독서모임 모집',
            like: 167,
        },
        {
            title: '2025 서울국제도서관 일정',
            like: 143,
        },
        {
            title: '민음사 편집자 채용 공고',
            like: 120,
        },
    ]
    
    return (
        <section className='community-page'>
            {/* Left */}
            <aside className='left-sidebar'>
                <div className='sidebar-menu'>
                    <div className='sidebar-title'>게시판</div>
                    {boardList.map((l) => (
                        <button 
                            className={clsx('sidebar-btn', { active: menu === l.title})} 
                            onClick={() => setMenu(l.title)}
                        >
                            <span>{l.icon}</span> {l.title}
                        </button>
                    ))}
                </div>
                <div className='sidebar-divider'></div>
                <div className='sidebar-menu'>
                    <div className='sidebar-title'>작가 & 출판사</div>
                    {authorList.map((l) => (
                        <button 
                            className={clsx('sidebar-btn', { active: menu === l.title})} 
                            onClick={() => setMenu(l.title)}
                        >
                            <span>{l.icon}</span> {l.title}
                    </button>
                    ))}
                </div>
                <div className='sidebar-menu'>
                    <div className='sidebar-title'>인기 태그</div>
                    <div className='tag-cloud'>
                        {tagList.map((l) => (
                            <button 
                                className={clsx('tag', {active: activeTags.includes(l)})} 
                                onClick={() => toggleTab(l)}
                            >
                                {l}
                            </button>
                        ))}
                    </div>
                </div>
            </aside>
            {/* Mid */}
            <section className='board-content'>
                <div className='board-header'>
                    <div className='board-label'>COMMUNITY · BOARD</div>
                    <div className='board-title'>전체 게시판</div>
                    <div className='board-subtitle'>독자,작가,출판사 모두의 이야기가 모이는 곳</div>
                </div>
                <div className='board-notice'>
                    {noticeList.map((l) => (
                        <div className='notice-card'>
                            <span className='notice-icon'>📌</span>
                            <div className='notice-text'>
                                <div className='text-title'>{l.title}</div>
                                <div className='text-subtitle'>{l.admin}</div>
                            </div>
                            <div className='community-badge badge-notice'>공지</div>
                        </div>
                    ))}
                </div>
                <div className='board-filter'>
                    <div>
                    {filterTabList.map((l) => (
                        <button 
                            key={l} 
                            className={clsx('filter-tab', {active: filterTab === l})}
                            onClick={() => setFilterTab(l)}
                        >
                            {l}
                        </button>
                    ))}
                    </div>
                    <div className='search-wrap'>
                        <span>🔍</span>
                        <input type='text' placeholder='게시글 검색'/>
                    </div>
                </div>
                <div className='post-list'>
                    <div className='featured-post'>
                        <div>
                            <div className='featured-label'>이주의 화제글</div>
                            <div className='featured-title'>한강 작가의 노벨상 수상 이후, 한국 문학은 어떻게 변했나</div>
                            <div className='featured-preview'>노벨문학상 수상 이후 1년이 지난 지금, 한국 문학 시장의 변화를 독자의 시선으로 돌아봅니다. 번역 출판의 확대, 독자층의 다양화, 그리고 창작자들이 느끼는 기대와 부담감...</div>
                            <div className='post-bottom'>
                                <div className='post-author'>
                                    <div className='post-author-avatar'>이</div>
                                    <div className='post-author-name'>이문학</div>
                                </div>
                                <div className='post-date'>2025.03.17</div>
                                <div className='post-stats'>
                                    <div className='post-stat'>❤️ 284</div>
                                    <div className='post-stat'>💬 47</div>
                                </div>
                            </div>
                        </div>
                        <div className='featured-img'>📚</div>
                    </div>
                    {postList.map((l) => (
                        <div className={clsx('post-item', {unread: l.isRead === false})}>
                            <div>
                                <div className='post-top'>
                                    <span className={clsx('post-category', l.category)}>{l.category}</span>
                                </div>
                                <div className='post-mid'>
                                    <div className='post-title'>{l.title}</div>
                                    <div className='post-preview'>{l.content}</div>
                                </div>
                                <div className='post-bottom'>
                                    <div className='post-author'>
                                        <div className='post-author-avatar'>{l.author.avatar}</div>
                                        <div className='post-author-name'>{l.author.name}</div>
                                    </div>
                                    <div className='post-date'>{l.createdAt}</div>
                                    <div className='post-stats'>
                                        <div className='post-stat'>❤️ {l.stats.like}</div>
                                        <div className='post-stat'>💬 {l.stats.commentCount}</div>
                                        <div className='post-stat'>🫣 {l.stats.view}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pagination">
                    <button className="page-btn">‹</button>
                    <button className="page-btn active">1</button>
                    <button className="page-btn">2</button>
                    <button className="page-btn">3</button>
                    <button className="page-btn">4</button>
                    <button className="page-btn">5</button>
                    <button className="page-btn">›</button>
                </div>
            </section>
            {/* Right */}
            <aside className='right-sidebar'>
                <div className='hot-post'>
                    <div className='widget-title'>🔥 인기 글</div>
                    {hotPostList.map((l, i) => (
                        <div className='hot-item'>
                            <div className={clsx('hot-num', {top: i+1 <= 3})}>{i+1}</div>
                            <div className='hot-title'>{l.title}</div>
                            <div className='hot-like'>❤️ {l.like}</div>
                        </div>
                    ))}
                </div>
            </aside>
        </section>
    )

    function toggleTab(tag: string) {
        setActiveTags((prev) => 
            prev.includes(tag)
              ? prev.filter((t) => t !== tag)
              : [...prev, tag]
        )
    }
}