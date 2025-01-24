import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../../components/Button/Button';

import styles from './SidebarFooter.module.scss';

interface Props {
  onLogout: () => void;
}

function SidebarFooter({ onLogout }: Props) {
  return (
    <div className={styles['sidebar-footer']}>
      <Button
        label='Logout'
        onClick={onLogout}
        icon={faArrowRightFromBracket}
        secondary
      />
    </div>
  );
}

export default SidebarFooter;
