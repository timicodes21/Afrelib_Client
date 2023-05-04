import { createContext, PropsWithChildren, useContext, useState } from "react";

import { chatType, messagesContextType } from "@/types/messages";

const MessagesContext = createContext({} as messagesContextType);
const useMessagesContext = () => useContext(MessagesContext);

function MessagesProvider({ children }: PropsWithChildren) {
  const [chat, setChat] = useState<chatType | null>(null);
  const [createGroupModal, setCreateGroupModal] = useState(false);

  const selectChat = (chat: chatType) => {
    setChat(chat);
  };

  const unselectChat = () => {
    setChat(null);
  };

  const openCreateGroupModal = () => {
    setCreateGroupModal(true);
  };

  const closeCreateGroupModal = () => {
    setCreateGroupModal(false);
  };

  return (
    <MessagesContext.Provider value={{ chat, selectChat, unselectChat }}>
      {children}
    </MessagesContext.Provider>
  );
}

export { useMessagesContext, MessagesProvider };
