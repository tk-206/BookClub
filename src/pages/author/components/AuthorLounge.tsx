import { useState, useEffect } from 'react'
import './AuthorLounge.css'
import { useNavigate } from 'react-router-dom'
import SkeletonList from '../../../components/SkeletonList'
import { useAuth } from '../../../context/AuthContext'
import Pagination from '../../../components/Pagination'

export default function AuthorLounge() {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const { user } = useAuth()

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000);
        return() => clearTimeout(timer);
    }, [])

    let content
    if(!loading) {
        content = (
            <div>
                <div className="lp featured-lp">
                    <div className="lp-header">
                    <div className="lp-avatar" style={{background:"linear-gradient(135deg,#1A2744,#243461)"}}>한</div>
                    <div>
                        <div className="lp-author-name">한강 <span className="lp-verified">✦ 인증</span></div>
                        <div className="lp-time">2시간 전</div>
                    </div>
                    </div>
                    <div className="lp-title">번역 과정에서 잃어버리는 것들에 대하여</div>
                    <div className="lp-body">최근 프랑스어 번역 작업을 지켜보면서 느낀 점을 나눠보고 싶었습니다. 번역자분이 정말 훌륭하신 분인데, 어떤 단어들은 아무리 노력해도 그 층위가 옮겨지지 않더군요. 특히 '한'이라는 단어. 불어로 'peine'이라고 하면 뭔가 너무 단순해지고, 'mélancolie'는 또 너무 유럽적인 느낌이고... 여러분은 이런 경험 어떻게 받아들이시나요? 번역의 불가능성 자체를 작품의 일부로 받아들이는 건지, 아니면 계속 더 나은 언어를 찾으려 하시는지 궁금합니다.</div>
                    <div className="lp-tags">
                    <span className="lp-tag">#번역</span>
                    <span className="lp-tag">#한국어</span>
                    <span className="lp-tag">#창작의고민</span>
                    </div>
                    <div className="lp-footer">
                    <button className="lp-action liked">❤️ 38</button>
                    <button className="lp-action">💬 14</button>
                    <button className="lp-action">🔖 22</button>
                    </div>
                </div>

                <div className="lp">
                    <div className="lp-header">
                    <div className="lp-avatar" style={{background:"linear-gradient(135deg,#5C3D6E,#7B5492)"}}>정</div>
                    <div>
                        <div className="lp-author-name">정세랑 <span className="lp-verified">✦ 인증</span></div>
                        <div className="lp-time">4시간 전</div>
                    </div>
                    </div>
                    <div className="lp-title">SF 쓸 때 과학 자문, 어떻게 하세요?</div>
                    <div className="lp-body">새 장편에 양자역학 개념이 들어가는데 제가 물리학 전공이 아니다 보니 어느 지점에서 자문을 구해야 할지 감이 안 잡히더라고요. 전문가에게 직접 연락하셨던 분 계신가요? 아니면 논문을 직접 읽으시는지...</div>
                    <div className="lp-tags">
                    <span className="lp-tag">#SF</span>
                    <span className="lp-tag">#창작방법</span>
                    <span className="lp-tag">#자문</span>
                    </div>
                    <div className="lp-footer">
                    <button className="lp-action">❤️ 21</button>
                    <button className="lp-action">💬 9</button>
                    <button className="lp-action">🔖 7</button>
                    </div>
                </div>

                <div className="lp secret">
                    <div className="lp-header">
                    <div className="lp-avatar" style={{background:"rgba(26,39,68,.15)", color:"var(--gold-3)"}}>?</div>
                    <div>
                        <div className="lp-author-name">익명 작가</div>
                        <div className="lp-time">6시간 전</div>
                    </div>
                    </div>
                    <div className="lp-secret-notice">🔒 이 게시글은 라운지 멤버에게만 공개됩니다.</div>
                    <div className="lp-body secret" /* style="margin-top:.75rem;color:var(--ink)" */>{/* 출판사와의 계약 조건 중 인세율 관련해서 비공개로 여쭤봐도 될까요? 이번에 새 출판사와 협의 중인데, 제가 받은 조건이 업계 표준인지 잘 모르겠어서요... */}</div>
                    <div className="lp-footer">
                        <button className="lp-action">❤️ 8</button>
                        <button className="lp-action">💬 5</button>
                    </div>
                </div>

                <div className="lp">
                    <div className="lp-header">
                    <div className="lp-avatar" style={{background:"linear-gradient(135deg,#6B8C7B,#7DA08E)"}}>최</div>
                    <div>
                        <div className="lp-author-name">최은영 <span className="lp-verified">✦ 인증</span></div>
                        <div className="lp-time">어제</div>
                    </div>
                    </div>
                    <div className="lp-title">단편 쓸 때의 루틴 — 여러분은 어떠신가요</div>
                    <div className="lp-body">저는 단편을 쓸 때 반드시 손으로 첫 초고를 씁니다. 컴퓨터 앞에 앉으면 자꾸 퇴고를 하게 되어서 흐름이 끊기더라고요. 그래서 일부러 펜으로 빠르게 써내려 가고, 그것을 타이핑하면서 1차 수정을 합니다. 여러분만의 루틴이 있으시면 나눠주세요.</div>
                    <div className="lp-tags">
                        <span className="lp-tag">#창작루틴</span>
                        <span className="lp-tag">#단편소설</span>
                    </div>
                    <div className="lp-footer">
                        <button className="lp-action">❤️ 44</button>
                        <button className="lp-action">💬 31</button>
                        <button className="lp-action">🔖 18</button>
                    </div>
                </div>
            </div>
        )
    }
    else if(loading) {
        content = (
            <div className='lp'>
                <SkeletonList />
            </div>
        )
    }

    return (
        <div className="view-lounge">
            <div className="lounge-page">
                <div className="lounge-hero">
                <div className="lounge-header">
                    <div className="lounge-title-area">
                    <div className="lounge-eyebrow">Writers Only</div>
                    <div className="lounge-h1">작가 전용<br/><em>라운지</em></div>
                    <div className="lounge-desc">인증된 작가만 입장 가능한 공간. 출판, 창작, 계약, 동료 작가와의 연대 — 솔직한 이야기를 나눠보세요.</div>
                    </div>
                    <button className="lounge-back-btn" onClick={() => navigate(-1)}>← 작가 목록으로</button>
                </div>
                <div className="lounge-online-strip">
                    <div className="online-avatars">
                    <div className="o-avatar" style={{background:"linear-gradient(135deg,#1A2744,#243461)"}}>한</div>
                    <div className="o-avatar" style={{background:"linear-gradient(135deg,#5C3D6E,#7B5492)"}}>정</div>
                    <div className="o-avatar" style={{background:"linear-gradient(135deg,#6B8C7B,#7DA08E)"}}>최</div>
                    <div className="o-avatar" style={{background:"linear-gradient(135deg,#C4746E,#D4877E)"}}>손</div>
                    <div className="o-avatar" style={{background:"linear-gradient(135deg,#C9A84C,#E8C97A)", color:"var(--navy)"}}>김</div>
                    </div>
                    <div className="online-dot"></div>
                    <div className="online-text">현재 <strong>12명</strong>의 작가가 온라인</div>
                </div>
                </div>

                <div className="lounge-layout">

                {/* <!-- Left: channels --> */}
                <div className="lounge-left">
                    <div className="lounge-section-label ch">채널</div>

                    <button className="lounge-ch-item active">
                    <div className="lounge-ch-left">💬 자유로운 이야기</div>
                    <span className="lounge-ch-badge">5</span>
                    </button>
                    <button className="lounge-ch-item">
                    <div className="lounge-ch-left">✍️ 창작의 고민</div>
                    <span className="lounge-ch-badge">3</span>
                    </button>
                    <button className="lounge-ch-item">
                    <div className="lounge-ch-left">📋 출판·계약 정보</div>
                    </button>
                    <button className="lounge-ch-item">
                    <div className="lounge-ch-left">🤝 협업 제안</div>
                    <span className="lounge-ch-badge">2</span>
                    </button>
                    <button className="lounge-ch-item">
                    <div className="lounge-ch-left">🎤 낭독·강연 정보</div>
                    </button>
                    <button className="lounge-ch-item">
                    <div className="lounge-ch-left">📚 추천 &amp; 리뷰</div>
                    </button>

                    <div className="lounge-divider"></div>
                    <div className="lounge-section-label ch">공개 채널</div>

                    <button className="lounge-ch-item">
                    <div className="lounge-ch-left">📣 독자에게 전하는 말</div>
                    <span className="lounge-ch-badge" style={{background:"var(--gold)", color:"var(--navy)"}}>8</span>
                    </button>
                    <button className="lounge-ch-item">
                    <div className="lounge-ch-left">🔔 행사 · 신간 알림</div>
                    </button>
                </div>

                {/* <!-- Center: feed --> */}
                <div className="lounge-main">
                    <div className="lounge-feed-header">
                        <div className="lounge-feed-title">
                            💬 자유로운 이야기
                            <span className="feed-verified-tag">작가 전용</span>
                        </div>
                        <div className="lounge-sort">최신순</div>
                    </div>

                    <div className="lounge-feed">
                        {content}
                    </div>

                    <Pagination totalPages={10} currentPage={1} onPageChange={() => 1}/>

                    {/* <!-- Write box --> */}
                    {user?.role === '작가' && (
                        <div className="lounge-write-box">
                            <div className="write-row">
                                <div className="write-my-avatar">김</div>
                                <div className="write-area">
                                <input className="write-title-input" type="text" placeholder="제목 (선택)" />
                                <div className="write-border"></div>
                                <textarea className="write-textarea" rows={2} placeholder="작가 라운지에 이야기를 남겨보세요..."></textarea>
                                <div className="write-bottom">
                                    <button className="write-tool-btn">🖼</button>
                                    <button className="write-tool-btn">🔗</button>
                                    <label className="write-secret-label">
                                    <input type="checkbox" className="write-secret-btn" /> 🔒 비공개 {/* 악센트 컬러 네이비 */}
                                    </label>
                                    <button className="btn-submit-post">게시하기</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    )}
                    
                </div>
                

                {/* <!-- Right: members + trending --> */}
                <div className="lounge-right">
                    <div className="lounge-widgets">
                    <div className="lounge-widget-title">🟢 지금 온라인</div>
                    <div className="member-item">
                        <div className="mi-avatar mi-online" style={{background:"linear-gradient(135deg,#1A2744,#243461)"}}>한</div>
                        <div><div className="mi-name">한강</div><div className="mi-genre">소설 · 시</div></div>
                        <div className="mi-status">글 작성 중</div>
                    </div>
                    <div className="member-item">
                        <div className="mi-avatar mi-online" style={{background:"linear-gradient(135deg,#5C3D6E,#7B5492)"}}>정</div>
                        <div><div className="mi-name">정세랑</div><div className="mi-genre">소설 · SF</div></div>
                        <div className="mi-status">활동 중</div>
                    </div>
                    <div className="member-item">
                        <div className="mi-avatar mi-online" style={{background:"linear-gradient(135deg,#6B8C7B,#7DA08E)"}}>최</div>
                        <div><div className="mi-name">최은영</div><div className="mi-genre">단편소설</div></div>
                        <div className="mi-status">활동 중</div>
                    </div>
                    <div className="member-item">
                        <div className="mi-avatar" style={{background:"linear-gradient(135deg,#C9A84C,#E8C97A)", color:"var(--navy)"}}>김</div>
                        <div><div className="mi-name">김영하</div><div className="mi-genre">소설 · 에세이</div></div>
                        <div className="mi-status" style={{color:"var(--gold-3)"}}>자리 비움</div>
                    </div>
                    <div className="member-item">
                        <div className="mi-avatar" style={{background:"linear-gradient(135deg,#C4746E,#D4877E)"}}>손</div>
                        <div><div className="mi-name">손원평</div><div className="mi-genre">소설</div></div>
                        <div className="mi-status" style={{color:"var(--gold-3)"}}>자리 비움</div>
                    </div>
                    </div>

                    <div className="trending-items">
                    <div className="lounge-widget-title">🔥 인기 글</div>
                    <div className="trending-item">
                        <div className="ti-rank top">1</div>
                        <div className="ti-title">번역 과정에서 잃어버리는 것들에 대하여</div>
                        <div className="ti-heat">❤️38</div>
                    </div>
                    <div className="trending-item">
                        <div className="ti-rank top">2</div>
                        <div className="ti-title">단편 쓸 때의 루틴</div>
                        <div className="ti-heat">💬31</div>
                    </div>
                    <div className="trending-item">
                        <div className="ti-rank">3</div>
                        <div className="ti-title">SF 쓸 때 과학 자문 방법</div>
                        <div className="ti-heat">💬9</div>
                    </div>
                    <div className="trending-item">
                        <div className="ti-rank">4</div>
                        <div className="ti-title">출판사와의 계약 조건 (비공개)</div>
                        <div className="ti-heat">💬5</div>
                    </div>
                    </div>

                    <div className="lounge-notice">
                    <div className="notice-icon">🔒</div>
                    <div>이 공간은 <strong style={{color:"var(--navy)"}}>인증된 작가</strong>만 글을 작성할 수 있습니다. 독자 회원은 열람만 가능한 채널이 별도로 운영됩니다.</div>
                    </div>
                </div>

                </div>
            </div>
        </div>
    )
}

