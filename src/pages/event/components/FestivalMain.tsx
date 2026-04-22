import { useNavigate } from "react-router-dom"
import './FestivalMain.css'
import { useState } from "react"
import EmptyState from "../../../components/EmptyState"

export default function FestivalMain() {
    const navigate = useNavigate()
    const [event, setEvent] = useState([])

    let festivalRow
    if(event.length === 0) {
        festivalRow = (
            <div className="cs-item">
                <div className="cs-event-name">🚧 준비 중 🚧</div>
            </div>
        )
    }
    else {
        festivalRow = (
            <div>
                <div className="cs-item" onClick={() => navigate('상세')}>
                    <div className="cs-dday soon">D-3</div>
                    <div>
                        <div className="cs-event-name">한강 낭독회</div>
                        <div className="cs-event-date">4월 5일 · 교보문고</div>
                    </div>
                </div>

                <div className="cs-item">
                    <div className="cs-dday soon">D-8</div>
                    <div>
                        <div className="cs-event-name">정세랑 북토크</div>
                        <div className="cs-event-date">4월 10일 · 문학동네 카페</div>
                    </div>
                </div>

                <div className="cs-item">
                    <div className="cs-dday upcoming">D-15</div>
                    <div>
                        <div className="cs-event-name">독서모임 3월 정기모임</div>
                        <div className="cs-event-date">4월 17일 · 온라인</div>
                    </div>
                </div>

                <div className="cs-item">
                    <div className="cs-dday upcoming">D-21</div>
                    <div>
                        <div className="cs-event-name">손원평 사인회</div>
                        <div className="cs-event-date">4월 23일 · 알라딘 홍대점</div>
                    </div>
                </div>

                <div className="cs-item">
                    <div className="cs-dday upcoming">D-42</div>
                    <div>
                        <div className="cs-event-name">서울국제도서전</div>
                        <div className="cs-event-date">5월 14일 · COEX</div>
                    </div>
                </div>
            </div>
        )
    }

    let festivalMain
    if(event.length === 0) {
        festivalMain = (
            <EmptyState type="events"/>
        )
    }
    else {
        festivalMain = (
            <div>
                <div className="events-grid">
                        <div className="ec tall" /* onclick="showDetail()" */>
                        <div className="dday-badge soon">D-3</div>
                        <div className="ec-type t-reading">낭독회</div>
                        <div className="ec-date-display">
                            <div className="ec-month">APR</div>
                            <div className="ec-day">05</div>
                        </div>
                        <div className="ec-title">한강 작가 낭독회 — 새 장편 일부 공개</div>
                        <div className="ec-meta">
                            <div className="ec-meta-row">📍 교보문고 광화문점 B1 이벤트홀</div>
                            <div className="ec-meta-row">🕐 오후 3:00 — 5:00</div>
                            <div className="ec-meta-row">🎟 무료 (사전 예약 필수)</div>
                        </div>
                        <div className="ec-desc">신작 장편의 일부를 작가가 직접 낭독하는 특별한 자리. 낭독 후 독자와의 짧은 Q&amp;A 시간도 마련되어 있습니다. 선착순 120명.</div>
                        <div className="ec-footer">
                            <div className="ec-seats">
                            <div className="seats-bar"><div className="seats-fill" style={{width:"88%"}}></div></div>
                            잔여 15석
                            </div>
                            <button className="btn-ec">예약하기</button>
                        </div>
                        </div>

                        {/* <!-- Regular cards --> */}
                        <div className="ec" /* onclick="showDetail()" */>
                        <div className="dday-badge soon">D-8</div>
                        <div className="ec-type t-talk">북토크</div>
                        <div className="ec-date-display">
                            <div className="ec-month">APR</div>
                            <div className="ec-day">10</div>
                        </div>
                        <div className="ec-title">정세랑 × 독자 북토크 — 『시선으로부터』</div>
                        <div className="ec-meta">
                            <div className="ec-meta-row">📍 문학동네 북카페</div>
                            <div className="ec-meta-row">🕐 오후 7:00</div>
                        </div>
                        <div className="ec-footer">
                            <div className="ec-seats">
                            <div className="seats-bar"><div className="seats-fill" style={{width:"60%"}}></div></div>
                            잔여 32석
                            </div>
                            <button className="btn-ec">예약하기</button>
                        </div>
                        </div>

                        <div className="ec dark" /* onclick="showDetail()" */>
                        <div className="dday-badge upcoming" style={{color:"var(--gold-2)"}}>D-15</div>
                        <div className="ec-type t-online">온라인</div>
                        <div className="ec-date-display">
                            <div className="ec-month">APR</div>
                            <div className="ec-day">17</div>
                        </div>
                        <div className="ec-title">북클럽 4월 독서모임 — 온라인 화상 진행</div>
                        <div className="ec-meta">
                            <div className="ec-meta-row">🌐 Zoom (링크 발송)</div>
                            <div className="ec-meta-row">🕐 오후 8:00</div>
                        </div>
                        <div className="ec-footer">
                            <div className="ec-seats"><span style={{color:"rgba(255,255,255,.4)", fontSize:".68rem"}}>참여 18/30명</span></div>
                            <button className="btn-ec">참여하기</button>
                        </div>
                        </div>

                        <div className="ec wide" /* onclick="showDetail()" */>
                        <div className="dday-badge upcoming">D-21</div>
                        <div className="ec-type t-sign">사인회</div>
                        <div className="ec-date-display">
                            <div className="ec-month">APR</div>
                            <div className="ec-day">23</div>
                        </div>
                        <div className="ec-title">손원평 작가 사인회 — 신작 『아직 끝나지 않았어』 출간 기념</div>
                        <div className="ec-meta" style={{flexDirection:"row", flexWrap:"wrap", gap:".75rem"}}>
                            <div className="ec-meta-row">📍 알라딘 홍대점</div>
                            <div className="ec-meta-row">🕐 오후 2:00 — 4:00</div>
                            <div className="ec-meta-row">🎟 도서 구매 필수</div>
                        </div>
                        <div className="ec-footer">
                            <div className="ec-seats">
                            <div className="seats-bar" style={{width:"80px"}}><div className="seats-fill" style={{width:"45%"}}></div></div>
                            잔여 55명
                            </div>
                            <button className="btn-ec">신청하기</button>
                        </div>
                        </div>

                        <div className="ec" /* onclick="showDetail()" */>
                        <div className="ec-type t-lecture">강연</div>
                        <div className="ec-date-display">
                            <div className="ec-month">APR</div>
                            <div className="ec-day">28</div>
                        </div>
                        <div className="ec-title">김영하 강연 — 소설가로 산다는 것</div>
                        <div className="ec-meta">
                            <div className="ec-meta-row">📍 세종문화회관 소강당</div>
                            <div className="ec-meta-row">🕐 오후 4:00</div>
                        </div>
                        <div className="ec-footer">
                            <div className="ec-seats">
                            <div className="seats-bar"><div className="seats-fill" style={{width:"75%"}}></div></div>
                            잔여 62석
                            </div>
                            <button className="btn-ec">예매하기</button>
                        </div>
                        </div>
                </div>
            </div>
        )
    }

    return (
        <div className="events-main">
            {/* Hero */}
            <div className="events-hero">
                <div className="hero-left-panel">
                    <div>
                        <div className="hero-eyebrow">Events & Festival</div>

                        <h1 className="hero-h1">
                        책이 살아있는<br /><em>순간들</em>
                        </h1>

                        <p className="hero-desc">
                        낭독회, 북토크, 사인회, 도서전까지. 작가와 독자가 직접 만나는 모든 문학 행사를 한 곳에서 만나보세요.
                        </p>

                        <div className="hero-cta-row">
                            <button className="btn-view-cal" onClick={() => navigate('캘린더')}>
                                📅 캘린더 뷰
                            </button>

                            <button className="btn-notify">
                                🔔 알림 설정
                                {/* onClick={() => openNotify()} */}
                            </button>
                        </div>
                    </div>

                    <div className="hero-stats-row">
                        <div>
                            <div className="hs-num">28</div>
                            <div className="hs-label">이달의 행사</div>
                        </div>
                        <div>
                            <div className="hs-num">12</div>
                            <div className="hs-label">D-7 이내</div>
                        </div>
                        <div>
                            <div className="hs-num">6</div>
                            <div className="hs-label">온라인 행사</div>
                        </div>
                    </div>
                </div>

                {/* Featured */}
                <div className="hero-right-panel">
                    <div className="fe-type-badge">✦ 이달의 주요 행사</div>
                    <div className="fe-tag">서울국제도서전</div>

                    <div className="fe-date-block">
                        <div>
                            <div className="fe-month">MAY</div>
                            <div className="fe-day">14</div>
                        </div>

                        <div className="fe-divider">–</div>

                        <div>
                            <div className="fe-month">MAY</div>
                            <div className="fe-day">18</div>
                        </div>
                    </div>

                    <div className="fe-title">2025 서울국제도서전</div>

                    <div className="fe-meta">
                        <div className="fe-meta-row">📍 COEX 전시홀 A·B·C</div>
                        <div className="fe-meta-row">🕐 오전 10시 — 오후 7시</div>
                        <div className="fe-meta-row">🎟 무료 입장 (사전 등록 권장)</div>
                    </div>

                    <button className="btn-fe-detail">
                        행사 상세 보기 →
                        {/* onClick={() => showDetail()} */}
                    </button>
                </div>
            </div>

            {/* Countdown */}
            <div className="countdown-strip">
                <div className="cs-label">다가오는 행사</div>
                {festivalRow}
            </div>

            {/* Controls */}
            <div className="list-controls">
                <div className="filter-tabs">
                    <button className="ftab active">전체</button>
                    <button className="ftab">낭독회</button>
                    <button className="ftab">북토크</button>
                    <button className="ftab">사인회</button>
                </div>

                <div className="right-controls">
                    <div className="search-wrap">
                        <span>🔍</span>
                        <input type="text" placeholder="행사 검색..." />
                    </div>

                    <div className="view-toggle">
                        <button className="vt-btn active">⊞</button>
                        <button className="vt-btn">☰</button>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="events-content">
                <div className="section-eyebrow">4월 행사</div>
                {festivalMain}
            </div>
        </div>
    )
}