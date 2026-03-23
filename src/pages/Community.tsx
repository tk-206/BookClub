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
                <div className='board-board'>
                    게시글
                </div>
            </section>
            {/* Right */}
            <aside className='right-sidebar'>
                <div>인기 글</div>
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