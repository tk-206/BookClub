import clsx from 'clsx'
import './Community.css'
import { useState } from 'react'
import DetailPostModal from '../../components/DetailPostModal'
import AddPostModal from '../../components/AddPostModal'
import { boardList, authorList, tagList, noticeList, filterTabList, postList, hotPostList, meetingList, festivalList } from '../../data/mock/DummyData'
import PostList from './components/PostList'

type Menu = '전체 글' | '독서 토론' | '책 리뷰' | '질문 · 추천' | '모임 모집' | '정보 공유' | '작가 채널' | '출판사 소식' | '구인구직'
type FilterTab = '최신순' | '인기순' | '댓글순' | '조회순'

export default function Community() {
    const [menu, setMenu] = useState<Menu>('전체 글')
    const [filterTab, setFilterTab] = useState<FilterTab>('최신순')
    const [activeTags, setActiveTags] = useState<string[]>([])
    const [detailOpen, setDetailOpen] = useState(false)
    const [writeOpen, setWriteOpen] = useState(false)

    

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
            <main className='board-content'>
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
                    <div className='filter-tabs'>
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
                    <PostList posts={postList} onClickPost={() => setDetailOpen(true)} />
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
            </main>
            {/* Right */}
            <aside className='right-sidebar'>
                <div className='widget'>
                    <div className='widget-title'>🔥 인기 글</div>
                    {hotPostList.map((l, i) => (
                        <div className='hot-item'>
                            <div className={clsx('hot-num', {top: i+1 <= 3})}>{i+1}</div>
                            <div className='hot-title'>{l.title}</div>
                            <div className='hot-like'>❤️ {l.like}</div>
                        </div>
                    ))}
                </div>
                <div className='widget'>
                    <div className='widget-title'>🤝 활성 모임</div>
                    {meetingList.map((l, i) => (
                        <div className='meeting-item'>
                            <div className='meeting-name'>{l.name}</div>
                            <div className='meeting-stat'>
                                <div className='meeting-dot'></div>
                                {l.stat}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='widget'>
                    <div className='widget-title'>📅 다가오는 행사</div>
                    {festivalList.map((l) => (
                        <div className='festival-item'>
                            <div className='festival-date'>
                                <div className='festival-month'>{l.month}</div>
                                <div className='festival-day'>{l.day}</div>
                            </div>
                            <div className='festival-info'>
                                <div className='festival-name'>{l.name}</div>
                                <div className='festival-place'>{l.place}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='widget'>
                    <div className='write-post'>
                        <div className='write-desc'>나의 독서 이야기를<br/>커뮤니티에 나눠보세요</div>
                        <button className='write-btn post' onClick={() => setWriteOpen(true)}>✏️ 글쓰기</button>
                    </div>
                </div>
            </aside>

            <DetailPostModal isOpen={detailOpen} onClose={() => setDetailOpen(false)}/>
            <AddPostModal isOpen={writeOpen} onClose={() => setWriteOpen(false)}/>
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