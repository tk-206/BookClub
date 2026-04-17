import clsx from "clsx"
import { tagList } from "../../../data/mock/DummyData"
import useCommunityFilter from "../hooks/useCommunityFilter"



export default function Sidebar() {
    const { menu, setMenu, toggleTab, activeTags } = useCommunityFilter()

    const boardList = [
    {title: '전체 글', icon: '📋'},
    {title: '독서 토론', icon: '💬'},
    {title: '책 리뷰', icon: '📖'},
    {title: '질문 · 추천', icon: '❓'},
    {title: '모임 모집', icon: '🤝'},
    {title: '정보 공유', icon: '📢'},
    ] as const

    const authorList = [
        {title: '작가 채널', icon: '✍️'},
        {title: '출판사 소식', icon: '🏢'},
        {title: '구인구직', icon: '💼'},
    ] as const

    return (
        <aside className='left-sidebar'>
            <div className='sidebar-menu'>
                <div className='sidebar-title'>게시판</div>
                {boardList.map((l) => (
                    <button 
                        className={clsx('sidebar-btn', { active: menu === l.title})} 
                        onClick={() => setMenu(l.title)}
                    >
                        <span>{l.icon}</span> {l.title}
                    </button>
                ))}
            </div>
            <div className='sidebar-divider'></div>
            <div className='sidebar-menu'>
                <div className='sidebar-title'>작가 & 출판사</div>
                {authorList.map((l) => (
                    <button 
                        className={clsx('sidebar-btn', { active: menu === l.title})} 
                        onClick={() => setMenu(l.title)}
                    >
                        <span>{l.icon}</span> {l.title}
                </button>
                ))}
            </div>
            <div className='sidebar-menu'>
                <div className='sidebar-title'>인기 태그</div>
                <div className='tag-cloud'>
                    {tagList.map((l) => (
                        <button 
                            className={clsx('tag', {active: activeTags.includes(l)})} 
                            onClick={() => toggleTab(l)}
                        >
                            {l}
                        </button>
                    ))}
                </div>
            </div>
        </aside>
    )
}