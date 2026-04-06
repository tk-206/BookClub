import type { User } from "./user";
import type { Comment } from "./comment";

export interface Post {
  id: string,
  category: string,
  title: string,
  content: string,
  isRead: boolean,
  author: User,
  createdAt: string,
  stats: PostStats,
  tags: string[],
  isSecret: boolean,
  comments: Comment[],
}

export interface PostStats {
    like: number,
    commentCount: number,
    view: number,
}
