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
): Promise<CommentType> => {
  const res = await api.post('/comments', {
    ...comment,
    userId,
  })

  return res.data
}