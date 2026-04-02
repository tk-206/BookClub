import clsx from 'clsx'
import 'pages/css/author/AuthorChannel.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

type TabFilter = '게시글' | '도서' | '이벤트' | '소개'

export default function AuthorChannel() {
    const navigate = useNavigate()  
    const [tabFilter, setTabFilter] = useState<TabFilter>('게시글')

    let content
    if(tabFilter === '게시글') {
        content = (
            <div id="ch-posts">
                    <div className="post-feed">

                    <div className="ch-post pinned">
                        <div className="ch-post-type">📌 공지</div>
                        <div className="ch-post-title">팬 여러분께 — 노벨상 수상 1주년을 맞아</div>
                        <div className="ch-post-preview">1년 전 그날을 아직도 생생하게 기억합니다. 스톡홀름에서 돌아온 뒤에도 한동안 모든 것이 꿈처럼 느껴졌어요. 독자 여러분의 응원과 편지들이 제가 다시 책상에 앉을 수 있게 해주었습니다. 진심으로 감사합니다...</div>
                        <div className="ch-post-footer">
                            <span className="ch-post-date">2025.03.10</span>
                            <div className="ch-post-stats">
                                <div className="ch-stat">❤️ 1,284</div>
                                <div className="ch-stat">💬 247</div>
                                <div className="ch-stat">🔖 892</div>
                            </div>
                        </div>
                    </div>

                    <div className="ch-post">
                        <div className="ch-post-type">✦ 창작 노트</div>
                        <div className="ch-post-title">새 장편을 쓰면서 — 겨울과 봄 사이의 언어들</div>
                        <div className="ch-post-preview">지금 쓰고 있는 소설의 배경은 1980년대입니다. 그 시절의 언어를 다시 찾는 일이 생각보다 훨씬 어렵고, 또 훨씬 아름답습니다. 당시 신문 기사와 일기장들을 뒤지면서, 우리가 잃어버린 어떤 감각의 층위들을 발견합니다...</div>
                        <div className="ch-post-footer">
                            <span className="ch-post-date">2025.03.05</span>
                            <div className="ch-post-stats">
                                <div className="ch-stat">❤️ 487</div>
                                <div className="ch-stat">💬 63</div>
                                <div className="ch-stat">🔖 341</div>
                            </div>
                        </div>
                    </div>

                    <div className="ch-post short">
                        <div className="ch-post-type">💬 짧은 생각</div>
                        <div className="ch-post-short-content">오늘 인터뷰에서 이런 질문을 받았습니다. <span className="highlight">"작가님은 왜 그토록 고통을 씁니까?"</span><br/><br/>잠시 생각하다가 이렇게 답했습니다. "고통을 쓰는 게 아니라, 고통 속에서도 살아가는 것을 씁니다. 그것이 문학이 할 수 있는 가장 정직한 일이라고 믿기 때문입니다."</div>
                        <div className="ch-post-footer">
                            <span className="ch-post-date">2025.02.28</span>
                            <div className="ch-post-stats">
                                <div className="ch-stat">❤️ 2,104</div>
                                <div className="ch-stat">💬 189</div>
                                <div className="ch-stat">🔖 1,437</div>
                            </div>
                        </div>
                    </div>

                    <div className="ch-post">
                        <div className="ch-post-type">📷 현장</div>
                        <div className="ch-post-title">파리 북 페어 현장 — 한국 문학의 뜨거운 관심</div>
                        <div className="ch-post-photo-grid">
                            <div className="photo-placeholder" style={{background:"linear-gradient(135deg,#1A2744,#243461)"}}>🏛️</div>
                            <div className="photo-placeholder" style={{background:"linear-gradient(135deg,#C4746E,#D4877E)"}}>📚</div>
                        </div>
                        <div className="ch-post-preview">지난주 파리에서 돌아왔습니다. 프랑스 독자들의 열기가 정말 놀라웠어요. 『소년이 온다』 불어 번역본을 들고 온 독자가 사인회 줄에서 세 시간을 기다렸더군요...</div>
                        <div className="ch-post-footer">
                            <span className="ch-post-date">2025.02.20</span>
                            <div className="ch-post-stats">
                                <div className="ch-stat">❤️ 893</div>
                                <div className="ch-stat">💬 102</div>
                                <div className="ch-stat">🔖 445</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else if(tabFilter === '도서') {
        content = (
            <div className="ch-books">
                <div className="books-grid">
                    <div className="book-item">
                        <div className="book-cover brown">
                            <div className="book-spine"></div>
                        </div>
                        <div className="book-label">채식주의자</div>
                        <div className="book-meta">창비 · 2007</div>
                    </div>
                    <div className="book-item">
                        <div className="book-cover brown" style={{background:'linear-gradient(135deg,#6B8C7B,#7DA08E)'}}>
                            <div className="book-spine"></div>
                        </div>
                        <div className="book-label">소년이 온다</div>
                        <div className="book-meta">창비 · 2014</div>
                    </div>
                    <div className="book-item">
                        <div className="book-cover brown" style={{background:'linear-gradient(135deg,#C4746E,#D4877E)'}}>
                            <div className="book-spine"></div>
                        </div>
                        <div className="book-label">흰</div>
                        <div className="book-meta">문학동네 · 2016</div>
                    </div>
                    <div className="book-item">
                        <div className="book-cover brown" style={{background:'linear-gradient(135deg,#4A6741,#5B7D52)'}}>
                            <div className="book-spine"></div>
                        </div>
                        <div className="book-label">작별하지 않는다</div>
                        <div className="book-meta">문학동네 · 2021</div>
                    </div>
                </div>
            </div>
        )
    }
    else if (tabFilter === '이벤트') {
        content = (
            <div className="ch-events">
                <div className="events-list">
                    <div className="event-item">
                        <div className="event-date">
                            <div className="event-month">APR</div>
                            <div className="event-day">05</div>
                        </div>
                        <div className="event-info">
                            <div className="event-title">낭독회 — 새 장편 일부 낭독</div>
                            <div className="event-location">📍 교보문고 광화문점 · 오후 3시</div>
                        </div>
                        <div className="event-dday dday-red">D-5</div>
                    </div>
                    <div className="event-item">
                        <div className="event-date">
                            <div className="event-month">MAY</div>
                            <div className="event-day">16</div>
                        </div>
                        <div className="event-info">
                            <div className="event-title">서울국제도서전 북토크</div>
                            <div className="event-location">📍 COEX 행사장 메인홀 · 오후 2시</div>
                        </div>
                        <div className="event-dday">D-46</div>
                    </div>
                </div>
            </div>
        )
    }
    else if (tabFilter === '소개') {
        content = (
            <div className="ch-about">
                <div className="about-box">
                    <div className="about-title">작가 소개</div>
                    <div className="about-text">
                        1970년 광주 출생. 연세대학교 국어국문학과 졸업. 1993년 『문학과 사회』에 시를 발표하며 등단.
                        소설, 시, 에세이를 아우르는 작업을 해왔으며, 특히 인간의 취약함과 아름다움, 역사적 폭력과 개인적 치유의 교차를 탐구하는 작품으로 널리 알려져 있습니다.
                        <br /><br />
                        2016년 장편소설 『채식주의자』로 맨부커 국제상을 수상했으며, 2024년 노벨문학상을 수상하며 한국 문학 최초의 노벨상 수상 작가가 되었습니다.
                    </div>
                </div>
                <div className="about-box">
                    <div className="about-title">수상 이력</div>
                    <div className="awards-list">
                        <div className="award-item">
                            <span className="award-icon">🏆</span>
                            <div>
                            <div className="award-name">노벨문학상</div>
                            <div className="award-desc">2024 · 스웨덴 한림원</div>
                            </div>
                        </div>
                        <div className="award-item">
                            <span className="award-icon">🥇</span>
                            <div>
                                <div className="award-name">맨부커 국제상</div>
                                <div className="award-desc">2016 · 채식주의자</div>
                            </div>
                        </div>
                        <div className="award-item">
                            <span className="award-icon">🏅</span>
                            <div>
                                <div className="award-name">이탈리아 말라파르테 문학상</div>
                                <div className="award-desc">2017 · 소년이 온다</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section className='author-channel'>
            <div className="channel-hero">
                <div className="channel-hero-bg"></div>
                <div className="channel-hero-inner">
                    <button className="back-btn" onClick={() => navigate(-1)}>← 작가 목록으로</button>
                    <div className="channel-profile">
                    <div className="channel-avatar" style={{background:'linear-gradient(135deg,#1A2744,#243461)'}}>✍️</div>
                    <div className="channel-info">
                        <div className="channel-verified">인증 작가 · 노벨문학상 2024</div>
                        <div className="channel-name">한강</div>
                        <div className="channel-genre">소설 · 시 · 노벨문학상</div>
                        <div className="channel-bio-short">1970년 광주 출생. 인간의 취약함과 아름다움, 폭력과 치유를 탐구하는 작가.</div>
                        <div className="channel-stats-bar">
                        <div><div className="csb-num">4,218</div><div className="csb-label">팔로워</div></div>
                        <div><div className="csb-num">38</div><div className="csb-label">게시글</div></div>
                        <div><div className="csb-num">12</div><div className="csb-label">이벤트</div></div>
                        <div><div className="csb-num">9</div><div className="csb-label">등록 도서</div></div>
                        </div>
                    </div>
                    <div className="channel-actions">
                        <button className="btn-follow-ch" id="ch-follow-btn" >+ 팔로우</button>
                        <button className="btn-msg">✉ 메시지</button>
                    </div>
                    </div>
                    <div className="channel-tabs">
                        <button className={clsx('ctab', {active: tabFilter === '게시글'})} onClick={() => setTabFilter('게시글')}>게시글</button>
                        <button className={clsx('ctab', {active: tabFilter === '도서'})} onClick={() => setTabFilter('도서')}>도서</button>
                        <button className={clsx('ctab', {active: tabFilter === '이벤트'})} onClick={() => setTabFilter('이벤트')}>이벤트</button>
                        <button className={clsx('ctab', {active: tabFilter === '소개'})} onClick={() => setTabFilter('소개')}>소개</button>
                    </div>
                </div>
            </div>
            <div className="channel-body">
                <div>{content}</div>
                <div>
                    <div className="ch-widget">
                    <div className="ch-widget-title">다가오는 이벤트</div>
                    <div className="upcoming-event">
                        <div className="event-date-box"><div className="edb-m">APR</div><div className="edb-d">05</div></div>
                        <div><div className="ev-title">낭독회 — 새 장편 일부 낭독</div><div className="ev-place">📍 교보문고 광화문점</div></div>
                    </div>
                    <div className="upcoming-event">
                        <div className="event-date-box"><div className="edb-m">MAY</div><div className="edb-d">16</div></div>
                        <div><div className="ev-title">서울국제도서전 북토크</div><div className="ev-place">📍 COEX 메인홀</div></div>
                    </div>
                </div>

                <div className="ch-widget">
                    <div className="ch-widget-title">대표 도서</div>
                        <div className="book-list-widget">
                            <div className="blw-item">
                            <div className="blw-cover" style={{background:"linear-gradient(135deg,#1A3A5C,#243461)"}}></div>
                            <div><div className="blw-title">채식주의자</div><div className="blw-year">창비 · 2007</div></div>
                            </div>
                            <div className="blw-item">
                            <div className="blw-cover" style={{background:"linear-gradient(135deg,#6B8C7B,#7DA08E)"}}></div>
                            <div><div className="blw-title">소년이 온다</div><div className="blw-year">창비 · 2014</div></div>
                            </div>
                            <div className="blw-item">
                            <div className="blw-cover" style={{background:"linear-gradient(135deg,#C4746E,#D4877E)"}}></div>
                            <div><div className="blw-title">흰</div><div className="blw-year">문학동네 · 2016</div></div>
                            </div>
                            <div className="blw-item">
                            <div className="blw-cover" style={{background:"linear-gradient(135deg,#4A6741,#5B7D52)"}}></div>
                            <div><div className="blw-title">작별하지 않는다</div><div className="blw-year">문학동네 · 2021</div></div>
                        </div>
                    </div>
                </div>

                <div className="ch-widget">
                    <div className="ch-widget-title">수상 이력</div>
                    <div className="award-item"><div className="award-icon">🏆</div><div><div className="award-name">노벨문학상</div><div className="award-year">2024</div></div></div>
                    <div className="award-item"><div className="award-icon">🥇</div><div><div className="award-name">맨부커 국제상</div><div className="award-year">2016</div></div></div>
                    <div className="award-item"><div className="award-icon">🏅</div><div><div className="award-name">말라파르테 문학상</div><div className="award-year">2017</div></div></div>
                </div>
                </div>
            </div>
        </section>
    )
}