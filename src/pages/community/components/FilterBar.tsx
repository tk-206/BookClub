import useCommunityFilter from "../hooks/useCommunityFilter"
import clsx from "clsx"

export default function FilterBar() {
    const { filterTab,setFilterTab } = useCommunityFilter()

    const filterTabList = [
        '최신순', '인기순', '댓글순', '조회순'
    ] as const

    return(
        <div className='board-filter'>
            <div className='filter-tabs'>
            {filterTabList.map((l) => (
                <button 
                    key={l} 
                    className={clsx('filter-tab', {active: filterTab === l})}
                    onClick={() => setFilterTab(l)}
                >
                    {l}
                </button>
            ))}
            </div>
            <div className='search-wrap'>
                <span>🔍</span>
                <input type='text' placeholder='게시글 검색'/>
            </div>
        </div>
    )
}