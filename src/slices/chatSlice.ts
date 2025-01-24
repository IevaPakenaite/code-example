import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Chat } from "../models/ChatModel";
import { Message } from "../models/MessageModel";
import { userId } from "../mockData/user";
import { ResponseModel } from "../models/ResponseModel";
import messages from "../mockData/messages";

interface ChatSliceState {
  loadingChat: boolean;
  loadingDelete: boolean;
  loadingSendFeedback: boolean;
  navigationDisabled: boolean;
  newMessage: Message[];
  error: string | null;
  allChats: Chat[] | [];
  activeChatId: string;
}

const initialState: ChatSliceState = {
  loadingChat: false,
  loadingDelete: false,
  loadingSendFeedback: false,
  navigationDisabled: false,
  newMessage: [],
  error: null,
  allChats: [],
  activeChatId: "",
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    getAllChatsRequest: (state) => {
      state.error = null;
      state.allChats = [];
    },
    getAllChatsSuccess: (state, action: PayloadAction<Chat[]>) => {
      state.error = null;
      state.allChats = messages;
    },
    getAllChatsError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      // state.allChats = [];
      state.allChats = messages;
    },
    getAllChatMessagesRequest: (state, action: PayloadAction<string>) => {
      state.loadingChat = true;
      state.error = null;
      state.activeChatId = action.payload;
    },
    getAllChatMessagesSuccess: (state, action: PayloadAction<Message[]>) => {
      state.loadingChat = false;
      state.error = null;
      state.allChats = state.allChats.map((chat) =>
        chat.id === state.activeChatId
          ? { ...chat, messages: action.payload }
          : chat
      );
    },
    getAllChatMessagesError: (state, action: PayloadAction<string>) => {
      state.loadingChat = false;
      state.error = action.payload;
    },
    createNewChatRequest: (state, action: PayloadAction<Chat>) => {
      state.allChats = [...state.allChats, action.payload];
      state.activeChatId = action.payload.id;
    },
    sendMessageRequest: (state, action: PayloadAction<string>) => {
      state.error = null;
      state.allChats = state.allChats.map((chat) =>
        chat.id === state.activeChatId
          ? {
              ...chat,
              messages: [
                ...chat.messages,
                { isClientMessage: true, text: action.payload },
              ],
              waitingForResponse: true,
            }
          : chat
      );
    },
    sendNewMessageRequest: (state, action: PayloadAction<string>) => {
      state.error = null;
      state.navigationDisabled = true;
      state.activeChatId = "newChat";
      state.allChats = [
        ...state.allChats,
        {
          id: "newChat",
          userId: userId,
          name: action.payload,
          messages: [{ text: action.payload, isClientMessage: true }],
          waitingForResponse: true,
        },
      ];
    },
    receiveMessageRequest: (
      state,
      action: PayloadAction<{ chatId: string; message: ResponseModel }>
    ) => {
      state.error = null;
      state.allChats = state.allChats.map((chat) =>
        chat.id === action.payload.chatId
          ? {
              ...chat,
              messages: [
                ...chat.messages,
                {
                  isClientMessage: false,
                  text: action.payload.message.response,
                  context: action.payload.message.sources,
                },
              ],
              waitingForResponse: false,
              hasNewMessage: action.payload.chatId !== state.activeChatId,
            }
          : chat
      );
    },
    receiveNewMessageRequest: (
      state,
      action: PayloadAction<{ chat: Chat; message: ResponseModel }>
    ) => {
      state.error = null;
      state.activeChatId =
        state.activeChatId === "newChat"
          ? action.payload.chat.id
          : state.activeChatId;
      state.allChats = state.allChats.map((chat) =>
        chat.id === "newChat"
          ? {
              ...action.payload.chat,
              messages: [
                ...chat.messages,
                {
                  isClientMessage: false,
                  text: action.payload.message.response,
                  context: action.payload.message.sources,
                },
              ],
              waitingForResponse: false,
              hasNewMessage: action.payload.chat.id !== state.activeChatId,
            }
          : chat
      );
    },
    resetMessagesRequest: (state) => {
      state.error = null;
    },
    setActiveChatIdRequest: (state, action: PayloadAction<string>) => {
      state.activeChatId = action.payload;
      state.allChats = state.allChats.map((chat) =>
        chat.id === action.payload
          ? {
              ...chat,
              hasNewMessage: false,
            }
          : chat
      );
    },
    resetActiveChatIdRequest: (state) => {
      state.activeChatId = "";
    },
    deleteChatRequest: (state) => {
      state.loadingDelete = true;
    },
    deleteChatSuccess: (state, action: PayloadAction<string>) => {
      state.loadingDelete = false;
      state.allChats = state.allChats.filter(
        (chat) => chat.id !== action.payload
      );
    },
    deleteChatError: (state, action: PayloadAction<string>) => {
      state.loadingDelete = false;
      state.error = action.payload;
    },
    resetErrorRequest: (state) => {
      state.error = "";
    },
    sendMessageFeedbackRequest: (state) => {
      state.loadingSendFeedback = true;
    },
    sendMessageFeedbackSuccess: (state) => {
      state.loadingSendFeedback = false;
    },
    sendMessageFeedbackError: (state, action: PayloadAction<string>) => {
      state.loadingSendFeedback = false;
      state.error = action.payload;
    },
    regenerateAnswerRequest: (state, action: PayloadAction<string>) => {
      state.allChats = state.allChats.map((chat) =>
        chat.id === action.payload
          ? {
              ...chat,
              messages: [...chat.messages.slice(0, -1)],
              waitingForResponse: true,
            }
          : chat
      );
    },
    regenerateAnswerSuccess: (
      state,
      action: PayloadAction<{ chatId: string; message: ResponseModel }>
    ) => {
      state.allChats = state.allChats.map((chat) =>
        chat.id === action.payload.chatId
          ? {
              ...chat,
              messages: [
                ...chat.messages,
                {
                  isClientMessage: false,
                  text: action.payload.message.response,
                  context: action.payload.message.sources,
                },
              ],
              waitingForResponse: false,
              hasNewMessage: action.payload.chatId !== state.activeChatId,
            }
          : chat
      );
    },
    regenerateAnswerError: (
      state,
      action: PayloadAction<{ chatId: string; error: string }>
    ) => {
      state.allChats = state.allChats.map((chat) =>
        chat.id === action.payload.chatId
          ? {
              ...chat,
              waitingForResponse: false,
            }
          : chat
      );
      state.error = action.payload.error;
    },
  },
});

export const {
  getAllChatsRequest,
  getAllChatsSuccess,
  getAllChatsError,
  getAllChatMessagesRequest,
  getAllChatMessagesSuccess,
  getAllChatMessagesError,
  createNewChatRequest,
  sendMessageRequest,
  sendNewMessageRequest,
  receiveMessageRequest,
  receiveNewMessageRequest,
  resetMessagesRequest,
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
} = chatSlice.actions;
export default chatSlice.reducer;
