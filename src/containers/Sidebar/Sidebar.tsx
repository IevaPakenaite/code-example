import { history } from "../../helpers/history";
import SidebarWrapper from "./components/SidebarWrapper/SidebarWrapper";
import SidebarHeader from "./components/SidebarHeader/SidebarHeader";
import SidebarContent from "./components/SidebarContent/SidebarContent";
import SidebarFooter from "./components/SidebarFooter/SidebarFooter";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { Chat } from "../../models/ChatModel";
import chatActions from "../../actions/chatActions";
import useChatMessages from "../../hooks/useChatMessages";

function Sidebar() {
  const dispatch = useAppDispatch();

  const chats: Chat[] = useAppSelector((state) => state.chat.allChats);
  const activeChatId: string = useAppSelector(
    (state) => state.chat.activeChatId
  );

  const { getChatMessages } = useChatMessages();

  function handleLogout() {
    console.log("Logging out...");
  }

  function handleNewChat() {
    history.push("/");
    dispatch(chatActions.resetMessages());
    dispatch(chatActions.resetActiveChatId());
  }

  function handleDeleteChat(id: string) {
    function callback() {
      if (id === activeChatId) {
        return handleNewChat();
      }
    }

    dispatch(chatActions.deleteChat(id, callback));
  }

  function handleNavigation(id: string) {
    history.push(`/${id}`);
    dispatch(chatActions.setActiveChatId(id));

    getChatMessages(id);
  }

  return (
    <SidebarWrapper>
      <SidebarHeader onNewChat={handleNewChat} />
      <SidebarContent
        chats={chats}
        onDeleteChat={handleDeleteChat}
        onNavigate={handleNavigation}
      />
      <SidebarFooter onLogout={handleLogout} />
    </SidebarWrapper>
  );
}

export default Sidebar;
