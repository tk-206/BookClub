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



export default function Community() {
    const [loading, setLoading] = useState(true)
    const [detailOpen, setDetailOpen] = useState(false)
    const [writeOpen, setWriteOpen] = useState(false)
    const [page, setPage] = useState(1);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false),1000);
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
                <main className='board-content'>
                    <Header clickOn={() => setDetailOpen(true) }/>
                    <FilterBar />
                    <div className='post-list'>
                        <PostList posts={postList} onClickPost={() => setDetailOpen(true)} />
                    </div>
                    <Pagination
                        currentPage={page}
                        totalPages={5}
                        onPageChange={(p) => {
                            setPage(p);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                    />
                </main>
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