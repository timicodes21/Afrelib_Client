import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import styles from "@/components/pages/messages/chat-board/styles.module.css";
import { useGlobalContext } from "@/contexts/GlobalContext";

interface IProps {
  userResponse?: boolean;
  time: string;
  message: React.ReactNode;
  now?: boolean;
}

const ChatMessageWrapper: React.FC<IProps> = ({
  userResponse,
  time,
  message,
  now,
}) => {
  const { userDetails } = useGlobalContext();
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: userResponse ? "flex-end" : "flex-start",
      }}
    >
      <Box className={styles.chatBoardEachMessage}>
        {userResponse ? (
          <Box className={styles.chatMessageAvatar}>
            <Avatar src={userDetails?.profile_image ?? ""} />
          </Box>
        ) : (
          <Box className={styles.chatMessageAvatar}>
            <Avatar src={userDetails?.profile_image ?? ""} />
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
              userResponse
                ? styles.chatBoardSentMessage
                : styles.chatBoardReceivedMessage
            }`}
          >
            {userResponse && <p className={styles.chatBoardMessageName}>Me</p>}
            {!userResponse && (
              <p className={styles.chatBoardMessageName}>Bot</p>
            )}

            <p className={styles.chatMessageText}>{message}</p>
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: userResponse ? "flex-end" : "space-between",
            }}
          >
            <p className={styles.chatBoardMessageTime}>
              {!now && time.split(" ")[1].toString()
                ? time.split(" ")[1].toString()
                : ""}
              {now && "Now"}
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatMessageWrapper;
