import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { useMessagesContext } from "@/contexts/MessagesContext";

import styles from "./styles.module.css";

const MessagesHeader = () => {
  const { unselectChat, chat, openChatModal } = useMessagesContext();

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
          onClick={() => openChatModal("show-members")}
        >
          50 Members
        </Button>
      </Box>
    </Box>
  );
};

export default MessagesHeader;
