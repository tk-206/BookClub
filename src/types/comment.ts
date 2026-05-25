import { api } from "../api/client";
import type { User } from "./user";

export interface CommentType {
  id: string,
  userId: User,
  content: string,
  createAt: string,
  isSecret: boolean,
  parentId: string | null,
  postId: string
}

export const createComment = async (
  comment: Omit<CommentType, 'id'>,
  userId: string,
  postId: string,
  parentId?: string,
): Promise<CommentType> => {
  const res = await api.post('/comments', {
    ...comment,
    userId,
    postId,
    createAt: new Date().toISOString(),
    parentId: parentId ?? null,
  })

  return res.data
}

export const fetchComments = async (postId: string): Promise<CommentType[]> => {
  const res = await api.get(`comments?postid=${postId}`)

  return res.data
}