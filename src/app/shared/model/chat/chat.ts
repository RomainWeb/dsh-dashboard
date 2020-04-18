export interface Chat {
  id: number;
  user: User;
  lastDate: Date;
  isRead: boolean;
  unreadMessageCount: number;
  lastMessage: string;
}

export class User {
  id: number;
  username: string;
  lastname: string;
  firstname: string;
  avatar: string;
}