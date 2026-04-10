import { useNavigate } from "react-router-dom"

export default function HomeHeader() {
    const navigate = useNavigate()

    return (
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
                    <button className='btn-large' onClick={() => navigate('/로그인')}>무료로 시작하기</button>
                    <button className='btn-link' onClick={() => navigate('/커뮤니티')}>기능 살펴보기 →</button>
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
    )
}