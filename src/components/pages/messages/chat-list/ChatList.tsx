import { Box } from "@mui/material";

import EachChatMessage from "./EachChat";
import { chatType } from "@/types/messages";

interface IProps {
  chats: chatType[] | [];
}

const MessagesChatList = ({ chats }: IProps) => {
  const sortedChats = chats?.sort((a, b) => {
    const compA: any = new Date(a.lastMessage?.timestamp);
    const compB: any = new Date(b.lastMessage?.timestamp);
    return compB - compA;
  });

  return (
    <>
      {sortedChats.map(chat => {
        return <EachChatMessage key={chat.chatId} chat={chat} />;
      })}
    </>
  );
};

export default MessagesChatList;
