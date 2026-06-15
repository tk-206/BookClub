import { api } from '../api/client'

export interface Post {
  id: string,
  category: string,
  title: string,
  content: string,
  isRead?: boolean,
  author: string,
  profileImage: string,
  createAt: string,
  stats: PostStats,
  tags?: string[],
  isSecret: boolean,
  userId: string,
  likeUserIds: string[],
}

export interface PostStats {
    likeCount: number,
    commentCount: number,
    viewCount: number,
}

export type TogglePostLikeInput = {
  postId: string
  userId: string
}

export const fetchPosts = async (): Promise<Post[]> => {
  const res = await api.get('posts')

  return res.data
}

export const createPost = async (
  post: Omit<Post, 'id'>,
  userId: string
): Promise<Post> => {
  const res = await api.post('/posts', {
    ...post,
    userId,
  })

  return res.data
}

export const togglePostLike = async (
  postId: string,
  userId: string
): Promise<Post> => {

  const res = await api.get(`/posts/${postId}`)

  const post = res.data

  const alreadyLiked =
    post.likeUserIds.includes(userId)

  const updatedPost = {
    likeUserIds: alreadyLiked
      ? post.likeUserIds.filter(
          (id:string) => id !== userId
        )
      : [...post.likeUserIds, userId],

    stats: {
      ...post.stats,

      likeCount: alreadyLiked
        ? post.stats.likeCount - 1
        : post.stats.likeCount + 1
    }
  }

  const updated = await api.patch(
    `/posts/${postId}`,
    updatedPost
  )

  return updated.data
}