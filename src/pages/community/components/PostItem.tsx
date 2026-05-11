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
                        <div className='post-author-avatar'>{post.author}</div>
                        <div className='post-author-name'>{post.author}</div>
                    </div>
                    <div className='post-date'>{post.createdAt}</div>
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