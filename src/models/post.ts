import { User } from "./user";

export interface Post {
  id: string;
  user: User;
  header: string;
  desc: string;
  body: string;
  createTime: Date;
}
