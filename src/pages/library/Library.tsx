import clsx from 'clsx'
import './Library.css'
import { useState, useEffect } from 'react'
import MyBook from './components/LibraryMyBook'
import Calendar from '../../components/Calendar'
import StatsView from './components/LibraryStatsView'
import AddBookModal from '../../components/AddBookModal'
import { fetchBooks, type Book } from '../../api/book'
import { useQuery } from '@tanstack/react-query'
import { useAuth } from '../../context/AuthContext'
import { useMe } from '../../api/useMe'

type SideTab = '전체 서재' | '읽는 중' | '읽은 책' | '읽고 싶어요' | '독서 캘린더' | '독서 통계' | '내 게시글' | '알림'
type ContentTab = '목록' | '캘린더' | '통계'

export default function Library() {
    const [sideTab, setSideTab] = useState<SideTab>('전체 서재')
    const [contentTab, setContentTab] = useState<ContentTab>('목록')
    const [open, setOpen] = useState(false)
    const [selectBook, setSelectBook] = useState<Book | null>(null)
    const { accessToken } = useAuth()
    const { data: user } = useMe()

    const { data: books = [], isLoading, error } = useQuery({
        queryKey: ['books', user?.id],
        queryFn: () => fetchBooks(user!.id),
        enabled: !!user?.id,
        refetchOnWindowFocus: false,
    })

    const tabContent = {
        목록: MyBook,
        캘린더: Calendar,
        통계: StatsView,
    }

    const ActiveComponent = tabContent[contentTab]

    const menu = [
        {
            title: '내 서재',
            pages: [
                {label: '전체 서재', icon: '📚'},
                {label: '읽는 중', icon: '📖'},
                {label: '읽은 책', icon: '✅'},
                {label: '읽고 싶어요', icon: '🔖'},
            ],
        },
        {
            title: '활동',
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

    if (error) return <div>에러 발생</div>

    return (
        <section className='library-page'>
            {/* sidebar */}
            <aside className='sidebar'>
                <div className='side-profile'>
                    <div className='profile-icon'>📚</div>
                    <div className='profile-nickname'>{user?.name}</div>
                    <div className='profile-info'>{user?.role} · 가입 {user?.createAt}</div>
                    <div className='profile-card'>
                        <div className='card-box'>
                            <div className='box-num'>{books.filter(b => b.status === '완독').length}</div>
                            <div className='box-text'>읽은 책</div>
                        </div>
                        <div className='card-box'>
                            <div className='box-num'>{books.filter(b => b.status === '읽는중').length}</div>
                            <div className='box-text'>읽는 중</div>
                        </div>
                        <div className='card-box'>
                            <div className='box-num'>{books.filter(b => b.status === '희망').length}</div>
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
                                    <span className='icon'>{page.icon}</span>
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
                    <div className='lib-header-title'>
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
                            <div className='status-num'>{books.filter(b => b.status === '읽는중').length}</div>
                            <div className='status-sub'>권</div>
                        </div>
                    </div>
                    <div className='lib-status'>
                        <span>✅</span>
                        <div>
                            <div className='status-label'>완독</div>
                            <div className='status-num'>{books.filter(b => b.status === '완독').length}</div>
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
                <ActiveComponent isLoading={isLoading && !books.length} bookList={books ?? []} onEdit={(book) => {setSelectBook(book); setOpen(true)}} onFilter={sideTab}/>
            </section>

            <AddBookModal isOpen={open} onClose={() => { setOpen(false); setSelectBook(null)}} initialData={selectBook ?? undefined} user={user} />
        </section>
    )
}