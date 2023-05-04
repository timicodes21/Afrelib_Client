import React, { useState } from "react";
import PageHeader from "@/components/molecules/headers/PageHeader";
import Wrapper from "@/components/templates/Wrapper";
import { Box, Button, Grid, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CustomModal from "@/components/organisms/modals/CustomModal";

import { useMessagesContext } from "@/contexts/MessagesContext";

import styles from "@/styles/Messages.module.css";

import { useGlobalContext } from "@/contexts/GlobalContext";
import MessagesChatList from "./chat-list/ChatList";
import MessagesHeader from "./header/MessagesHeader";
import ChatMessagesBoard from "./chat-board/ChatBoard";
import CreateNewMessageGroup from "./create-group/CreateGroup";

const MessagesPage = () => {
  const [createGroupModal, setCreateGroupModal] = useState(false);
  const { userDetails } = useGlobalContext();
  const { chat } = useMessagesContext();
  const activeChat = chat ? true : false;

  const openCreateGroupModal = () => {
    setCreateGroupModal(true);
  };

  const closeCreateGroupModal = () => {
    setCreateGroupModal(false);
  };

  const { role } = userDetails;

  return (
    <Wrapper>
      <CustomModal
        open={createGroupModal}
        setOpen={setCreateGroupModal}
        width="698px"
      >
        <CreateNewMessageGroup closeModal={closeCreateGroupModal} />
      </CustomModal>

      <PageHeader headerText="Messages" />

      <div className={`${styles.messagesContainer}`}>
        <div className={`${styles.messagesLeftSection}`}>
          <div className={styles.chatListsContainer}>
            <MessagesChatList />
          </div>

          {role?.toLowerCase() === "admin" && (
            <Button sx={{ mt: "17px" }} onClick={openCreateGroupModal}>
              <AddCircleOutlineIcon
                sx={{ marginRight: "5.68px" }}
                fontSize="small"
              />
              Create New Group
            </Button>
          )}
        </div>

        <div className={`${styles.messagesRightSection}`}>
          <MessagesHeader />
          <ChatMessagesBoard />
        </div>
      </div>

      <div className={`${styles.mobileScreenMessagesContainer}`}>
        {activeChat ? (
          <div className={`${styles.messagesRightSection}`}>
            <MessagesHeader />
            <ChatMessagesBoard />
          </div>
        ) : (
          <div className={`${styles.messagesLeftSection}`}>
            <MessagesChatList />
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default MessagesPage;
