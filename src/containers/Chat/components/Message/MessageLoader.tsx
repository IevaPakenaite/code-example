import Wrapper from "../../../../components/Wrapper/Wrapper";
import Avatar from "../../../../components/Avatar/Avatar";

import styles from "./Message.module.scss";
import DotPulseLoader from "../../../../components/DotPulseLoader/DotPulseLoader";

function MessageLoader() {
  return (
    <Wrapper>
      <div className={`${styles.message} ${styles[`message--server`]}`}>
        <Avatar
          showLogo
          className={`${styles.message__avatar} ${
            styles[`message__avatar--server`]
          }`}
        />

        <div
          className={`${styles.message__text} ${
            styles[`message__text--server`]
          }`}
        >
          <DotPulseLoader />
        </div>
      </div>
    </Wrapper>
  );
}

export default MessageLoader;
