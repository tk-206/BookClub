import { noticeList } from "../../../data/mock/DummyData"

type Props = {
    clickOn: () => void
}

export default function Header({ clickOn }:Props) {
    

    return(
        <div>
            <div className='board-header'>
                <div className='board-label'>COMMUNITY · BOARD</div>
                <div className='board-title'>전체 게시판</div>
                <div className='board-subtitle'>독자,작가,출판사 모두의 이야기가 모이는 곳</div>
            </div>
            <div className='board-notice'>
                {/* 공지는 최신순 2개 or 중요순 2개로 생각 중 */}
                {noticeList.map((l) => (
                    <div key={l.title} className='notice-card' onClick={() => clickOn()}>
                        <span className='notice-icon'>📌</span>
                        <div className='notice-text'>
                            <div className='text-title'>{l.title}</div>
                            <div className='text-subtitle'>{l.admin}</div>
                        </div>
                        <div className='community-badge badge-notice'>공지</div>
                    </div>
                ))}
            </div>
        </div>
    )
}