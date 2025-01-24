import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import styles from './IconButton.module.scss';

interface Props {
  icon: IconDefinition;
  disabled?: boolean;
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function IconButton({ icon, disabled, className, onClick }: Props) {
  return (
    <button
      className={`${styles.button} ${!!className ? className : ''}`}
      onClick={(e) => onClick(e)}
      disabled={disabled}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}

export default IconButton;
