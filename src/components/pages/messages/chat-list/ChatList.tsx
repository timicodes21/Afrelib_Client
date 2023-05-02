import { Box } from "@mui/material";

import EachChatMessage from "./EachChat";

const MessagesChatList = () => {
  const chats = [1, 2, 3, 4, 6];
  return (
    <>
      {chats.map(chat => {
        return (
          <>
            <EachChatMessage key={chat} />
          </>
        );
      })}
    </>
  );
};

export default MessagesChatList;
