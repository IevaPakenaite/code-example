import { Dispatch } from "redux";
import { AxiosError } from "axios";
import {
  getAllChatsRequest,
  getAllChatsSuccess,
  getAllChatsError,
  getAllChatMessagesRequest,
  getAllChatMessagesSuccess,
  getAllChatMessagesError,
  sendMessageRequest,
  sendNewMessageRequest,
  receiveMessageRequest,
  receiveNewMessageRequest,
  resetMessagesRequest,
  createNewChatRequest,
  setActiveChatIdRequest,
  resetActiveChatIdRequest,
  deleteChatRequest,
  deleteChatSuccess,
  deleteChatError,
  resetErrorRequest,
  sendMessageFeedbackRequest,
  sendMessageFeedbackSuccess,
  sendMessageFeedbackError,
  regenerateAnswerRequest,
  regenerateAnswerSuccess,
  regenerateAnswerError,
} from "../slices/chatSlice";
import chatService from "../services/chatService";
import { Chat } from "../models/ChatModel";

import { Message } from "../models/MessageModel";
import { ResponseModel } from "../models/ResponseModel";

function getAllChats() {
  return (dispatch: Dispatch) => {
    dispatch(getAllChatsRequest());

    chatService
      .getAllChats()
      .then((res: Chat[]) => {
        dispatch(getAllChatsSuccess(res));
      })
      .catch((error: AxiosError) => {
        dispatch(getAllChatsError(error.message));
      });
  };
}

function getAllChatMessages(chatId: string) {
  return (dispatch: Dispatch) => {
    dispatch(getAllChatMessagesRequest(chatId));

    chatService
      .getAllChatMessages(chatId)
      .then((messages: Message[]) => {
        dispatch(getAllChatMessagesSuccess(messages));
      })
      .catch((error: AxiosError) => {
        dispatch(getAllChatMessagesError(error.message));
      });
  };
}

function createNewChat(chat: Chat) {
  return (dispatch: Dispatch) => {
    dispatch(createNewChatRequest(chat));
  };
}

function sendMessage(messageText: string) {
  return (dispatch: Dispatch) => {
    dispatch(sendMessageRequest(messageText));
  };
}

function sendNewMessage(messageText: string) {
  return (dispatch: Dispatch) => {
    dispatch(sendNewMessageRequest(messageText));
  };
}

function receiveMessage(chatId: string, message: ResponseModel) {
  return (dispatch: Dispatch) => {
    dispatch(receiveMessageRequest({ chatId, message }));
  };
}

function receiveNewMessage(chat: Chat, message: ResponseModel) {
  return (dispatch: Dispatch) => {
    dispatch(receiveNewMessageRequest({ chat, message }));
  };
}

function deleteChat(chatId: string, callback?: () => void) {
  return async (dispatch: Dispatch) => {
    dispatch(deleteChatRequest());

    chatService
      .deleteChat(chatId)
      .then(() => {
        dispatch(deleteChatSuccess(chatId));
        callback && callback();
      })
      .catch((error: AxiosError) => {
        dispatch(deleteChatError(error.message));
      });
  };
}

function resetMessages() {
  return (dispatch: Dispatch) => {
    dispatch(resetMessagesRequest());
  };
}

function setActiveChatId(id: string) {
  return (dispatch: Dispatch) => {
    dispatch(setActiveChatIdRequest(id));
  };
}

function resetActiveChatId() {
  return (dispatch: Dispatch) => {
    dispatch(resetActiveChatIdRequest());
  };
}

function resetError() {
  return (dispatch: Dispatch) => {
    dispatch(resetErrorRequest());
  };
}

function sendMessageFeedback(
  messageId: string,
  isPositive: boolean,
  feedbackText: string,
  callback?: () => void
) {
  return (dispatch: Dispatch) => {
    dispatch(sendMessageFeedbackRequest());

    chatService
      .sendMessageFeedback(messageId, isPositive, feedbackText)
      .then(() => {
        dispatch(sendMessageFeedbackSuccess());
        callback && callback();
      })
      .catch((error: AxiosError) => {
        dispatch(sendMessageFeedbackError(error.message));
      });
  };
}

function regenerateAnswer(chatId: string, callback?: () => void) {
  return (dispatch: Dispatch) => {
    dispatch(regenerateAnswerRequest(chatId));

    chatService
      .regenerateAnswer(chatId)
      .then((message) => {
        dispatch(regenerateAnswerSuccess({ chatId, message }));
        callback && callback();
      })
      .catch((error: AxiosError) => {
        dispatch(regenerateAnswerError({ chatId, error: error.message }));
      });
  };
}

const chatActions = {
  getAllChats,
  getAllChatMessages,
  createNewChat,
  sendMessage,
  sendNewMessage,
  receiveMessage,
  receiveNewMessage,
  resetMessages,
  setActiveChatId,
  resetActiveChatId,
  deleteChat,
  resetError,
  sendMessageFeedback,
  regenerateAnswer,
};

export default chatActions;
