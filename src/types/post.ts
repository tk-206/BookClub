import type { Comment } from "./comment";

const BASE_URL = 'http://localhost:3001'

export interface Post {
  id: string,
  category: string,
  title: string,
  content: string,
  isRead?: boolean,
  author: string,
  createdAt: string,
  stats: PostStats,
  tags?: string[],
  isSecret: boolean,
  comments?: Comment[],
}

export interface PostStats {
    likeCount: number,
    commentCount: number,
    viewCount: number,
}

export const createPost = async (post: Post) => {
  const res = await fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post)
  })
  return res.json()
}