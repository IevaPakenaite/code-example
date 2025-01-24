import { useCallback, useEffect, useRef, useState } from 'react';
import IconButton from '../IconButton/IconButton';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './ResizableSidebar.module.scss';

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  title?: string;
  onClose: () => void;
}

function ResizableSidebar({ children, isOpen, title, onClose }: Props) {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(268);

  const startResizing = useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (mouseMoveEvent: MouseEvent) => {
      const rect = sidebarRef.current?.getBoundingClientRect();

      if (isResizing && rect) {
        setSidebarWidth(rect?.right - mouseMoveEvent.clientX);
      }
    },
    [isResizing]
  );

  useEffect(() => {
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResizing);

    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <div
      ref={sidebarRef}
      className={`${styles.sidebar} ${isOpen ? styles['sidebar--open'] : ''}`}
      style={{ width: sidebarWidth }}
    >
      <div className={styles.sidebar__resizer} onMouseDown={startResizing} />
      <div className={styles.sidebar__content}>
        <div className={styles.sidebar__content__header}>
          <div className={styles.sidebar__content__header__title}>{title}</div>
          <IconButton icon={faCircleXmark} onClick={onClose} />
        </div>
        {children}
      </div>
    </div>
  );
}

export default ResizableSidebar;
