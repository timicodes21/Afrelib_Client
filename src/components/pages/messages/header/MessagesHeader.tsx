import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { useMessagesContext } from "@/contexts/MessagesContext";
import { useChatMembers } from "@/hooks/chat/useChat";

import styles from "./styles.module.css";

const MessagesHeader = () => {
  const { unselectChat, chat, openChatModal, selectChatMembers } =
    useMessagesContext();

  const { chatMembers, fetchingMembers, data } = useChatMembers(
    chat?.chatId ?? 0,
  );

  return (
    <Box
      sx={{
        width: "100%",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <IconButton
          onClick={unselectChat}
          className={styles.mobileArrowBackButton}
        >
          <ArrowBackIosIcon fontSize="small" />
        </IconButton>

        <Avatar className={styles.headerAvatar} />
        <Typography className={styles.headerGroupName}>
          {chat?.chatName}
        </Typography>
      </Box>

      <Box>
        <Button
          className={styles.headerMembersCount}
          onClick={() => {
            openChatModal("show-members");
            selectChatMembers(chatMembers);
          }}
        >
          {fetchingMembers ? (
            <CircularProgress sx={{ color: "#000000" }} size={25} />
          ) : (
            `${chatMembers?.length} Members`
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default MessagesHeader;
