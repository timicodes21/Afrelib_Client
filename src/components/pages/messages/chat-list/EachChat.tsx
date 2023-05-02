import { Avatar, Box, Typography } from "@mui/material";

import { useMessagesContext } from "@/contexts/MessagesContext";
import styles from "@/styles/Messages.module.css";

const EachChatMessage = () => {
  const { selectChat } = useMessagesContext();
  return (
    <Box className={styles.chatListChatEachChat} onClick={() => selectChat({})}>
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
          <Typography className={styles.chatListChatName}>
            AIC-Cohort 14
          </Typography>

          <Typography className={styles.chatListChatName}>8:30 AM</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography className={styles.chatListChatLastMsg}>
            Ayomide: Hello everyone how are you doing
          </Typography>

          <Box className={styles.chatListMessageCount}>1</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EachChatMessage;
