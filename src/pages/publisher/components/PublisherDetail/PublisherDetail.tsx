import { dummyGenre } from "../../../data/mock/DummyData"
import { useState } from "react"
import clsx from "clsx"

type DetailTab = '소개' | '도서 목록' | '채용 공고'

export default function PublisherDetail() {
    const [detailTab, setDetailTab] = useState<DetailTab>('소개')

    return (
        <section className='publisher-page'>
            <div className='detail-pub-header'>
                <button className='detail-pub-back' onClick={() => setPageFilter('메인')}>← 출판사 목록으로</button>
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
        </section>
    )
}

