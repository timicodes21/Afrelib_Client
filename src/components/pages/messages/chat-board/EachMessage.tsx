import { Avatar, Box, Typography } from "@mui/material";

import { messageType } from "../../../../types/messages";

import styles from "./styles.module.css";
import { useGlobalContext } from "@/contexts/GlobalContext";
import dayjs from "dayjs";

interface componentProps {
  message: messageType;
}

const EachChatBoardMessage = ({ message }: componentProps) => {
  const { userDetails } = useGlobalContext();

  const userId = String(userDetails.id);
  const senderId = String(message.senderId);

  const isSent = userId === senderId;

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: isSent ? "flex-end" : "flex-start",
      }}
    >
      <Box className={styles.chatBoardEachMessage}>
        {!isSent && (
          <Box className={styles.chatMessageAvatar}>
            <Avatar src={message.avatar} />
          </Box>
        )}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            marginBottom: "25px",
          }}
        >
          <Box
            className={`${styles.chatBoardMessageContainer} ${
              isSent
                ? styles.chatBoardSentMessage
                : styles.chatBoardReceivedMessage
            }`}
          >
            <Typography className={styles.chatMessageText}>
              {message.content}
            </Typography>
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: isSent ? "flex-end" : "space-between",
            }}
          >
            {!isSent && (
              <Typography className={styles.chatBoardMessageTime}>
                {message.senderName}
              </Typography>
            )}
            <Typography className={styles.chatBoardMessageTime}>
              {dayjs(message.timestamp).format("h:mm A	")}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EachChatBoardMessage;
