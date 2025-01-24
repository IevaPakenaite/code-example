import { useParams } from "react-router-dom";
import { Outlet } from "react-router";
import { useEffect, useRef } from "react";
import { useAppDispatch } from "../hooks/storeHooks";
import chatActions from "../actions/chatActions";
import useChatMessages from "../hooks/useChatMessages";

const PrivateRoute = () => {
  const useEffectShouldRun = useRef(true);
  const { chatId } = useParams();
  const dispatch = useAppDispatch();
  const { getChatMessages } = useChatMessages();

  useEffect(() => {
    if (useEffectShouldRun.current) {
      useEffectShouldRun.current = false;

      dispatch(chatActions.getAllChats());

      getChatMessages(chatId);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Outlet />;
};

export default PrivateRoute;
