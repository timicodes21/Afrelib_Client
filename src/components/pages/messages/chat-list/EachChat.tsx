import { Avatar, Box, Typography } from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import { useMessagesContext } from "@/contexts/MessagesContext";
import styles from "@/styles/Messages.module.css";
import { chatType } from "@/types/messages";
import { useUnreadMessages } from "@/hooks/chat/useChat";
import moment from "moment";

interface IProps {
  chat: chatType;
}

const EachChatMessage = ({ chat }: IProps) => {
  const { selectChat, chat: selectedChat } = useMessagesContext();
  const { fetchingMsgs, unread_messages } = useUnreadMessages(chat.chatId);

  const { lastMessage } = chat;
  const { senderName, mediaType, timestamp, content } = lastMessage;

  const msgConent =
    mediaType === "text"
      ? content
      : mediaType === "audio"
      ? "Sent a voice note"
      : mediaType === "document"
      ? "Sent a document"
      : mediaType === "image"
      ? "Sent an image"
      : "Sent a video";

  const messagesDay = moment(timestamp);
  const currentDay = moment(new Date());
  const prevDay = moment().subtract(1, "day");
  const weekDifference = currentDay
    .startOf("day")
    .diff(messagesDay.startOf("day"), "weeks");
  const isCurrentDay = messagesDay.isSame(currentDay, "day");
  const isPrevDay = messagesDay.isSame(prevDay, "day");

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

          {weekDifference > 0 ? (
            <p className={styles.chatListChatName}>
              {moment(timestamp).format("L")}
            </p>
          ) : (
            <p className={styles.chatListChatName}>
              {isCurrentDay
                ? moment(chat.createdAt).format("LT")
                : isPrevDay
                ? "Yesterday"
                : moment(chat.createdAt).format("dddd")}
            </p>
          )}
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
            {/* Ayomide: Hello everyone how are you doing */}
            {senderName.substring(0, senderName.indexOf(" "))} : {msgConent}
          </p>
          {unread_messages > 0 && (
            <Box className={styles.chatListMessageCount}>{unread_messages}</Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default EachChatMessage;
