import clsx from 'clsx'
import './css/Publisher.css'

export default function Publisher() {

    const tabList = ['전체', '소설·문학', '에세이', 'SF·장르', '어린이', '채용중']
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
                        <button className='filter-tab'>{l}</button>
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
                            <div className='pub-top'>
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
                                            {getText(l.hiring)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='pub-label'>전체 출판사</div>
            </main>
        </section>
    )

    function getText(count: number) {
        if (count === 0) return <div className='career-no'>채용 안함</div>
        return (
            <strong className='career-ok'>
                채용중<br/><span>✦ {count}건</span>
            </strong>
        )
    }
}