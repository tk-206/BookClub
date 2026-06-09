import clsx from "clsx"
import { hotPostList, festivalList } from "../../../data/mock/DummyData"
import { useState } from "react"
import EmptyState from "../../../components/EmptyState"

type Props = {
    modalOpen: () => void
}

export default function RightSidebar({ modalOpen }: Props) {
    const [post] = useState(hotPostList)

    let isPost
    if(post.length === 0 ) {
        isPost = (
            <>
                <EmptyState type="posts" />
            </>
        )
    }
    else {
        isPost = (
            <div>
                <div className='widget'>
                    <div className='widget-title'>🔥 인기 글</div>
                    {/* 5개까지 */}
                    {hotPostList.map((l, i) => (
                        <div key={l.title} className='hot-item'>
                            <div className={clsx('hot-num', {top: i+1 <= 3})}>{i+1}</div>
                            <div className='hot-title'>{l.title}</div>
                            <div className='hot-like'>❤️ {l.like}</div>
                        </div>
                    ))}
                </div>
                {/* 수요층 구체화를 위한 삭제 */}
                {/* <div className='widget'>
                    <div className='widget-title'>🤝 활성 모임</div>
                    {meetingList.map((l) => (
                        <div key={l.name} className='meeting-item'>
                            <div className='meeting-name'>{l.name}</div>
                            <div className='meeting-stat'>
                                <div className='meeting-dot'></div>
                                {l.stat}
                            </div>
                        </div>
                    ))}
                </div> */}
                <div className='widget'>
                    <div className='widget-title'>📅 다가오는 행사</div>
                    {/* 3개까지 */}
                    {festivalList.map((l) => (
                        <div key={`${l.month}-${l.day}-${l.name}`} className='festival-item'>
                            <div className='festival-date'>
                                <div className='festival-month'>{l.month}</div>
                                <div className='festival-day'>{l.day}</div>
                            </div>
                            <div className='festival-info'>
                                <div className='festival-name'>{l.name}</div>
                                <div className='festival-place'>{l.place}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <aside className='right-sidebar'>
            {isPost}
            <div className='widget'>
                <div className='write-post'>
                    <div className='write-desc'>나의 독서 이야기를<br/>커뮤니티에 나눠보세요</div>
                    <button className='write-btn post' onClick={() => modalOpen()}>✏️ 글쓰기</button>
                </div>
            </div>
        </aside>
    )
}