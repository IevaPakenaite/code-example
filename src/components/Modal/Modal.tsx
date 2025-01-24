import React from 'react';

import styles from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  isLoading: boolean;
  header?: string;
  actionButtonTitle: string;
  children: React.ReactNode;
  onClose: () => void;
  onAction: () => void;
}

function Modal({
  isOpen,
  isLoading,
  header,
  actionButtonTitle,
  onClose,
  onAction,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modal__content}>
       {header &&  <h2>{header}</h2>}
        <div>{children}</div>
        <div className={styles.modal__footer}>
          <button onClick={onClose} disabled={isLoading}>
            Cancel
          </button>
          <button
            className={styles.primary}
            onClick={onAction}
            disabled={isLoading}
          >
            {actionButtonTitle}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
