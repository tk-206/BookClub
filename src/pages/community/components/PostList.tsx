// components/PostList.tsx
import PostItem from './PostItem'
import type { Post } from '../../../types'

type Props = {
  posts: Post[]
  onClickPost: (post: Post) => void
}

export default function PostList({ posts = [], onClickPost }: Props) {
  if (!posts.length) return <div>게시글이 없습니다.</div>

  return (
    <div className='post-list'>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          onClick={onClickPost}
        />
      ))}
    </div>
  )
}