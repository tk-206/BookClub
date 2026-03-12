import './css/Home.css'

export default function Home() {
    const columns = [
        { 
            num: '01',
            emoji: '📚',
            title: '독서 기록 & 캘린더',
            body: "읽은 책을 기록하고 캘린더로 한눈에 확인하세요. 로그인 후 나만의 서재를 만들어 독서 이력을 관리할 수 있습니다.",
        },
        { 
            num: '02',
            emoji: '💬',
            title: '모임 & 게시판',
            body: "독서 모임을 만들거나 참여하세요. 정보 공유 게시판을 통해 독자들과 다양한 이야기를 나눌 수 있습니다.",        
        },
        { 
            num: '03',
            emoji: '🏢',
            title: '출판사 & 구인구직',
            body: "출판사 정보를 소개하고 편집자, 번역가, 작가를 위한 구인구직 정보를 게재할 수 있습니다.",
        },
        { 
            num: '04',
            emoji: '✍️',
            title: '작가 전용 소통방',
            body: "인증된 작가님들만의 공간에서 창작 이야기, 출판 경험, 고민을 자유롭게 나눌 수 있습니다.",
        },
        { 
            num: '05',
            emoji: '📣',
            title: '작가 ↔ 독자 채널',
            body: "작가가 독자에게 직접 전하는 소통 공간. 신작 소식, 창작 비화, 작가의 생각을 가감 없이 공유합니다.",
        },
        { 
            num: '06',
            emoji: '🔔',
            title: '행사 알림 시스템',
            body: "북페어, 사인회, 낭독회, 강연 등 작가와 출판사의 행사 정보를 실시간으로 받아보세요.",
        },
    ]

    return (
        <div className='home-page'>
            <div className='home-header'>
                <div className='home-header-text'>
                    <div className='home-header-title'>
                        BOOK COMMUNITY PLATFORM
                    </div>
                    <div className='home-header-text_desc'>
                        책을 읽고,<br/>
                        사람을 만나고,<br/>
                        <p className='home-header-text_desc2'>이야기가 흐르다</p>
                    </div>
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
            </div>

            <div className='home-features'>
                <div>FEATURES</div>
                <div className='home-features-title_desc'>
                    책과 사람을 잇는<br/>
                    <em>모든 것</em>
                </div>
                {columns.map((c) => (
                    <div className='feature-body'>
                        <div>{c.num}</div>
                        <div>{c.emoji}</div>
                        <div>{c.title}</div>
                        <div>{c.body}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}