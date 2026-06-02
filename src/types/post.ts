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
}

export interface PostStats {
    likeCount: number,
    commentCount: number,
    viewCount: number,
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