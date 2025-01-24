import styles from './SidebarWrapper.module.scss';

interface Props {
  children: React.ReactNode;
}

function SidebarWrapper({ children }: Props) {
  return <div className={styles.sidebar}>{children}</div>;
}

export default SidebarWrapper;
