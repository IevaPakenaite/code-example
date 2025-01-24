import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import styles from "./Button.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: IconDefinition;
  secondary?: boolean;
}

function Button({ label, icon, secondary, ...rest }: Props) {
  return (
    <button
      className={`${styles.button} ${
        secondary ? styles["button__secondary"] : ""
      }`}
      {...rest}
    >
      <span
        className={`${styles.label} ${
          secondary ? styles["label__secondary"] : ""
        }`}
      >
        {label}
      </span>
      {icon && <FontAwesomeIcon className={styles.icon} icon={icon} />}
    </button>
  );
}
export default Button;
