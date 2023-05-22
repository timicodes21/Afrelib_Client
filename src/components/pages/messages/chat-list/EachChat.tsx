import { Avatar, Box, Typography } from "@mui/material";

import { useMessagesContext } from "@/contexts/MessagesContext";
import styles from "@/styles/Messages.module.css";
import { chatType } from "@/types/messages";

interface IProps {
  chat: chatType;
}

const EachChatMessage = ({ chat }: IProps) => {
  const { selectChat, chat: selectedChat } = useMessagesContext();

  return (
    <Box
      className={styles.chatListChatEachChat}
      onClick={() => selectChat(chat)}
      sx={{
        background:
          chat.chatId === selectedChat?.chatId ? "#e9f1fd" : "#ffffff",
      }}
    >
      <Avatar
        sx={{
          width: 37.7,
          height: 37.7,
          mr: 0.8,
        }}
      />

      <Box
        sx={{
          width: "calc(100% - 52px)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <p className={styles.chatListChatName}>{chat.chatName}</p>

          <p className={styles.chatListChatName}>8:30 AM</p>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <p className={styles.chatListChatLastMsg}>
            Ayomide: Hello everyone how are you doing
          </p>

          <Box className={styles.chatListMessageCount}>1</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EachChatMessage;
