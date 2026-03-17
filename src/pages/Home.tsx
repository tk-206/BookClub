import './css/Home.css'
import { useState } from 'react'
import clsx from 'clsx'

type Tab = '독서기록' | '모임캘린더' | '게시판' | '작가채널'

export default function Home() {
    const [tab, setTab] = useState<Tab>('독서기록')
    const columns = [
        { 
            num: '01',
            emoji: '📚',
            title: '독서 기록 & 캘린더',
            desc: "읽은 책을 기록하고 캘린더로 한눈에 확인하세요. 로그인 후 나만의 서재를 만들어 독서 이력을 관리할 수 있습니다.",
        },
        { 
            num: '02',
            emoji: '💬',
            title: '모임 & 게시판',
            desc: "독서 모임을 만들거나 참여하세요. 정보 공유 게시판을 통해 독자들과 다양한 이야기를 나눌 수 있습니다.",        
        },
        { 
            num: '03',
            emoji: '🏢',
            title: '출판사 & 구인구직',
            desc: "출판사 정보를 소개하고 편집자, 번역가, 작가를 위한 구인구직 정보를 게재할 수 있습니다.",
        },
        { 
            num: '04',
            emoji: '✍️',
            title: '작가 전용 소통방',
            desc: "인증된 작가님들만의 공간에서 창작 이야기, 출판 경험, 고민을 자유롭게 나눌 수 있습니다.",
        },
        { 
            num: '05',
            emoji: '📣',
            title: '작가 ↔ 독자 채널',
            desc: "작가가 독자에게 직접 전하는 소통 공간. 신작 소식, 창작 비화, 작가의 생각을 가감 없이 공유합니다.",
        },
        { 
            num: '06',
            emoji: '🔔',
            title: '행사 알림 시스템',
            desc: "북페어, 사인회, 낭독회, 강연 등 작가와 출판사의 행사 정보를 실시간으로 받아보세요.",
        },
    ]

    const tabs: Tab[] = ['독서기록', '모임캘린더', '작가채널', '게시판']

    const dummyList = [
        {
            cover: '',
            title: '채식주의자',
            author: '한강 · 창비',
            stars: '★★★★★',
            date: '2025.03.01',
        },
        {
            cover: '',
            title: '아몬드',
            author: '손원평 · 창비 ',
            stars: '★★★★☆',
            date: '2025.02.14',
        },
        {
            cover: '',
            title: '82년생 김지영',
            author: '조남주 · 민음사 ',
            stars: '★★★★★',
            date: '2025.01.22',
        },
    ]

    const authorsList = [
        {
            color: 'a',
            emoji: '✍️',
            author: '한강',
            genre: '소설 · 시',
            follower: '팔로워 4.2k',
        },
        {
            color: 'b',
            emoji: '📖',
            author: '정세랑',
            genre: 'SF · 소설',
            follower: '팔로워 3.8k',
        },
        {
            color: 'c',
            emoji: '🖋️',
            author: '김영하',
            genre: '소설 · 에세이',
            follower: '팔로워 5.1k',
        },
        {
            color: 'd',
            emoji: '📝',
            author: '손원평',
            genre: '소설',
            follower: '팔로워 2.9k',
        },
        {
            color: 'e',
            emoji: '🌿',
            author: '최은영',
            genre: '단편소설',
            follower: '팔로워 2.1k',
        },
    ]

    return (
        <section className='home-page'>
            {/* header */}
            <section className='home-header'>
                <div className='home-header-text'>
                    <div className='home-header-title'>
                        BOOK COMMUNITY PLATFORM
                    </div>
                    <h1 className='home-header-text_desc'>
                        책을 읽고,<br/>
                        사람을 만나고,<br/>
                        <em>이야기가 흐르다</em>
                    </h1>
                    <div className='home-header-sub_desc'>
                        독서 기록부터 모임 운영, 작가 소통까지.<br/>
                        책을 사랑하는 모든 이들을 위한 공간입니다.
                    </div>

                    <div className='home-header-button'>
                        <button className='btn-large'>무료로 시작하기</button>
                        <button className='btn-link'>기능 살펴보기 →</button>
                    </div>

                    <div className='home-header-stats'>
                        <div className='stat-item'>
                            <div className='stat-num'>2,847</div>
                            <div className='stat-text'>등록된 독자</div>
                        </div>
                        <div className='stat-item'>
                            <div className='stat-num'>412</div>
                            <div className='stat-text'>활성 모임</div>
                        </div>
                        <div className='stat-item'>
                            <div className='stat-num'>83</div>
                            <div className='stat-text'>참여 작가</div>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="book-stack">
                        <div className="book book-4">
                            <div className="book-spine"></div>
                            <span className="book-title">채식주의자</span>
                        </div>
                        <div className="book book-1">
                            <div className="book-spine"></div>
                            <span className="book-title">82년생 김지영</span>
                        </div>
                        <div className="book book-2">
                            <div className="book-spine"></div>
                            <span className="book-title">아몬드</span>
                        </div>
                        <div className="book book-3">
                            <div className="book-spine"></div>
                            <span className="book-title">흰</span>
                        </div>
                    </div>
                    <div className="reading-badge">
                        <div className="badge-label">📖 지금 읽는 중</div>
                        <div className="badge-book">채식주의자 — 한강</div>
                    </div>
                </div>
            </section>

            {/* feature */}
            <section className='home-features'>
                <div className='features-header'>
                    <div className='home-features-title'>FEATURES</div>
                    <h2 className='home-features-title_desc'>
                        책과 사람을 잇는<br/>
                        <em>모든 것</em>
                    </h2>
                </div>
                <div className='feature-body'>
                    {columns.map((c) => (
                            <div key={c.title} className='feature-card'>
                                <span className='feature-num'>{c.num}</span>
                                <span className='feature-emoji'>{c.emoji}</span>
                                <div className='feature-title'>{c.title}</div>
                                <div className='feature-desc'>{c.desc}</div>
                            </div>
                    ))}
                </div>
            </section>

            {/* preview */}
            <section className='home-preview'>
                <div className='preview-header'>
                    <div className='preview-title'>PREVIEW</div>
                    <h2 className='preview-title_desc'>
                        내 서재를<br/>
                        <em>직접 만들어보세요</em>
                    </h2>
                </div>

                <div className='preview-tab'>
                    {tabs.map((t) => (
                        <button
                            key={t}
                            className={clsx('preview-tab_btn', {'preview-tab_btn--active': tab === t})}
                            onClick={() => setTab(t)}
                        >
                            {t}
                        </button>
                    ))}
                </div>
                <div className='preview-content'>
                    <div className='preview-item-list'>
                        {dummyList.map((i) => (
                            <div key={i.title} className='preview-item-card'>
                                <div className='item_cover'>{i.cover}</div>
                                    <div className='item_info'>
                                        <div className='item_info_title'>{i.title}</div>
                                        <div className='item_info_author'>{i.author}</div>
                                        <div className='item_info_stars'>{i.stars}</div>
                                    </div>
                                <div className='item_date'>{i.date}</div>
                            </div>
                        ))}
                    </div>

                    <div className='preview-desc'>
                        <h3 className='desc-title'>
                            나만의 독서 기록을<br/>
                            캘린더로 한눈에
                        </h3>
                        <p className='desc-title_desc'>읽은 책, 읽고 있는 책, 읽고 싶은 책을 한곳에 기록하세요. 월별 독서 현황을 캘린더로 시각화하고, 독서 노트와 별점을 남길 수 있습니다.</p>
                        <ul className='desc-list'>
                            <li>로그인 후 나만의 서재 관리</li>
                            <li>별점 · 독서 노트 · 한 줄 감상</li>
                            <li>월별 / 장르별 독서 통계</li>
                            <li>친구와 서재 공유 기능</li>
                            <li>읽고 싶은 책 위시리스트</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className='home-community'>
                <div className='community-header'>
                    <div className='community-title'>COMMUNITY</div>
                    <h2 className='community-title_desc'>
                        연결되는 공간,<br/>
                        <em>열린 이야기</em>
                    </h2>
                </div>
                <div className='comm-grid'>
                    <div className='comm-card featured'>
                        <div className='comm-badge badge-author'>작가 전용</div>
                        <h3 className='comm-title title-author'>
                            인증 작가만 입장 가능한<br/>
                            창작자들의 라운지
                        </h3>
                        <p className='comm-desc title_desc'>출판 계약, 창작의 고민, 편집자와의 이야기, 그리고 동료 작가와의 연대. 이 공간에서만 나눌 수 있는 솔직한 이야기들이 있습니다.</p>
                        <div className='comm-meta'>
                            <div className='meta-avatar'></div>
                            <div className='meta-info'>현재 온라인 작가 12명</div>
                        </div>
                    </div>
                    <div className='comm-card'>
                        <div className='comm-badge badge-book'>독서 모임</div>
                        <h3 className='comm-title'>
                            3월 한강 작가<br/>
                            작품 읽기 모임
                        </h3>
                        <div className='comm-desc'>서울 마포구 · 12명 참여 중</div>
                    </div>
                    <div className='comm-card'>
                        <div className='comm-badge badge-festival'>행사 알림</div>
                        <h3 className='comm-title'>
                            2025 서울국제<br/>
                            도서전 안내
                        </h3>
                        <div className='comm-desc'>5월 14-18일 · COEX</div>
                    </div>
                    <div className='comm-card'>
                        <div className='comm-badge badge-publisher'>출판사</div>
                        <h3 className='comm-title'>
                            민음사 채용 공고<br/>
                            편집자 모집
                        </h3>
                        <div className='comm-desc'>경력 2년 이상 · 상시 모집</div>
                    </div>
                    <div className='comm-card'>
                        <div className='comm-badge badge-author_ch'>작가 채널</div>
                        <h3 className='comm-title'>
                            정세랑 작가의<br/>
                            신작 발간 후기
                        </h3>
                        <div className='comm-desc'>독자 여러분께 전하는 이야기</div>
                    </div>
                </div>
            </section>

            <section className='home-authors'>
                <div className='authors-header'>
                    <div className='authors-title'>AUTHORS</div>
                    <h2 className='authors-title_desc'>함께하는 <em>작가들</em></h2>
                </div>
                <div className='authors-list'>
                    {authorsList.map((l) => (
                        <div key={l.author} className='author-item'>
                            <div className={clsx('author-avatar', l.color)}>{l.emoji}</div>
                            <div className='author-name'>{l.author}</div>
                            <div className='author-genre'>{l.genre}</div>
                            <div className='author-follower'>{l.follower}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className='home-start'>
                <div className='start-title'>지금 바로 시작하세요</div>
                <p className='start-title_desc'>
                    책을 좋아하는 모든 분들을 환영합니다.<br/>
                    독자든, 작가든, 출판사든 — 이 공간은 여러분의 것입니다.
                </p>
                <div className='start-buttons'>
                    <button className='btn-gold'>무료 회원가입</button>
                    <button className='btn-outline-light'>기능 더 알아보기</button>
                </div>
            </section>
        </section>
    )
}