import { User } from "./user";
import { Post } from "./post";

export interface Comment {
  id: string;
  user: User;
  post: Post;
  body: string;
  createTime: Date;
}
