import { createContext, PropsWithChildren, useContext, useState } from "react";

import { chatType, messagesContextType } from "@/types/messages";

const MessagesContext = createContext({} as messagesContextType);
const useMessagesContext = () => useContext(MessagesContext);

function MessagesProvider({ children }: PropsWithChildren) {
  const [chat, setChat] = useState<chatType | null>(null);
  const [chatModal, setChatModal] = useState<
    "create-group" | "show-members" | "add-members" | null
  >(null);

  const selectChat = (chat: chatType) => {
    console.log(chat);
    setChat(chat);
  };

  const unselectChat = () => {
    setChat(null);
  };

  const openChatModal = (
    open: "create-group" | "show-members" | "add-members",
  ) => {
    setChatModal(open);
  };

  const closeChatModal = () => {
    setChatModal(null);
  };

  return (
    <MessagesContext.Provider
      value={{
        chat,
        selectChat,
        unselectChat,
        chatModal,
        openChatModal,
        closeChatModal,
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
}

export { useMessagesContext, MessagesProvider };
