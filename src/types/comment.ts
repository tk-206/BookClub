import type { User } from "./user";

export interface Comment {
  id: string,
  author: User,
  content: string,
  createdAt: string,
  isSecret: boolean,
  replies?: Comment[],
}