import PostItem from './PostItem'
import type { Post } from '../../../types'
import useCommunityFilter from '../hooks/useCommunityFilter'
import { useMemo } from 'react'
import EmptyState from '../../../components/EmptyState'
import FeaturedPost from './FeaturedPost'

type Props = {
  posts: Post[]
  onClickPost: (post: Post) => void
}

export default function PostList({ posts = [], onClickPost }: Props) {
    const { filteredPosts } = useCommunityFilter(posts)
    const hotPost = useMemo(() => {
      const weekAgo = new Date()
      weekAgo.setDate(weekAgo.getDate() - 7)

      return posts
        .filter(post => new Date(post.createAt) >= weekAgo)
        .sort((a, b) => b.stats.likeCount - a.stats.likeCount)[0]
    }, [posts])

  if (!posts.length) return <EmptyState type='posts'/>

  return (
    <div className='post-list'>
      <div className='featured-post'>
      <div>
          {/* 좋아요 수 제일 많은 거 불러오기 */}
          <FeaturedPost hotPost={hotPost} />
      </div>
      <div className='featured-img'>📚</div>
      </div>
      {filteredPosts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          clickOn={() => onClickPost(post)}
        />
      ))}
    </div>
  )
}