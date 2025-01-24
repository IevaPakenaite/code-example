import { useParams } from "react-router-dom";
import IconButton from "../../../../components/IconButton/IconButton";
import {
  faCircleInfo,
  faRotateRight,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import ResponseSourceContext from "../../../../contexts/ResponseSourceContext";
import Wrapper from "../../../../components/Wrapper/Wrapper";
import Avatar from "../../../../components/Avatar/Avatar";
import FeedbackModal from "../Feedback/FeedbackModal";
import { useAppDispatch } from "../../../../hooks/storeHooks";
import { Message as MessageType } from "../../../../models/MessageModel";
import chatActions from "../../../../actions/chatActions";

import styles from "./Message.module.scss";

interface Props {
  message: MessageType;
  isLast: boolean;
  showMessageLoader: boolean;
}

function Message({ message, isLast, showMessageLoader }: Props) {
  const dispatch = useAppDispatch();

  const { chatId } = useParams();

  const origin = message.isClientMessage ? "client" : "server";

  const { setSource } = useContext(ResponseSourceContext);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [messageId, setMessageId] = useState<string | undefined>("");
  const [isPositiveFeedback, setIsPositiveFeedback] = useState<boolean>(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function handleOpenRatingModal(thumbsUp: boolean) {
    openModal();
    setMessageId(message.id);
    setIsPositiveFeedback(thumbsUp);
  }

  function handleSubmitRating(feedbackText?: string) {
    dispatch(
      chatActions.sendMessageFeedback(
        messageId || "1",
        isPositiveFeedback,
        feedbackText || "",
        closeModal
      )
    );
  }

  function handleResponseRegeneration() {
    if (chatId) {
      return dispatch(chatActions.regenerateAnswer(chatId));
    }
    return;
  }

  return (
    <>
      <Wrapper>
        <div className={`${styles.message} ${styles[`message--${origin}`]}`}>
          <Avatar
            showLogo={origin === "server"}
            className={`${styles.message__avatar} ${
              styles[`message__avatar--${origin}`]
            }`}
          />
          <div
            className={`${styles.message__text} ${
              styles[`message__text--${origin}`]
            }`}
          >
            {message.text}

            {!!message.context?.length && (
              <IconButton
                icon={faCircleInfo}
                onClick={() => setSource(message.context)}
                className={styles["info-button"]}
              />
            )}
          </div>
          {origin === "server" && (
            <div className={styles.message__controls}>
              <div className={styles.message__controls__voting}>
                <IconButton
                  icon={faThumbsUp}
                  onClick={() => handleOpenRatingModal(true)}
                />
                <IconButton
                  icon={faThumbsDown}
                  onClick={() => handleOpenRatingModal(false)}
                />
              </div>
              {isLast && !showMessageLoader && (
                <IconButton
                  icon={faRotateRight}
                  onClick={handleResponseRegeneration}
                />
              )}
            </div>
          )}
        </div>
      </Wrapper>
      <FeedbackModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleSubmitRating}
        isPositive={isPositiveFeedback}
      />
    </>
  );
}

export default Message;
