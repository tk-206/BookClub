import Calendar from "../../../components/Calendar"
import { useNavigate } from "react-router-dom"
import './FestivalCalendar.css'

export default function FestivalCalendar() {
    const navigate = useNavigate()

    return (
        <section>
            <div className="cal-header-bar">
                <div className="cal-header-inner">
                    <div className="cal-title-area">
                        <div className="cal-eyebrow">Calendar View</div>
                        <div className="cal-title-h">행사 캘린더</div>
                    </div>
                        <button className="cal-back-btn" onClick={() => navigate(-1)}>← 목록으로</button>
                </div>
            </div>
            <div className="calendar-body">
                <div>
                    <Calendar />
                </div>
                <div className="cal-sidebar">
                    <div className="cal-widget">
                        <div className="cal-widget-title">이달의 행사</div>
                        <div className="upcoming-list-item">
                            <div className="uli-date"><div className="uli-m">APR</div><div className="uli-d">5</div></div>
                            <div><div className="uli-title">한강 낭독회</div><div className="uli-where">📍 교보문고 광화문점</div></div>
                        </div>
                        <div className="upcoming-list-item">
                            <div className="uli-date"><div className="uli-m">APR</div><div className="uli-d">10</div></div>
                            <div><div className="uli-title">정세랑 북토크</div><div className="uli-where">📍 문학동네 북카페</div></div>
                        </div>
                        <div className="upcoming-list-item">
                            <div className="uli-date"><div className="uli-m">APR</div><div className="uli-d">17</div></div>
                            <div><div className="uli-title">북클럽 온라인 모임</div><div className="uli-where">🌐 Zoom</div></div>
                        </div>
                        <div className="upcoming-list-item">
                            <div className="uli-date"><div className="uli-m">APR</div><div className="uli-d">23</div></div>
                            <div><div className="uli-title">손원평 사인회</div><div className="uli-where">📍 알라딘 홍대점</div></div>
                        </div>
                        <div className="upcoming-list-item">
                            <div className="uli-date"><div className="uli-m">APR</div><div className="uli-d">28</div></div>
                            <div><div className="uli-title">김영하 강연</div><div className="uli-where">📍 세종문화회관</div></div>
                        </div>
                    </div>
                    <div className="cal-widget">
                        <div className="cal-widget-title">행사 유형</div>
                        <div className="legend-item"><div className="legend-dot" style={{background:"#6B8C7B"}}></div>낭독회</div>
                        <div className="legend-item"><div className="legend-dot" style={{background:"#1A2744"}}></div>북토크</div>
                        <div className="legend-item"><div className="legend-dot" style={{background:"#C4746E"}}></div>사인회</div>
                        <div className="legend-item"><div className="legend-dot" style={{background:"#5a3ca0"}}></div>강연</div>
                        <div className="legend-item"><div className="legend-dot" style={{background:"#3c78b4"}}></div>온라인</div>
                        <div className="legend-item"><div className="legend-dot" style={{background:"#C9A84C"}}></div>도서전·박람회</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

    
