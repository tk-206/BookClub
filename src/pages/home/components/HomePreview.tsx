import { tabs, dummyList } from "../../../data/mock/DummyData"
import { useState } from "react"
import { clsx } from "clsx"

type Tab = '독서 기록' | '모임 캘린더' | '게시판' | '작가 채널'

export default function HomePreview() {
    const [tab, setTab] = useState<Tab>('독서 기록')

    return (
        <section className='home-preview'>
            <div className='preview-header'>
                <div className='preview-title'>PREVIEW</div>
                <h2 className='preview-title_desc'>
                    내 서재를<br/>
                    <em>직접 만들어보세요</em>
                </h2>
            </div>

            <div className='preview-tab'>
                {tabs.map((t) => (
                    <button
                        key={t}
                        className={clsx('preview-tab_btn', {'preview-tab_btn--active': tab === t})}
                        onClick={() => setTab(t)}
                    >
                        {t}
                    </button>
                ))}
            </div>
            <div className='preview-content'>
                <div className='preview-item-list'>
                    {dummyList.map((i) => (
                        <div key={i.title} className='preview-item-card'>
                            <div className='item_cover'>{i.cover}</div>
                                <div className='item_info'>
                                    <div className='item_info_title'>{i.title}</div>
                                    <div className='item_info_author'>{i.author}</div>
                                    <div className='item_info_stars'>{i.stars}</div>
                                </div>
                            <div className='item_date'>{i.date}</div>
                        </div>
                    ))}
                </div>

                <div className='preview-desc'>
                    <h3 className='desc-title'>
                        나만의 독서 기록을<br/>
                        캘린더로 한눈에
                    </h3>
                    <p className='desc-title_desc'>읽은 책, 읽고 있는 책, 읽고 싶은 책을 한곳에 기록하세요. 월별 독서 현황을 캘린더로 시각화하고, 독서 노트와 별점을 남길 수 있습니다.</p>
                    <ul className='desc-list'>
                        <li>로그인 후 나만의 서재 관리</li>
                        <li>별점 · 독서 노트 · 한 줄 감상</li>
                        <li>월별 / 장르별 독서 통계</li>
                        <li>친구와 서재 공유 기능</li>
                        <li>읽고 싶은 책 위시리스트</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}