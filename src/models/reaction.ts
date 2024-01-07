import { User } from "./user";

export interface Reaction {
  id: string;
  user: User;
  entityId: string;
  entityType: string;
  reactType: string;
  createTime: Date;
}
