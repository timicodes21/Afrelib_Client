import { Box, Typography } from "@mui/material";
import Image from "next/image";

const NoSelectedChat = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        src="/assets/icons/empty_chat_icon.svg"
        height={166}
        width={150}
        loading="lazy"
        alt="no_chats"
      />
      <Box>
        <Typography
          mt={1}
          sx={{
            fontFamily: "Nunito",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "16px",
            letterSpacing: "-0,01rem",
          }}
        >
          Selected chat messages will appear here...
        </Typography>
      </Box>
    </Box>
  );
};

export default NoSelectedChat;
