import { Avatar, Box, Typography } from "@mui/material";

import { messageType } from "../../../../types/messages";

import styles from "./styles.module.css";
import { useGlobalContext } from "@/contexts/GlobalContext";
import dayjs from "dayjs";
import MessageImageType from "./message-type/image/Image";
import MessageVideoType from "./message-type/video/Video";
import MessageAudioType from "./message-type/audio/Audio";
import MessageDocumentType from "./message-type/document/Document";

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

        {message.mediaType === "audio" && (
          <MessageAudioType message={message} />
        )}
        {message.mediaType === "image" && (
          <MessageImageType message={message} />
        )}
        {message.mediaType === "video" && (
          <MessageVideoType message={message} />
        )}
        {message.mediaType === "document" && (
          <MessageDocumentType message={message} />
        )}
        {message.mediaType === "text" && (
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
              {!isSent && (
                <p className={styles.chatBoardMessageName}>
                  {message.senderName}
                </p>
              )}

              <p className={styles.chatMessageText}>{message.content}</p>
            </Box>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: isSent ? "flex-end" : "space-between",
              }}
            >
              <p className={styles.chatBoardMessageTime}>
                {dayjs(message.timestamp).format("h:mm A	")}
              </p>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default EachChatBoardMessage;
