import { useGlobalContext } from "@/contexts/GlobalContext";
import { useMessagesContext } from "@/contexts/MessagesContext";
import { AddCircleOutline } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

const NoAvailableChat = () => {
  const { userDetails } = useGlobalContext();
  const { openCreateGroupModal } = useMessagesContext();

  const { role } = userDetails;

  return (
    <Box
      sx={{
        width: "100%",
        height: "calc(100vh - 200px)",
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
          There are no group chats yet...
        </Typography>

        {role?.toLowerCase() === "admin" && (
          <Button sx={{ mt: "17px" }} onClick={openCreateGroupModal}>
            <AddCircleOutline sx={{ marginRight: "5.68px" }} fontSize="small" />
            Create New Group
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default NoAvailableChat;
