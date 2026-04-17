// components/PostList.tsx
import PostItem from './PostItem'
import type { Post } from '../../../types'
import useCommunityFilter from '../hooks/useCommunityFilter'

type Props = {
  posts: Post[]
  onClickPost: () => void
}

export default function PostList({ posts = [], onClickPost }: Props) {
  if (!posts.length) return <div>게시글이 없습니다.</div>
  const { filteredPosts } = useCommunityFilter(posts)

  return (
    <div className='post-list'>
      <div className='featured-post' onClick={() => onClickPost()}>
      <div>
          <div className='featured-label'>이주의 화제글</div>
          <div className='featured-title'>한강 작가의 노벨상 수상 이후, 한국 문학은 어떻게 변했나</div>
          <div className='featured-preview'>노벨문학상 수상 이후 1년이 지난 지금, 한국 문학 시장의 변화를 독자의 시선으로 돌아봅니다. 번역 출판의 확대, 독자층의 다양화, 그리고 창작자들이 느끼는 기대와 부담감...</div>
          <div className='post-bottom'>
            <div className='post-author'>
              <div className='post-author-avatar'>이</div>
              <div className='post-author-name'>이문학</div>
            </div>
            <div className='post-date'>2025.03.17</div>
            <div className='post-stats'>
              <div className='post-stat'>❤️ 284</div>
              <div className='post-stat'>💬 47</div>
            </div>
          </div>
      </div>
      <div className='featured-img'>📚</div>
      </div>
      {filteredPosts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          clickOn={() => onClickPost()}
        />
      ))}
    </div>
  )
}