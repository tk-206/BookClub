import clsx from 'clsx'
import './css/Library.css'
import { useState, useEffect } from 'react'
import MyBook from '../components/MyBook'
import Calendar from '../components/Calendar'
import StatsView from '../components/StatsView'
import AddBookModal from '../components/AddBookModal'

type SideTab = '전체 서재' | '읽는 중' | '읽은 책' | '읽고 싶어요' | '독서 캘린더' | '독서 통계' | '내 게시글' | '알림'
type ContentTab = '목록' | '캘린더' | '통계'

export default function Library() {
    const [sideTab, setSideTab] = useState<SideTab>('전체 서재')
    const [contentTab, setContentTab] = useState<ContentTab>('목록')
    const [open, setOpen] = useState(false)

    const tabContent = {
        목록: MyBook,
        캘린더: Calendar,
        통계: StatsView,
    }

    const ActiveComponent = tabContent[contentTab]

    const menu = [
        {
            title: '내 서재',
            icon: ['📚', '📖', '✅', '🔖'],
            pages: [
                {label: '전체 서재', icon: '📚'},
                {label: '읽는 중', icon: '📖'},
                {label: '읽은 책', icon: '✅'},
                {label: '읽고 싶어요', icon: '🔖'},
            ],
        },
        {
            title: '통계',
            icon: ['📅', '📊',],
            pages: [
                {label: '독서 캘린더', icon: '📅'},
                {label: '독서 통계', icon: '📊'},
            ],
        },
        {
            title: '활동',
            icon: ['💬', '🔔',],
            pages: [
                {label: '내 게시글', icon: '💬'},
                {label: '알림', icon: '🔔'},
            ],
        }
    ] as const

    const CONTENT_TAB: ContentTab[] = ['목록', '캘린더', '통계']

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [open])

    return (
        <div className='library-page'>
            {/* sidebar */}
            <aside className='sidebar'>
                <div className='side-profile'>
                    <div className='profile-icon'>📚</div>
                    <div className='profile-nickname'>김독서</div>
                    <div className='profile-info'>독서가 · 가입 2025.01</div>
                    <div className='profile-card'>
                        <div className='card-box'>
                            <div className='box-num'>24</div>
                            <div className='box-text'>읽은 책</div>
                        </div>
                        <div className='card-box'>
                            <div className='box-num'>3</div>
                            <div className='box-text'>읽는 중</div>
                        </div>
                        <div className='card-box'>
                            <div className='box-num'>12</div>
                            <div className='box-text'>읽고 싶어요</div>
                        </div>
                        <div className='card-box'>
                            <div className='box-num'>8</div>
                            <div className='box-text'>모임 참여</div>
                        </div>
                    </div>
                </div>

                <div className='side-menu'>
                    {menu.map((me) => (
                        <div key={me.title} className='sidebar-nav'>
                            <h2 className='sidebar-nav-title'>{me.title}</h2>
                            {me.pages.map((page, i) => (
                                <button key={page.label} className={clsx('sidebar-nav-btn', {active: sideTab === page.label})} onClick={() => setSideTab(page.label)}>
                                    <span className='icon'>{me.icon?.[i]}</span>
                                    {page.label}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>
            </aside>

            <section className='my-library'>
                {/* header */}
                <div className='lib-header'>
                    <div className='header-title'>
                        <span>MY LIBRARY</span>
                        내 서재
                    </div>
                    <button className='header-btn' onClick={() => setOpen(true)}><span>＋</span>책 추가하기</button>
                </div>
                <div className='lib-status-row'>
                    <div className='lib-status'>
                        <span>📖</span>
                        <div>
                            <div className='status-label'>읽는 중</div>
                            <div className='status-num'>3</div>
                            <div className='status-sub'>권</div>
                        </div>
                    </div>
                    <div className='lib-status'>
                        <span>✅</span>
                        <div>
                            <div className='status-label'>완독</div>
                            <div className='status-num'>24</div>
                            <div className='status-sub'>2025년 기준</div>
                        </div>
                    </div>
                    <div className='lib-status'>
                        <span>🎯</span>
                        <div>
                            <div className='status-label'>올해 목표</div>
                            <div className='status-num'>30</div>
                            <div className='status-sub'>권 · 80% 달성</div>
                        </div>
                    </div>
                </div>
                {/* tab */}
                <div className='lib-tab'>
                    {CONTENT_TAB.map((c) => (
                        <button
                            key={c}
                            className={clsx('lib-tab_btn', {active: contentTab === c})}
                            onClick={() => setContentTab(c)}
                        >
                            {c}
                        </button>
                    ))}
                </div>

                {/* content */}
                <ActiveComponent />
            </section>

            <AddBookModal isOpen={open} onClose={() => setOpen(false)}/>
        </div>
    )
}