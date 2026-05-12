import clsx from "clsx"
import type { Post } from "../../../types"

type Props = {
    post: Post
    clickOn: () => void
}

export default function PostItem({ post, clickOn } : Props ) {
    return (
        <div className={clsx('post-item', {unread: !post.isRead})} onClick={() => clickOn()}>
            <div>
                <div className='post-top'>
                    <span className={clsx('post-category', post.category)}>{post.category}</span>
                </div>
                <div className='post-mid'>
                    <div className='post-title'>{post.title}</div>
                    <div className='post-preview'>{post.content}</div>
                </div>
                <div className='post-bottom'>
                    <div className='post-author'>
                        <div className='post-author-avatar'>{post.profileImage}</div>
                        <div className='post-author-name'>{post.author}</div>
                    </div>
                    <div className='post-date'>{formatTimeAgo(post.createAt)}</div>
                    <div className='post-stats'>
                        <div className='post-stat'>❤️ {post.stats.likeCount}</div>
                        <div className='post-stat'>💬 {post.stats.commentCount}</div>
                        <div className='post-stat'>🫣 {post.stats.viewCount}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const formatTimeAgo = (
    dataString: string
) => {
    const now = new Date()
    const date = new Date(dataString)

    const diff = now.getTime() - date.getTime()

    const minutes = Math.floor(diff / 1000 / 60)
    const hours = Math.floor(diff / 1000 / 60 / 60)
    const days = Math.floor(diff / 1000 / 60 / 60 / 24)

    if(minutes < 1) return '방금 전'

    if(minutes < 60) return `${minutes}분 전`

    if(hours < 24) return `${hours}시간 전`
    
    if(days < 7) return `${days}일 전`

    const year = date.getFullYear()

    const month = String(
        date.getDate()
    ).padStart(2,'0')

    const day = String(
        date.getDate()
    ).padStart(2,'0')

    return `${year}.${month}.${day}`
}