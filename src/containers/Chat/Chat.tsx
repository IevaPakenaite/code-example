import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChatComponent from "./components/Chat/Chat";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { Message } from "../../models/MessageModel";
import chatActions from "../../actions/chatActions";
import { useSignalR } from "../../services/signalR";
import Loader from "../../components/Loader/Loader";
import { history } from "../../helpers/history";
import {
  ResponseModel,
  ResponseSource as ResponseSourceModel,
} from "../../models/ResponseModel";
import ResponseSource from "./components/ResponseSource/ResponseSource";
import ResponseSourceContext from "../../contexts/ResponseSourceContext";

import { userId } from "../../mockData/user";

function Chat() {
  const { chatId } = useParams();
  const dispatch = useAppDispatch();
  const connection = useSignalR();

  const loadingChat: boolean = useAppSelector(
    (state) => state.chat.loadingChat
  );
  const activeChatId: string = useAppSelector(
    (state) => state.chat.activeChatId
  );

  const messages: Message[] | [] =
    useAppSelector(
      (state) =>
        state.chat.allChats.find((chat) => chat.id === activeChatId)?.messages
    ) || [];
  const error: string | null = useAppSelector((state) => state.chat.error);

  const [failedMessage, setFailedMessage] = useState<string>("");
  const [source, setSource] = useState<ResponseSourceModel[] | undefined>([]);
  const value = { source, setSource };

  useEffect(() => {
    setFailedMessage("");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatId]);

  useEffect(() => {
    if (activeChatId !== "newChat" && activeChatId !== "") {
      history.push(activeChatId);
      return;
    }
    return;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeChatId]);

  useEffect(() => {
    // Listen for incoming messages
    connection?.on("ReceivedNewMessage", (chat, aiResponse: ResponseModel) => {
      dispatch(chatActions.receiveNewMessage(chat, aiResponse));
    });

    connection?.on(
      "ReceivedMessage",
      (chatId: string, aiResponse: ResponseModel) => {
        dispatch(chatActions.receiveMessage(chatId, aiResponse));
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connection]);

  useEffect(() => {
    if (!!error) {
      toast.error(error, {
        onClose: () => dispatch(chatActions.resetError()),
      });
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  function handleSendMessage(message?: string) {
    if (message && connection) {
      if (!!activeChatId) {
        connection
          .invoke("SendMessage", userId, activeChatId, message)
          .catch(() => setFailedMessage(message));
        dispatch(chatActions.sendMessage(message));
      } else {
        connection
          .invoke("SendNewMessage", userId, message)
          .catch(() => setFailedMessage(message));
        dispatch(chatActions.sendNewMessage(message));
      }
    }
  }

  function handleRetry() {
    handleSendMessage(failedMessage);
    setFailedMessage("");
  }

  if (loadingChat) {
    return <Loader />;
  }

  return (
    <>
      <ResponseSourceContext.Provider value={value}>
        <ChatComponent
          messages={messages}
          newChat={!chatId && !messages.length}
          sendMessageFailed={!!failedMessage}
          onSendMessage={handleSendMessage}
          onRetry={handleRetry}
        />
        <ResponseSource />
      </ResponseSourceContext.Provider>
    </>
  );
}
export default Chat;
