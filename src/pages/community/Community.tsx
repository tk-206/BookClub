import clsx from 'clsx'
import './Community.css'
import { useEffect, useState } from 'react'
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



export default function Community() {
    const [loading, setLoading] = useState(true)
    const [detailOpen, setDetailOpen] = useState(false)
    const [writeOpen, setWriteOpen] = useState(false)
    const [page, setPage] = useState(1);
    const [post, setPost] = useState([])

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return() => clearTimeout(timer);
    }, [])

    let content
    if(loading) {
        content = (
            <LoadingSpinner />
        )
    }
    else if(!loading) {
        content = (
            <section className='community-page'>
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
                <AddPostModal isOpen={writeOpen} onClose={() => setWriteOpen(false)}/>
            </section>
        )
    }

    return (
        <div>
            {content}
        </div>
    )
}