export interface Chat {
  id: number;
  user: User;
  lastDate: Date;
  isRead: boolean;
  lastMessage: string;
}

export class User {
  id: number;
  username: string;
  lastname: string;
  avatar: string;
}