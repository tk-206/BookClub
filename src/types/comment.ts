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
  likeCount: number,
  likeUserIds: string[],
}

export type CreateCommentInput = {
  content: string
  isSecret: boolean
}


export type ToggleLikeInput = {
  commentId: string
  userId: string
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
    likeCount: 0,
    likeUserIds: [],
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

export const toggleCommentLike = async (
  commentId: string,
  userId: string,
): Promise<CommentType> => {
  const res = await api.get(`/comments/${commentId}`)

  const comment: CommentType = res.data

  const alreadyLiked =
    comment.likeUserIds.includes(userId)

  const updatedComment = {
    likeCount: alreadyLiked
      ? comment.likeCount - 1
      : comment.likeCount + 1,

    likeUserIds: alreadyLiked
      ? comment.likeUserIds.filter(
          id => id !== userId
        )
      : [...comment.likeUserIds, userId],
  }

  const updated = await api.patch(
    `/comments/${commentId}`,
    updatedComment
  )

  return updated.data
}