import { Box } from "@mui/material";

import EachChatMessage from "./EachChat";
import { chatType } from "@/types/messages";

interface IProps {
  chats: chatType[] | [];
}

const MessagesChatList = ({ chats }: IProps) => {
  return (
    <>
      {chats.map(chat => {
        return <EachChatMessage key={chat.chatId} chat={chat} />;
      })}
    </>
  );
};

export default MessagesChatList;
