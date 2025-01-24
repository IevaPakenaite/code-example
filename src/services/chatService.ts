import axios from "axios";
import { userId } from "../mockData/user";

const baseURL = "http://localhost:5000/api";

const axiosInstance = axios.create({
  baseURL,
  headers: { userId },
});

const chatService = {
  getAllChats: async () => {
    try {
      const token = "fake";
      const response = await axiosInstance.get("chats", {
        headers: { authorization: "Bearer " + token },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getAllChatMessages: async (chatId: string) => {
    try {
      const token = "fake";
      const response = await axiosInstance.get(`chats/${chatId}`, {
        headers: { authorization: "Bearer " + token },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteChat: async (chatId: string) => {
    try {
      const token = "fake";
      const response = await axiosInstance.delete(`chats/${chatId}`, {
        headers: { authorization: "Bearer " + token },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  sendMessageFeedback: async (
    messageId: string,
    isPositive: boolean,
    feedbackText: string
  ) => {
    try {
      const token = "fake";
      const response = await axiosInstance.post(
        "/feedback",
        {
          messageId,
          isPositive,
          feedbackText,
        },
        {
          headers: { authorization: "Bearer " + token },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  regenerateAnswer: async (chatId: string) => {
    try {
      const token = "fake";
      const response = await axiosInstance.post(
        "chats/regenerate",
        {
          chatId,
        },
        {
          headers: { authorization: "Bearer " + token },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default chatService;
