import { NavLink, useNavigate } from 'react-router-dom'
import { topPubList, pubList } from '../../../data/mock/DummyData'
import { useState } from 'react'
import clsx from 'clsx'

type TabFilter = '전체' | '소설·문학' | '에세이' | 'SF·장르' | '어린이' | '채용중'

export default function PublisherMain() {
    const [filter, setFilter] = useState<TabFilter>('전체')
    const navigate = useNavigate()

    const tabList = ['전체', '소설·문학', '에세이', 'SF·장르', '어린이', '채용중'] as const

    return (
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
                <NavLink to='/구인구직' className='header-hire'>
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
                            <div className='pub-top' onClick={() => navigate('상세')}>
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
                    <div className='label-text'>
                        <div className='pub-label'>전체 출판사</div>
                        <button className='pub-more-btn'>더보기</button>
                    </div>
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

    function getHotText(count: number) {
        if (count === 0) return <div className='career-no'>채용 안함</div>
        return (
            <strong className='career-hot-ok'>
                채용중<br/><span>✦ {count}건</span>
            </strong>
        )
    }
}