import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import logo from "../../../../assets/logo.svg";
import Button from "../../../../components/Button/Button";
import { useAppSelector } from "../../../../hooks/storeHooks";

import styles from "./SidebarHeader.module.scss";

interface Props {
  onNewChat: () => void;
}

function SidebarHeader({ onNewChat }: Props) {
  const newChatInProgress: boolean = !!useAppSelector((state) =>
    state.chat.allChats.find((chat) => chat.id === "newChat")
  );

  return (
    <div className={styles["sidebar-header"]}>
      <img
        src={logo}
        alt="Application logo"
        className={styles["sidebar-header__logo"]}
      />
      <Button
        label="New chat"
        onClick={onNewChat}
        icon={faPenToSquare}
        disabled={newChatInProgress}
      />
    </div>
  );
}

export default SidebarHeader;
