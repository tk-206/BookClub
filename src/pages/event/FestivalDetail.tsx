import 'pages/css/event/FestivalDetail.css'
import { useNavigate } from 'react-router-dom'

export default function FestivalDetail() {
    const navigate = useNavigate()

    return (
        <div id="view-detail">
            <div className="detail-page">
                <div className="detail-hero">
                <div className="detail-hero-bg"></div>
                <div className="detail-hero-inner">
                    <div>
                    <button className="back-btn" onClick={() => navigate(-1)}>← 행사 목록으로</button>
                    <div className="detail-event-type">낭독회</div>
                    <div className="detail-title">한강 작가 낭독회<br/>— 새 장편 일부 공개</div>
                    <div className="detail-subtitle">신작 장편의 일부를 작가가 직접 낭독하는 특별한 자리입니다. 낭독 후 독자와의 짧은 Q&amp;A 시간도 마련되어 있어요.</div>
                    <div className="detail-info-chips">
                        <div className="d-chip">📍 교보문고 광화문점 B1</div>
                        <div className="d-chip">🕐 오후 3:00 — 5:00</div>
                        <div className="d-chip">🎟 무료 (사전 예약)</div>
                        <div className="d-chip">👤 선착순 120명</div>
                    </div>
                    </div>
                    <div className="detail-date-block">
                    <div className="ddb-month">APR</div>
                    <div className="ddb-day">05</div>
                    <div className="ddb-year">2025</div>
                    <div className="ddb-dday">D-3</div>
                    </div>
                </div>
                </div>

                <div className="detail-body">
                <div className="detail-main">

                    <div className="detail-section">
                    <div className="detail-section-title">📋 행사 소개</div>
                    <div className="detail-text">한강 작가의 신작 장편 일부를 작가가 직접 낭독하는 특별한 자리입니다. 약 40분간의 낭독과 함께, 작가가 이번 작품을 쓰게 된 계기와 창작 과정에 대해 직접 이야기합니다.<br/><br/>낭독 후에는 참석자들과의 짧은 Q&amp;A 세션이 진행되며, 행사 종료 후 선착순 30명을 대상으로 간단한 사인 시간이 마련됩니다. 사인을 원하시는 분은 당일 교보문고에서 도서를 구매하시거나 기존 소장 도서를 지참해 주세요.</div>
                    </div>

                    <div className="detail-section">
                    <div className="detail-section-title">🗓 프로그램</div>
                    <div className="program-table">
                        <div className="program-row">
                        <div className="program-time">14:30</div>
                        <div className="program-content"><div className="program-name">입장 및 착석</div><div className="program-detail">예약 확인 후 입장</div></div>
                        </div>
                        <div className="program-row highlight">
                        <div className="program-time">15:00</div>
                        <div className="program-content"><div className="program-name">낭독 — 신작 장편 1·2장</div><div className="program-detail">약 40분 · 한강 작가 직접 낭독</div></div>
                        </div>
                        <div className="program-row">
                        <div className="program-time">15:45</div>
                        <div className="program-content"><div className="program-name">작가와의 대화</div><div className="program-detail">창작 배경 및 Q&amp;A · 약 30분</div></div>
                        </div>
                        <div className="program-row highlight">
                        <div className="program-time">16:20</div>
                        <div className="program-content"><div className="program-name">사인회 (선착순 30명)</div><div className="program-detail">교보문고 구매 또는 소장 도서 지참</div></div>
                        </div>
                        <div className="program-row">
                        <div className="program-time">17:00</div>
                        <div className="program-content"><div className="program-name">행사 종료</div><div className="program-detail"></div></div>
                        </div>
                    </div>
                    </div>

                    <div className="detail-section">
                    <div className="detail-section-title">🎤 참여 작가</div>
                    <div className="speakers-grid">
                        <div className="speaker-card">
                        <div className="speaker-avatar" style={{background:"linear-gradient(135deg,#1A2744,#243461)"}}>✍️</div>
                        <div className="speaker-name">한강</div>
                        <div className="speaker-role">소설가 · 노벨문학상 2024</div>
                        </div>
                    </div>
                    </div>

                    <div className="detail-section">
                    <div className="detail-section-title">📌 유의사항</div>
                    <div className="detail-text">• 행사 당일 예약 확인 화면(문자/이메일)을 반드시 지참해 주세요.<br/>• 사진 촬영은 낭독 시작 전까지만 허용됩니다.<br/>• 5분 이상 지각 시 입장이 제한될 수 있습니다.<br/>• 예약 취소는 행사 3일 전까지 가능합니다.</div>
                    </div>
                </div>

                {/* <!-- Sidebar --> */}
                <div className="detail-sidebar">
                    <div className="sidebar-card">
                    <div className="sc-title">예약 정보</div>
                    <div className="seats-visual">
                        <div className="seats-label-row"><span>잔여 좌석</span><span style={{color:"var(--rose)", fontWeight:"500"}}>15 / 120</span></div>
                        <div className="seats-track"><div className="seats-filled" style={{width:"88%"}}></div></div>
                        <div className="seats-status">마감 임박 · 서두르세요!</div>
                    </div>
                    <div className="sc-row"><span className="sc-key">일시</span><span className="sc-val">4월 5일 (토) 오후 3시</span></div>
                    <div className="sc-row"><span className="sc-key">장소</span><span className="sc-val">교보문고 광화문점</span></div>
                    <div className="sc-row"><span className="sc-key">참가비</span><span className="sc-val">무료</span></div>
                    <div className="sc-row"><span className="sc-key">정원</span><span className="sc-val">120명</span></div>
                    <button className="btn-register" id="reg-btn">지금 예약하기</button>
                    <button className="btn-save-event">🔔 알림 설정</button>
                    </div>

                    <div className="sidebar-card">
                    <div className="sc-title">주최 정보</div>
                    <div className="sc-row"><span className="sc-key">주최</span><span className="sc-val">교보문고</span></div>
                    <div className="sc-row"><span className="sc-key">주관</span><span className="sc-val">창비</span></div>
                    <div className="sc-row"><span className="sc-key">문의</span><span className="sc-val" style={{color:"var(--gold)"}}>02-1234-5678</span></div>
                    </div>

                    <div className="sidebar-card">
                    <div className="sc-title">관련 행사</div>
                    <div className="related-event">
                        <div className="re-date"><div className="re-m">APR</div><div className="re-d">10</div></div>
                        <div><div className="re-title">정세랑 북토크</div><div className="re-type">북토크 · 문학동네 카페</div></div>
                    </div>
                    <div className="related-event">
                        <div className="re-date"><div className="re-m">APR</div><div className="re-d">23</div></div>
                        <div><div className="re-title">손원평 사인회</div><div className="re-type">사인회 · 알라딘 홍대점</div></div>
                    </div>
                    <div className="related-event">
                        <div className="re-date"><div className="re-m">MAY</div><div className="re-d">14</div></div>
                        <div><div className="re-title">서울국제도서전</div><div className="re-type">도서전 · COEX</div></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
    )
}