import logo from "../../../../assets/logo.svg";
import styles from "./NewChatInfo.module.scss";

function NewChatInfo() {
  return (
    <div className={styles["new-chat-info"]}>
      <img
        src={logo}
        alt="Application logo"
        className={styles["new-chat-info__logo"]}
      />
      <div className={styles["new-chat-info__text"]}>
        Start your new chat here.
      </div>
    </div>
  );
}

export default NewChatInfo;
