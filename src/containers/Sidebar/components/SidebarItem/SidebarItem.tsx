import { useAppSelector } from '../../../../hooks/storeHooks';
import IconButton from '../../../../components/IconButton/IconButton';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import Modal from '../../../../components/Modal/Modal';
import { useState } from 'react';

import styles from './SidebarItem.module.scss';

interface Props {
  id: string;
  title: string;
  hasNewMessage?: boolean;
  onDeleteChat: () => void;
  onNavigate: () => void;
}

function SidebarItem({
  id,
  title,
  hasNewMessage,
  onDeleteChat,
  onNavigate,
}: Props) {
  const activeChatId: string = useAppSelector(
    (state) => state.chat.activeChatId
  );
  const loadingDelete: boolean = useAppSelector(
    (state) => state.chat.loadingDelete
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showNotification = activeChatId !== id && hasNewMessage;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  function handleNavigation() {
    if (activeChatId === id) {
      return;
    }

    onNavigate();

    return;
  }

  function handleDeleteChat(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.stopPropagation();
    openModal();
  }

  return (
    <>
      <div
        onClick={handleNavigation}
        className={`${styles['sidebar-item']} ${
          activeChatId === id ? styles['sidebar-item--active'] : ''
        }`}
      >
        <div
          className={`${styles['sidebar-item__title']} ${
            showNotification ? styles['sidebar-item__title--notification'] : ''
          }`}
        >
          {showNotification && (
            <div className={styles['sidebar-item__notification']} />
          )}
          {title}
        </div>

        <IconButton
          icon={faTrashCan}
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            handleDeleteChat(e)
          }
          className={styles['sidebar-item__trashcan']}
        />
      </div>

      <Modal
        header='Delete chat?'
        actionButtonTitle='Delete'
        isOpen={isModalOpen}
        isLoading={loadingDelete}
        onClose={closeModal}
        onAction={onDeleteChat}
      >
        <p>
          This will delete <b>{title}</b>.
        </p>
      </Modal>
    </>
  );
}

export default SidebarItem;
