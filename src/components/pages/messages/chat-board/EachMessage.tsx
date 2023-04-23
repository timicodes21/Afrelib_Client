import { Avatar, Box, Typography } from "@mui/material";

import { messageType } from "../../../../types/messages";

import styles from "./styles.module.css";

interface componentProps {
  message: messageType;
}

const EachChatBoardMessage = ({ message }: componentProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: message.isSent ? "flex-end" : "flex-start",
      }}
    >
      <Box className={styles.chatBoardEachMessage}>
        {!message.isSent && (
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
              message.isSent
                ? styles.chatBoardSentMessage
                : styles.chatBoardReceivedMessage
            }`}
          >
            <Typography className={styles.chatMessageText}>
              {message.message}
            </Typography>
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: message.isSent ? "flex-end" : "space-between",
            }}
          >
            {/* {!message.isSent && (
              <Typography className={styles.chatBoardMessageTime}>
                {message.name}
              </Typography>
            )} */}
            <Typography className={styles.chatBoardMessageTime}>
              8:30am
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EachChatBoardMessage;
