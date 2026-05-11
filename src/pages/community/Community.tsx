import './Community.css'
import { useState } from 'react'
import DetailPostModal from '../../components/DetailPostModal'
import AddPostModal from '../../components/AddPostModal'
import { postList } from '../../data/mock/DummyData'
import PostList from './components/PostList'
import Sidebar from './components/Sidebar'
import FilterBar from './components/FilterBar'
import RightSidebar from './components/RightSidebar'
import Header from './components/Header'
import Pagination from '../../components/Pagination'
import LoadingSpinner from '../../components/LoadingSpinner'
import EmptyState from '../../components/EmptyState'
import { fetchPosts, type Post } from '../../types'
import { useMe } from '../../hooks/useMe'
import { useQuery } from '@tanstack/react-query'



export default function Community() {
    const [detailOpen, setDetailOpen] = useState(false)
    const [writeOpen, setWriteOpen] = useState(false)
    const [page, setPage] = useState(1);
    const [selectPost, setSelectPost] = useState<Post | null>()
    const { data: user } = useMe()

    const { data: post = [], isLoading, error } = useQuery({
        queryKey: ['posts'],
        queryFn: () => fetchPosts(),
        refetchOnWindowFocus: false,
    })

    let content
    if(isLoading) {
        content = (
            <LoadingSpinner />
        )
    }
    else if(!isLoading) {
        content = (
            <section className='community-page'>
                {/* 수정하기 만들어서 넣어주는 방법 구상해야함 */}
                {/* Left */}
                <Sidebar />
                {/* Mid */}
                {post.length !== 0 && (
                    <main className='board-content'>
                        <Header clickOn={() => setDetailOpen(true) }/>
                        <FilterBar />
                        <PostList posts={postList} onClickPost={() => setDetailOpen(true)} />
                        <Pagination
                            currentPage={page}
                            totalPages={5}
                            onPageChange={(p) => {
                                setPage(p);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                        />
                    </main>
                )}
                {post.length === 0 && <EmptyState type='posts' />}
                {/* Right */}
                <RightSidebar modalOpen={() => setWriteOpen(true)} />

                <DetailPostModal isOpen={detailOpen} onClose={() => setDetailOpen(false)}/>
                <AddPostModal isOpen={writeOpen} onClose={() => setWriteOpen(false)} user={user} initialData={selectPost ?? undefined}/>
            </section>
        )
    }

    return (
        <div>
            {content}
        </div>
    )
}