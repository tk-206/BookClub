import clsx from 'clsx'
import './css/Publisher.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

type TabFilter = '전체' | '소설·문학' | '에세이' | 'SF·장르' | '어린이' | '채용중'
type PageFilter = '메인' | '상세' | '구인구직'
type DetailTab = '소개' | '도서 목록' | '채용 공고'

export default function Publisher() {
    const [filter, setFilter] = useState<TabFilter>('전체')
    const [pagefilter, setPageFilter] = useState<PageFilter>('메인')
    const [detailTab, setDetailTab] = useState<DetailTab>('소개')
    const tabList = ['전체', '소설·문학', '에세이', 'SF·장르', '어린이', '채용중'] as const
    const topPubList = [
        {
            icon: '📚',
            color: 'a',
            name: '민음사',
            genre: '소설 · 시 · 인문 · 에세이',
            tag: ['한국문학', '세계문학전집', '노벨문학상'],
            desc: '1966년 창립. 세계문학전집을 비롯해 국내 최고 수준의 문학 출판사. 한강, 김영하, 황석영 등 대표 작가들과 함께합니다.',
            book: '1200+',
            career: '58년',
            hiring: 2,
        },
        {
            icon: '🌿',
            color: 'b',
            name: '창비',
            genre: '소설 · 시 · 사회과학',
            tag: ['한국문학', '창작과비평', '어린이'],
            desc: '창작과비평사로 출발, 한국 문학의 산실. 채식주의자, 아몬드 등 굵직한 작품들을 세상에 내보낸 출판사입니다.',
            book: '980+',
            career: '55년',
            hiring: 0,
        },
        {
            icon: '🌸',
            color: 'c',
            name: '문학동네',
            genre: '소설 · 시 · 에세이',
            tag: ['현대문학', '한강', '정세랑'],
            desc: '1993년 설립 이후 한국 현대문학을 이끌어온 출판사. 작별하지 않는다, 시선으로부터 등 수상작들의 산실.',
            book: '850+',
            career: '31년',
            hiring: 1,
        },
    ]

    const pubList = [
        {
            icon: '✨',
            color: 'd',
            name: '은행나무',
            genre: '소설 · 시 · 에세이',
            date: '2000년 설립',
            book: '640+',
            hiring: 1,
        },
        {
            icon: '🔮',
            color: 'e',
            name: 'arte',
            genre: 'SF · 장르소설 · 판타지',
            date: '2016년 설립',
            book: '320+',
            hiring: 0,
        },
        {
            icon: '📜',
            color: 'f',
            name: '열린책들',
            genre: '세계문학 · 번역 · 인문',
            date: '1986년 설립',
            book: '1,100+',
            hiring: 0,
        },
        {
            icon: '🌊',
            color: 'g',
            name: '한겨레출판',
            genre: '사회과학 · 에세이 · 청소년',
            date: '2006년 설립',
            book: '480+',
            hiring: 2,
        },
        {
            icon: '🍀',
            color: 'h',
            name: '사계절',
            genre: '어린이 · 청소년 · 그림책',
            date: '1987년 설립',
            book: '750+',
            hiring: 0,
        },
    ]

    let detail
    if(detailTab === '소개') {
        detail = (
            <div className='company-profile'>
                {/* Left */}
                <div>
                    <div>
                        <div>
                            <div>1200+</div>
                            <div>보유 도서</div>
                        </div>
                        <div>
                            <div>58</div>
                            <div>업력(년)</div>
                        </div>
                        <div>
                            <div>12</div>
                            <div>수상작가</div>
                        </div>
                        <div>
                            <div>340</div>
                            <div>팔로워</div>
                        </div>
                    </div>
                    <div>
                        <div>🏢 출판사 소개</div>
                        <div>민음사는 1966년 박맹호 선생에 의해 설립된 대한민국 대표 문학 출판사입니다. 세계문학전집, 오늘의 시인총서, 모던 클래식 등 굵직한 시리즈를 통해 반세기 넘게 한국 독자들의 지적 성장을 함께해 왔습니다.<br/><br/>한강, 김영하, 황석영 등 한국 문학을 대표하는 작가들과 함께하며, 노벨문학상 수상 작가들의 작품을 가장 먼저 독자들에게 소개해 왔습니다.</div>
                    </div>
                    <div>
                        <div>✦ 대표 시리즈</div>
                        <div>
                            <div>
                                <div>세계문학전집</div>
                                <div>400여 권에 달하는 국내 최대 세계문학 시리즈.</div>
                            </div>
                            <div>
                                <div>오늘의 시인총서</div>
                                <div>한국 현대시의 정수를 담은 시리즈. 1970년대부터 이어온 긴 역사.</div>
                            </div>
                            <div>
                                <div>모던 클래식</div>
                                <div>20세기 문학의 걸작들을 새롭게 번역해 소개하는 시리즈.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    if(detailTab === '도서 목록') {
        detail = (
            <div>
                도서 목록
            </div>
        )
    }
    if(detailTab === '채용 공고') {
        detail = (
            <div>
                채용 공고
            </div>
        )
    }

    let page
    if(pagefilter === '메인') {
        page = (
            <section className="publisher-page">
                <div className="pub-header">
                    <div className="header-label">PUBLISHERS</div>
                    <h1 className="header-title">
                        책을 세상에 내보내는<br/>
                        <em>출판사들</em>
                    </h1>
                    <div className="header-desc">
                        국내 주요 출판사의 소개, 대표 도서, 채용 정보까지.<br/>
                        책이 만들어지는 곳을 만나보세요.
                    </div>
                    <NavLink to='' className='header-hire'>
                        구인 구직 →
                    </NavLink>
                    <div className="header-stats">
                        <div className="stat-item">
                            <div className="stat-num hd">147</div>
                            <div className="stat-text hd">등록 출판사</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-num hd">38</div>
                            <div className="stat-text hd">채용 진행중</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-num hd">4200+</div>
                            <div className="stat-text hd">등록 도서</div>
                        </div>
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

                <main className='pub-content'>
                        <div className='pub-label'>주요 출판사</div>
                        <div className='pub-top-list'>
                            {topPubList.map((l) => (
                                <div className='pub-top' onClick={() => setPageFilter('상세')}>
                                    <div className={clsx('pub-icon', l.color)}>{l.icon}</div>
                                    <div className='pub-name'>{l.name}</div>
                                    <div className='pub-genre'>{l.genre}</div>
                                    <div className='pub-tags'>
                                        {l.tag.map((l) => (
                                            <div className='pub-tag'>{l}</div>
                                        ))}
                                        </div>
                                    <div className='pub-desc'>{l.desc}</div>
                                    <div className='pub-stats'>
                                        <div className='stat-item'>
                                            <strong className='stat-num pb'>{l.book}</strong>
                                            <div className='stat-text pb'>보유 도서</div>
                                        </div>
                                        <div className='stat-item'>
                                            <strong className='stat-num pb'>{l.career}</strong>
                                            <div className='stat-text pb'>업력</div>
                                        </div>
                                        <div className='stat-item'>
                                            <div className='stat-career'>
                                                {getHotText(l.hiring)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='pub-label'>전체 출판사</div>
                        <div className='pub-list'>
                            {pubList.map((l) => (
                                <div className='pub-card'>
                                    <div className={clsx('card-icon', l.color)}>{l.icon}</div>
                                    <div className='card-body'>
                                        <div className='card-name'>{l.name}</div>
                                        <div className='card-genre'>{l.genre} · {l.date}</div>
                                    </div>
                                    <div className='card-right'>
                                        <div className='card-books'>도서 {l.book}</div>
                                        {l.hiring !== 0 && <div className='card-hire'>채용 중 · {l.hiring}건</div>}
                                    </div>
                                </div>
                            ))}
                        </div>
                </main>
            </section>
        )
    }
    else if (pagefilter === '상세') {
        page = (
            <section className='publisher-page'>
                <div className='detail-header'>
                    <button className='detail-back' onClick={() => setPageFilter('메인')}>← 출판사 목록으로</button>
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
                <div className='detail-body'>
                    <div>
                        {detail}
                    </div>
                    {/* Right */}
                    <div>
                        <div>
                            <div>출판사 정보</div>
                            <div>
                                <div>설립연도</div>
                                <div>1966년</div>
                            </div>
                            <div>
                                <div>소재지</div>
                                <div>서울 강남구</div>
                            </div>
                            <div>
                                <div>직원 수</div>
                                <div>약 120명</div>
                            </div>
                            <div>
                                <div>웹사이트</div>
                                <div>minumsa.com</div>
                            </div>
                            <button>+ 팔로우</button>
                        </div>
                        <div>
                            <div>장르</div>
                            <div>
                                <div>소설~번역문학</div> 
                            </div>
                        </div>
                        <div>
                            <div>대표 작가</div>
                            <div>
                                <div>
                                    <div>한</div>
                                    <div>
                                        <div>한강</div>
                                        <div>소설 · 노벨문학상</div>
                                    </div>
                                </div>
                                <div>
                                    <div>김</div>
                                    <div>
                                        <div>김영하</div>
                                        <div>소설 · 에세이</div>
                                    </div>
                                </div>
                                <div>
                                    <div>황</div>
                                    <div>
                                        <div>황석영</div>
                                        <div>소설</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    

    return (
        <div>
            {page}
        </div>
    )

    function getHotText(count: number) {
        if (count === 0) return <div className='career-no'>채용 안함</div>
        return (
            <strong className='career-hot-ok'>
                채용중<br/><span>✦ {count}건</span>
            </strong>
        )
    }
}