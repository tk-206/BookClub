import FilterButton from "../../../components/FilterButton"
import useCommunityFilter from "../hooks/useCommunityFilter"

const filterTabList = [
    '최신순', '인기순', '댓글순', '조회순'
]

export default function FilterBar() {
    const { filterTab,setFilterTab } = useCommunityFilter()

    return(
        <div className='board-filter'>
            <FilterButton filterTab={filterTab} item={filterTabList} onChange={setFilterTab} />
            <div className='search-wrap'>
                <span>🔍</span>
                <input type='text' placeholder='게시글 검색'/>
            </div>
        </div>
    )
}