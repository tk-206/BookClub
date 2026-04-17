import { useMemo, useState } from "react"
import type { Post } from "../../../types"



export default function useCommunityFilter(initialPosts: Post[] = []) {
    const [activeTags, setActiveTags] = useState<string[]>([])
    const [menu, setMenu] = useState('전체 글')
    const [filterTab, setFilterTab] = useState('최신순')

    const toggleTab = (tag: string) => {
        setActiveTags((prev) => 
            prev.includes(tag)
              ? prev.filter(t => t !== tag)
              : [...prev, tag]
        )
    }

    const filteredPosts = useMemo(() => {
        let result = [...initialPosts]

        if(menu !== '전체 글') {
            result = result.filter(p => p.category === menu)
        }

        if(activeTags.length > 0) {
            result = result.filter(p => 
                activeTags.every(tag => p.tags?.includes(tag))
            )
        }

        if(filterTab === '인기순') {
            result.sort((a, b) => b.stats.like - a.stats.like)
        }

        if(filterTab === '댓글순') {
            result.sort((a, b) => b.stats.commentCount - a.stats.commentCount)
        }

        if(filterTab === '조회순') {
            result.sort((a, b) => b.stats.view - a.stats.view)
        }

        return result
    }, [initialPosts, menu, filterTab, activeTags])

    return {
        toggleTab,
        menu,
        setMenu,
        activeTags,
        filterTab,
        setFilterTab,
        filteredPosts
    }
}