import { dummyGenre, dummybook } from "../../../../data/mock/DummyData"
import { useState } from "react"
import clsx from "clsx"
import { useNavigate } from "react-router-dom"
import DetailPostModal from "../../../../components/DetailPostModal"
import PostModal from "./PostModal"

type DetailTab = '소개' | '도서 목록' | '채용 공고'

export default function PublisherDetail() {
    const [detailTab, setDetailTab] = useState<DetailTab>('소개')
    const navigate = useNavigate()
    const [modalOpen, setModalOpen] = useState(false)

    let detail
    if(detailTab === '소개') {
        detail = (
            <div className='company-profile'>
                {/* Left */}
                <div>
                    <div className='stats-grid'>
                        <div className='stat-card'>
                            <div className='stat-num'>1200+</div>
                            <div className='stat-text'>보유 도서</div>
                        </div>
                        <div className='stat-card'>
                            <div className='stat-num'>58</div>
                            <div className='stat-text'>업력(년)</div>
                        </div>
                        <div className='stat-card'>
                            <div className='stat-num'>12</div>
                            <div className='stat-text'>수상작가</div>
                        </div>
                        <div className='stat-card'>
                            <div className='stat-num'>340</div>
                            <div className='stat-text'>팔로워</div>
                        </div>  
                    </div>
                    <div>
                        <div className='profile-label'>🏢 출판사 소개</div>
                        <div className='profile-desc'>민음사는 1966년 박맹호 선생에 의해 설립된 대한민국 대표 문학 출판사입니다. 세계문학전집, 오늘의 시인총서, 모던 클래식 등 굵직한 시리즈를 통해 반세기 넘게 한국 독자들의 지적 성장을 함께해 왔습니다.<br/><br/>한강, 김영하, 황석영 등 한국 문학을 대표하는 작가들과 함께하며, 노벨문학상 수상 작가들의 작품을 가장 먼저 독자들에게 소개해 왔습니다.</div>
                    </div>
                    <div>
                        <div className='profile-label'>✦ 대표 시리즈</div>
                        <div>
                            <div className='profile-series'>
                                <div className='series-name'>세계문학전집</div>
                                <div className='series-desc'>400여 권에 달하는 국내 최대 세계문학 시리즈.</div>
                            </div>
                            <div className='profile-series'>
                                <div className='series-name'>오늘의 시인총서</div>
                                <div className='series-desc'>한국 현대시의 정수를 담은 시리즈. 1970년대부터 이어온 긴 역사.</div>
                            </div>
                            <div className='profile-series'>
                                <div className='series-name'>모던 클래식</div>
                                <div className='series-desc'>20세기 문학의 걸작들을 새롭게 번역해 소개하는 시리즈.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    if(detailTab === '도서 목록') {
        detail = (
            <div className='detail-book-grid'>
                {dummybook.map((b) => (
                    <div className='detail-book-card'>
                        <div className='detail-book-cover'></div>
                        <div className='detail-book-label'>{b.title}</div>
                        <div className='detail-book-author'>{b.author}</div>
                    </div>
                ))}
            </div>
        )
    }
    if(detailTab === '채용 공고') {
        detail = (
            <div className='jobs-panel'>
                <div className='job-card-d hot' onClick={() => setModalOpen(true)}>
                    <div>
                        <div className='job-badge full'>정규직</div>
                        <div className='job-title'>문학 편집자 (소설·에세이 분야)</div>
                        <div className='job-location'>📍 서울 강남구 · 경력 2년 이상</div>
                        <div className='job-tags'>
                            <div className='job-tag'>문학 편집</div>
                            <div className='job-tag'>원고 검토</div>
                            <div className='job-tag'>교정·교열</div>
                        </div>
                    </div>
                    <div className='job-dline'>
                        <span className='job-dday'>D-12</span>
                        4월 1일 마감
                    </div>
                </div>
                <div className='job-card-d'>
                    <div>
                        <div className='job-badge contract'>계약직</div>
                        <div className='job-title'>디자인팀 북 디자이너</div>
                        <div className='job-location'>📍 서울 강남구 · 경력 1년 이상</div>
                        <div className='job-tags'>
                            <div className='job-tag'>북 디자인</div>
                            <div className='job-tag'>Illustrator</div>
                            <div className='job-tag'>InDesign</div>
                        </div>
                    </div>
                    <div className='job-dline'>
                        <span className='job-dday'>D-28</span>
                        4월 17일 마감
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section className='publisher-page'>
            <div className='detail-pub-header'>
                <button className='detail-pub-back' onClick={() => navigate(-1)}>← 출판사 목록으로</button>
                <div className='detail-pub-info'>
                    <div className='pub-info'>
                        <div className='detail-pub-icon'>📚</div>
                        <div className='detail-pub-desc'>
                            <div className='detail-pub-name'>민음사</div>
                            <div className='detail-pub-genre'>소설 · 시 · 인문 · 에세이</div>
                            <div className='detail-pub-company'>1966년 설립 · 서울 강남구</div>
                        </div>
                    </div>
                    <button className='detail-pub-follow'>+ 팔로우</button>
                </div>
                <div className='detail-pub-tabs'>
                    <div className={clsx('detail-pub-tab', {active: detailTab === '소개'})} onClick={() => setDetailTab('소개')}>소개</div>
                    <div className={clsx('detail-pub-tab', {active: detailTab === '도서 목록'})} onClick={() => setDetailTab('도서 목록')}>도서 목록</div>
                    <div className={clsx('detail-pub-tab', {active: detailTab === '채용 공고'})} onClick={() => setDetailTab('채용 공고')}>채용 공고 <span>2</span></div>
                </div>
            </div>
            <div className='detail-pub-body'>
                <div>
                    {detail}
                </div>
                {/* Right */}
                <div>
                    <div className='info-card'>
                        <div className='info-label'>출판사 정보</div>
                        <div className='info-row'>
                            <div className='info-key'>설립연도</div>
                            <div className='info-val'>1966년</div>
                        </div>
                        <div className='info-row'>
                            <div className='info-key'>소재지</div>
                            <div className='info-val'>서울 강남구</div>
                        </div>
                        <div className='info-row'>
                            <div className='info-key'>직원 수</div>
                            <div className='info-val'>약 120명</div>
                        </div>
                        <div className='info-row'>
                            <div className='info-key'>웹사이트</div>
                            <div className='info-val g'>minumsa.com</div>
                        </div>
                        <button className='info-follow'>+ 팔로우</button>
                    </div>
                    <div className='info-card'>
                        <div className='info-label'>장르</div>
                        <div className='genre-pills'>
                            {dummyGenre.map((d) => (
                                <div className='genre-pill'>{d}</div>
                            ))}
                        </div>
                    </div>
                    <div className='info-card'>
                        <div className='info-label'>대표 작가</div>
                        <div>
                            <div className='detail-author-row'>
                                <div className='detail-author-av'>한</div>
                                <div>
                                    <div className='detail-author-name'>한강</div>
                                    <div className='detail-author-genre'>소설 · 노벨문학상</div>
                                </div>
                            </div>
                            <div className='detail-author-row'>
                                <div className='detail-author-av'>김</div>
                                <div>
                                    <div className='detail-author-name'>김영하</div>
                                    <div className='detail-author-genre'>소설 · 에세이</div>
                                </div>
                            </div>
                            <div className='detail-author-row'>
                                <div className='detail-author-av'>황</div>
                                <div>
                                    <div className='detail-author-name'>황석영</div>
                                    <div className='detail-author-genre'>소설</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PostModal isOpen={modalOpen} onClose={() => setModalOpen(false)}/>
        </section>
    )
}

