import { Chat } from '../../../../models/ChatModel';
import SidebarItem from '../SidebarItem/SidebarItem';
import styles from './SidebarContent.module.scss';

interface Props {
  chats: Chat[];
  onDeleteChat: (id: string) => void;
  onNavigate: (id: string) => void;
}

function SidebarContent({ chats, onDeleteChat, onNavigate }: Props) {
  return (
    <div className={styles['sidebar-content']}>
      <div className={styles['sidebar-content__title']}>Saved chats</div>
      {chats.map(
        (chat: Chat) =>
          chat.id !== 'newChat' && (
            <SidebarItem
              key={chat.id}
              id={chat.id}
              title={chat.name}
              onDeleteChat={() => onDeleteChat(chat.id)}
              hasNewMessage={chat.hasNewMessage}
              onNavigate={() => onNavigate(chat.id)}
            />
          )
      )}
    </div>
  );
}

export default SidebarContent;
