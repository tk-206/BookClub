import clsx from 'clsx'
import './Recruiting.css'
import { useState } from 'react'
import RecruitingPost from './components/RecruitingPost'
import { jobs } from '../../data/mock/DummyData'

type FilterTab = '최신순' | '마감임박' | '인기순'

export default function Recruiting() {
    const [filterTab, setFilterTab] = useState<FilterTab>('최신순')
    const [postOpen, setPostOpen] = useState(false)


    return (
        <section className="recruiting-page">
            <div className="job-header">
                <div>
                    <div className="job-header-title">구인 구직</div>
                    <div className="job-header-desc">편집자, 디자이너, 번역가, 마케터 — 책을 만드는 모든 직무의 채용 정보</div>
                </div>
                <button className="btn-post-job">✦ 채용 공고 등록</button>
            </div>
            <div className='job-body'>
                {/* Filter */}
                <div>
                    <div className='filter-section'>
                        <div className='filter-title'>직무</div>
                        <label className='filter-opt'>
                            <input type='checkbox' />
                            편집자
                        </label>
                        <label className='filter-opt'>
                            <input type='checkbox' />
                            북 디자이너
                        </label>
                        <label className='filter-opt'>
                            <input type='checkbox' />
                            번역가
                        </label>
                        <label className='filter-opt'>
                            <input type='checkbox' />
                            마케터
                        </label>
                        <label className='filter-opt'>
                            <input type='checkbox' />
                            영업·유통
                        </label>
                    </div>
                    <div className='filter-section'>
                        <div className='filter-title'>고용 형태</div>
                        <label className='filter-opt'>
                            <input type='checkbox' />
                            정규직
                        </label>
                        <label className='filter-opt'>
                            <input type='checkbox' />
                            계약직
                        </label>
                        <label className='filter-opt'>
                            <input type='checkbox' />
                            인턴
                        </label>
                        <label className='filter-opt'>
                            <input type='checkbox' />
                            프리랜서
                        </label>
                    </div>
                    <div className='filter-section'>
                        <div className='filter-title'>경력</div>
                        <label className='filter-opt'>
                            <input type='checkbox' />
                            신입
                        </label>
                        <label className='filter-opt'>
                            <input type='checkbox' />
                            1-3년
                        </label>
                        <label className='filter-opt'>
                            <input type='checkbox' />
                            3-5년
                        </label>
                        <label className='filter-opt'>
                            <input type='checkbox' />
                            5년 이상
                        </label>
                    </div>
                    <div className='filter-section'>
                        <div className='filter-title'>장르</div>
                        <label className='filter-opt'>
                            <input type='checkbox' />
                            소설·문학
                        </label>
                        <label className='filter-opt'>
                            <input type='checkbox' />
                            에세이
                        </label>
                        <label className='filter-opt'>
                            <input type='checkbox' />
                            어린이·청소년
                        </label>
                        <label className='filter-opt'>
                            <input type='checkbox' />
                            SF·장르
                        </label>
                    </div>
                </div>
                {/* Content */}
                <div>
                    <div className='content-header'>
                        <div style={{fontSize:'.8rem', color:'var(--gold-3)'}}>
                            총 <strong style={{color:'var(--navy)'}}>38건</strong>의 채용 공고
                        </div>
                        <div className='filter-tabs'>
                            <div className={clsx('filter-tab', {active: filterTab === '최신순'})} onClick={() => setFilterTab('최신순')}>최신순</div>
                            <div className={clsx('filter-tab', {active: filterTab === '마감임박'})} onClick={() => setFilterTab('마감임박')}>마감임박</div>
                            <div className={clsx('filter-tab', {active: filterTab === '인기순'})} onClick={() => setFilterTab('인기순')}>인기순</div>
                        </div>
                    </div>
                    <div className='jobs-list'>
                        {jobs.map((j) => (
                            <div className={clsx('bjc', {hot: j.hot === true})} onClick={() => setPostOpen(true)}>
                                <div className='bjc-logo' style={{background:"linear-gradient(135deg,#1A2744,#243461)"}}>{j.logo}</div>
                                <div>
                                    <div className='bjc-title'>문학 편집자 (소설·에세이)</div>
                                    <div className='bjc-pub'>민음사 · 서울 강남구</div>
                                    <div className='bjc-tags'>
                                        {j.tags.map((t) => (
                                            <div className='bjc-tag'>{t}</div>
                                        ))}
                                    </div>
                                </div>
                                <div className='bjc-right'>
                                    <span className={clsx('type-badge', { 'jb-full': j.type === '정규직', 'jb-contract': j.type === '계약직', 'jb-intern': j.type === '인턴', 'jb-freelancer': j.type === '프리랜서' })}>{j.type}</span>
                                    <div className='dline'>마감 <span>{j.dday}</span></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <RecruitingPost isOpen={postOpen} onClose={() => setPostOpen(false)}/>
        </section>
    )
}