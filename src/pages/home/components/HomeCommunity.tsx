export default function HomeCommunity() {
    return (
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
    )
}