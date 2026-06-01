import { api } from "../api/client";

export interface CommentType {
  id: string,
  userId: string,
  content: string,
  createAt: string,
  isSecret: boolean,
  parentId: string | null,
  postId: string,
  author: string,
}

export type CreateCommentInput = {
  content: string
  isSecret: boolean
}

export const createComment = async (
  comment: CreateCommentInput,
  userId: string,
  postId: string,
  author: string,
  parentId?: string,
): Promise<CommentType> => {
  const res = await api.post('/comments', {
    ...comment,
    userId,
    postId,
    author,
    createAt: new Date().toISOString(),
    parentId: parentId ?? null,
  })

  const post = await api.get(`/posts/${postId}`)

  await api.patch(`/posts/${postId}`, {
    stats: {
      ...post.data.stats,
      commentCount:
        post.data.stats.commentCount + 1
    }
  })

  return res.data
}

export const fetchComments = async (postId: string): Promise<CommentType[]> => {
  const res = await api.get(`comments?postId=${postId}`)

  return res.data
}