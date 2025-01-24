import chatActions from '../actions/chatActions';
import { useAppDispatch, useAppSelector } from './storeHooks';
import { Chat } from '../models/ChatModel';

function useChatMessages() {
  const dispatch = useAppDispatch();

  const allChats: Chat[] | [] = useAppSelector((state) => state.chat.allChats);

  function getChatMessages(id?: string) {
    if (!!id) {
      const chatMessageInState = !!allChats.find((chat) => chat.id === id)
        ?.messages;

      if (!chatMessageInState) {
        dispatch(chatActions.getAllChatMessages(id));
      }
    } else {
      dispatch(chatActions.resetMessages());
    }
  }

  return { getChatMessages };
}

export default useChatMessages;
