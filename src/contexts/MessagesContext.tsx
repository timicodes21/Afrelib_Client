import { createContext, PropsWithChildren, useContext, useState } from "react";

import { chatType, messagesContextType } from "@/types/messages";

const MessagesContext = createContext({} as messagesContextType);
const useMessagesContext = () => useContext(MessagesContext);

function MessagesProvider({ children }: PropsWithChildren) {
  const [chat, setChat] = useState<chatType | null>(null);

  const selectChat = (chat: chatType) => {
    setChat(chat);
  };

  const unselectChat = () => {
    setChat(null);
  };

  return (
    <MessagesContext.Provider value={{ chat, selectChat, unselectChat }}>
      {children}
    </MessagesContext.Provider>
  );
}

export { useMessagesContext, MessagesProvider };

//import { createContext, useState, useContext } from "react";
//import { Artist, ArtistContextType } from "types";

// export const MessagesContextProvider =
//   createContext<messagesContextType | null>(null);

// export const useArtistContext = () =>
//   useContext(MessagesContextProvider) as messagesContextType;

// const MessagesProvider = ({ children }: any) => {
//   const [chat, setChat] = useState<chatType | null>(null);

//   const selectChat = (chat: chatType) => {
//     setChat(chat);
//   };

//   const unselectChat = () => {
//     setChat(null);
//   };

//   return (
//     <MessagesContextProvider.Provider
//       value={{ chat, selectChat, unselectChat }}
//     >
//       {children}
//     </MessagesContextProvider.Provider>
//   );
// };

// export default MessagesProvider;
