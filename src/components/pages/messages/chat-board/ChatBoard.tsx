import { Box, LinearProgress } from "@mui/material";

import styles from "./styles.module.css";
import ChatInput from "../chat-input/ChatInput";
import { useMessagesContext } from "@/contexts/MessagesContext";
import { messageType } from "../../../../types/messages";
import { useChatMessages } from "@/hooks/chat/useChat";

import EachChatBoardMessage from "./EachMessage";

const ChatMessagesBoard = () => {
  const { chat } = useMessagesContext();

  const { messages, fetchingMsgs } = useChatMessages(chat?.chatId ?? 0);

  return (
    <Box className={styles.chatBoardContainer}>
      {fetchingMsgs ? (
        <Box sx={{ width: "100%", padding: "25px", boxSizing: "border-box" }}>
          <LinearProgress sx={{ color: "#213F7D" }} />
        </Box>
      ) : (
        <>
          <Box className={styles.chatBoardMessagesContainer}>
            {messages &&
              messages.map((msg: messageType) => {
                return (
                  <>
                    <EachChatBoardMessage message={msg} key={msg.messageId} />
                  </>
                );
              })}
          </Box>
          <Box>
            <ChatInput />
          </Box>
        </>
      )}
    </Box>
  );
};

export default ChatMessagesBoard;
