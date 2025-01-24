import messageLogo from "../../assets/logo.svg";

import styles from "./Avatar.module.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  showLogo?: boolean;
  className?: string;
}

function Avatar({ showLogo, className }: Props) {
  return (
    <div className={`${styles.avatar} ${className}`}>
      {showLogo ? (
        <img
          src={messageLogo}
          alt="Sender message indicator"
          className={styles.avatar__logo}
        />
      ) : (
        "You"
      )}
    </div>
  );
}

export default Avatar;
