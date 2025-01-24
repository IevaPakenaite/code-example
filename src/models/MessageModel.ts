import { ResponseSource } from "./ResponseModel";

export interface Message {
  text: string;
  isClientMessage: boolean;
  context?: ResponseSource[];
  id?: string;
}
