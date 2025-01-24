import { useEffect, useRef } from "react";
import { useAppSelector } from "../../../../hooks/storeHooks";
import MessageLoader from "../Message/MessageLoader";
import MessageInput from "../MessageInput/MessageInput";
import Message from "../Message/Message";
import Wrapper from "../../../../components/Wrapper/Wrapper";
import NewChatInfo from "../NewChatInfo/NewChatInfo";
import { Message as MessageType } from "../../../../models/MessageModel";
import Button from "../../../../components/Button/Button";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./Chat.module.scss";

interface Props {
  messages: MessageType[];
  newChat: boolean;
  sendMessageFailed: boolean;
  onSendMessage: (message?: string) => void;
  onRetry: () => void;
}

function Chat({
  messages,
  newChat,
  sendMessageFailed,
  onSendMessage,
  onRetry,
}: Props) {
  const chatbox = useRef<HTMLDivElement>(null);
  const activeChatId: string = useAppSelector(
    (state) => state.chat.activeChatId
  );
  const waitingForResponse: boolean =
    useAppSelector((state) =>
      state.chat.allChats.find((chat) => chat.id === activeChatId)
    )?.waitingForResponse || false;

  const showMessageLoader = waitingForResponse && !sendMessageFailed;

  useEffect(() => chatbox.current?.scrollIntoView(false), [messages]);

  return (
    <div className={styles.chat}>
      {newChat ? (
        <NewChatInfo />
      ) : (
        <div className={styles.chat__messages}>
          <div ref={chatbox} className={styles.chat__messages__chatbox}>
            {messages.map((message, index) => (
              <Message
                key={index}
                message={message}
                isLast={index === messages.length - 1}
                showMessageLoader={showMessageLoader}
              />
            ))}
            {showMessageLoader && <MessageLoader />}
          </div>
        </div>
      )}
      <Wrapper>
        {sendMessageFailed ? (
          <div className={styles.chat__retry}>
            <p>Failed to send message</p>
            <Button
              label="Retry"
              secondary
              icon={faRotateRight}
              onClick={onRetry}
            />
          </div>
        ) : (
          <MessageInput
            onSendMessage={onSendMessage}
            disabled={waitingForResponse}
          />
        )}
      </Wrapper>
    </div>
  );
}
export default Chat;
