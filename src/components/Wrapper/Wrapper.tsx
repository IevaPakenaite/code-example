import styles from "./Wrapper.module.scss";

interface Props {
  children: React.ReactNode;
}

function Wrapper({ children }: Props) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default Wrapper;
