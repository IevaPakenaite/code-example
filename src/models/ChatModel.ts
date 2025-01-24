import { Message } from './MessageModel';

export interface Chat {
  id: string;
  userId: string;
  name: string;
  messages: Message[] | [];
  waitingForResponse?: boolean;
  hasNewMessage?: boolean;
}
