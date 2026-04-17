import clsx from "clsx"
import { hotPostList, meetingList, festivalList } from "../../../data/mock/DummyData"

type Props = {
    modalOpen: () => void
}

export default function RightSidebar({ modalOpen }: Props) {
    return (
        <aside className='right-sidebar'>
            <div className='widget'>
                <div className='widget-title'>🔥 인기 글</div>
                {hotPostList.map((l, i) => (
                    <div className='hot-item'>
                        <div className={clsx('hot-num', {top: i+1 <= 3})}>{i+1}</div>
                        <div className='hot-title'>{l.title}</div>
                        <div className='hot-like'>❤️ {l.like}</div>
                    </div>
                ))}
            </div>
            <div className='widget'>
                <div className='widget-title'>🤝 활성 모임</div>
                {meetingList.map((l, i) => (
                    <div className='meeting-item'>
                        <div className='meeting-name'>{l.name}</div>
                        <div className='meeting-stat'>
                            <div className='meeting-dot'></div>
                            {l.stat}
                        </div>
                    </div>
                ))}
            </div>
            <div className='widget'>
                <div className='widget-title'>📅 다가오는 행사</div>
                {festivalList.map((l) => (
                    <div className='festival-item'>
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
            <div className='widget'>
                <div className='write-post'>
                    <div className='write-desc'>나의 독서 이야기를<br/>커뮤니티에 나눠보세요</div>
                    <button className='write-btn post' onClick={() => modalOpen()}>✏️ 글쓰기</button>
                </div>
            </div>
        </aside>
    )
}