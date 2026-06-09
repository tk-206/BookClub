import type { Post } from "../../../types"
import { formatTimeAgo } from "../../../utils/date"

type Props = {
    hotPost: Post
}

export default function FeaturedPost({ hotPost }:Props) {
    return (
        <>
            {hotPost ? (
                <>
                <div className='featured-label'>이주의 화제글</div>
                    <div className='featured-title'>{hotPost.title}</div>
                    <div className='featured-preview'>{hotPost.content}</div>
                    <div className='post-bottom'>
                    <div className='post-author'>
                        <div className='post-author-avatar'>{hotPost.profileImage}</div>
                        <div className='post-author-name'>{hotPost.author}</div>
                    </div>
                    <div className='post-date'>{formatTimeAgo(hotPost.createAt)}</div>
                    <div className='post-stats'>
                        <div className='post-stat'>❤️ {hotPost.stats.likeCount}</div>
                        <div className='post-stat'>💬 {hotPost.stats.commentCount}</div>
                    </div>
                </div>
                </>
            ): (
            <div>
                아직 이 주의 화제의 게시글이 없습니다.<br/>
                글을 작성해주세요!🥹
            </div>
            )}
        </>
    )
}