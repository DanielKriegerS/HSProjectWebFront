export interface Post {
  id?: string;
  userId: string;
  header: string;
  desc: string;
  body: string;
  createTime?: Date;
}
