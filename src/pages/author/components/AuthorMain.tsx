import 'pages/css/author/AuthorMain.css'
import { useState } from 'react'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'

type TabFilter = '전체' | '소설' | '시' | 'SF·장르' | '에세이' | '신규 작가'

export default function AuthorMain() {
    const navigate = useNavigate() 
    const [filter, setFilter] = useState<TabFilter>('전체')
    const tabList = ['전체', '소설', '시', 'SF·장르', '에세이', '신규 작가'] as const

    return (
        <section className="author-main">
                <div className="aut-header">
                    <div className='aut-layout'>
                        {/* LEFT */}
                        <div className='aut-layout-left'>
                            <div className="aut-header-label">AUTHORS CHANNEL</div>
                            <h1 className="aut-header-title">
                                작가와 독자가<br/>
                                직접 만나는<br/>
                                <em>공간</em>
                            </h1>
                            <div className="aut-header-desc">
                                인증된 작가님들이 직접 운영하는 채널. 신작 소식, 창작 비화, 낭독 영상까지 — 출판사를 거치지 않고 독자에게 전하는 이야기들.
                            </div>
                            <div className='aut-header-btn'>
                                <button className='aut-lounge-btn' onClick={() => navigate('라운지')}>✦ 작가 전용 라운지 입장</button>
                                <button className='aut-lounge-btn-ghost'>작가 인증 신청</button>
                            </div>
                        </div>
                        {/* RIGHT */}
                        <div className='aut-layout-right'>
                            <div className='aut-hot-card' onClick={() => navigate('채널')}>
                                <div className='verified-badge'>✦ 인증 작가</div>
                                <div className='fac-eyebrow'>이달의 추천 작가</div>
                                <div className='fac-identity'>
                                    <div className='fac-avatar a'>✍️</div>
                                    <div>
                                        <div className='fac-name'>한강</div>
                                        <div className='fac-genre'>소설 · 시 · 노벨문학상</div>
                                    </div>
                                </div>
                                <div className='fac-quote'>
                                    "글쓰기는 살아남기 위한 것이다. 그리고 살아남은 이들의 목소리를 전하기 위한 것이다."
                                </div>
                                <div className='fac-stats'>
                                    <div>
                                        <div className='fac-stat-num'>4.2k</div>
                                        <div className='fac-stat-label'>팔로워</div>
                                    </div>
                                    <div>
                                        <div className='fac-stat-num'>38</div>
                                        <div className='fac-stat-label'>게시글</div>
                                    </div>
                                    <div>
                                        <div className='fac-stat-num'>12</div>
                                        <div className='fac-stat-label'>이벤트</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aut-header-stats">
                        <div className="stat-item">
                            <div className="stat-num">83</div>
                            <div className="stat-text">인증 작가</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-num">1,240</div>
                            <div className="stat-text">작가 게시글</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-num">28</div>
                            <div className="stat-text">이달의 이벤트</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-num">340</div>
                            <div className="stat-text">라운지 멤버</div>
                        </div>
                </div>

                <div className='list-tab'>
                    <div className='filter-tabs'>
                        {tabList.map((l) => (
                            <button className={clsx('filter-tab', {active: l === filter})} onClick={() => setFilter(l)}>{l}</button>
                        ))}
                    </div>
                    <div className='search-wrap'>
                            <span>🔍</span>
                            <input type='text' placeholder='출판사 검색...'/>
                    </div>
                </div>
                <div className="authors-grid-wrap">
                    <div className="section-eyebrow">주요 작가 채널</div>

                    <div className="authors-magazine">
                        <div className="ac main">
                            <div className="ac-verified">인증 작가</div>
                            <div className="ac-avatar"><div className="avatar-circle">✍️</div></div>
                            <div className="ac-name">한강</div>
                            <div className="ac-genre">소설 · 시 · 노벨문학상 2024</div>
                            <div className="ac-bio">1970년 광주 출생. 연세대 국문과 졸업. 1993년 등단. 인간의 취약함과 아름다움, 폭력과 치유를 탐구하는 작가. 채식주의자로 맨부커상, 소년이 온다로 이탈리아 말라파르테상 수상 후 2024년 노벨문학상을 수상했습니다.</div>
                            <div className="ac-latest">
                                <div className="ac-latest-label">최근 게시글</div>
                                <div className="ac-latest-title">수상 이후 1년 — 독자 여러분께 전하는 이야기</div>
                            </div>
                            <div className="ac-footer">
                                <div className="ac-followers"><span className="ac-followers-num">4.2k</span>&nbsp;팔로워</div>
                                <button className="btn-follow-sm">+ 팔로우</button>
                            </div>
                        </div>
                        <div className="ac dark">
                            <div className="ac-verified">인증 작가</div>
                            <div className="ac-avatar"><div className="avatar-circle">📝</div></div>
                            <div className="ac-name">정세랑</div>
                            <div className="ac-genre">소설 · SF</div>
                            <div className="ac-bio">SF와 페미니즘의 교차점에서 따뜻하고 기발한 이야기를 씁니다.</div>
                            <div className="ac-latest">
                                <div className="ac-latest-label" style={{color: 'var(--gold-2)'}}>최근 게시글</div>
                                <div className="ac-latest-title" style={{color: 'var(--ivory)'}}>새 장편 집필 근황을 공유합니다</div>
                            </div>
                            <div className="ac-footer">
                                <div className="ac-followers"><span className="ac-followers-num">3.8k</span>&nbsp;팔로워</div>
                                <button className="btn-follow-sm">+ 팔로우</button>
                            </div>
                        </div>
                        <div className="ac">
                            <div className="ac-verified">인증 작가</div>
                            <div className="ac-avatar"><div className="avatar-circle">🖊️</div></div>
                            <div className="ac-name">최은영</div>
                            <div className="ac-genre">단편소설</div>
                            <div className="ac-bio">조용하고 섬세한 언어로 사람들 사이의 온도를 기록합니다.</div>
                            <div className="ac-latest">
                                <div className="ac-latest-label">최근 게시글</div>
                                <div className="ac-latest-title">이번 봄, 새 단편집을 펴냅니다</div>
                            </div>
                            <div className="ac-footer">
                                <div className="ac-followers"><span className="ac-followers-num">2.1k</span>&nbsp;팔로워</div>
                                <button className="btn-follow-sm">+ 팔로우</button>
                            </div>
                        </div>

                        <div className="ac">
                        <div className="ac-verified">인증 작가</div>
                        <div className="ac-avatar"><div className="avatar-circle">📖</div></div>
                        <div className="ac-name">김영하</div>
                        <div className="ac-genre">소설 · 에세이</div>
                        <div className="ac-bio">날카롭고 건조한 문체로 현대인의 고독을 해부합니다.</div>
                        <div className="ac-footer">
                            <div className="ac-followers"><span className="ac-followers-num">5.1k</span>&nbsp;팔로워</div>
                            <button className="btn-follow-sm">+ 팔로우</button>
                        </div>
                        </div>

                        <div className="ac">
                        <div className="ac-verified">인증 작가</div>
                        <div className="ac-avatar"><div className="avatar-circle">✒️</div></div>
                        <div className="ac-name">손원평</div>
                        <div className="ac-genre">소설</div>
                        <div className="ac-bio">감정을 잃어버린 소년에서 출발해 타인의 감정을 이야기합니다.</div>
                        <div className="ac-footer">
                            <div className="ac-followers"><span className="ac-followers-num">2.9k</span>&nbsp;팔로워</div>
                            <button className="btn-follow-sm">+ 팔로우</button>
                        </div>
                        </div>
                    </div>

                    <div className="section-eyebrow">전체 작가</div>
                    <div className="authors-rows">
                        <div className="ar" >
                        <div className="ar-avatar" style={{background: 'linear-gradient(135deg, #8B4513, #A0522D)'}}>📚</div>
                        <div><div className="ar-name">황석영</div><div className="ar-genre">소설 · 역사문학</div></div>
                        <div className="ar-right"><div className="ar-followers">팔로워 3.4k</div></div>
                        </div>
                        <div className="ar" >
                        <div className="ar-avatar" style={{background: 'linear-gradient(135deg,#2E6DA4,#3A7FBF)'}}>🌊</div>
                        <div><div className="ar-name">김혜진</div><div className="ar-genre">소설</div></div>
                        <div className="ar-right"><span className="ar-new-post">새 글</span><div className="ar-followers">팔로워 1.8k</div></div>
                        </div>
                        <div className="ar" >
                            <div className="ar-avatar" style={{background: 'linear-gradient(135deg, #3D6B4F, #4E8A64)'}}>🌿</div>
                            <div>
                                <div className="ar-name">이슬아</div>
                                <div className="ar-genre">에세이</div>
                            </div>
                            <div className="ar-right">
                                <span className="ar-new-post">새 글</span>
                                <div className="ar-followers">팔로워 2.3k</div>
                            </div>
                        </div>
                        <div className="ar" >
                            <div className="ar-avatar" style={{background: 'linear-gradient(135deg, #614385, #516395)'}}>🔮</div>
                            <div>
                                <div className="ar-name">듀나</div>
                                <div className="ar-genre">SF · 장르소설</div>
                            </div>
                            <div className="ar-right">
                                <div className="ar-followers">팔로워 1.2k</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}