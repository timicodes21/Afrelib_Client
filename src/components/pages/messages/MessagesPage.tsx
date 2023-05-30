import React, { useState, useEffect } from "react";
import PageHeader from "@/components/molecules/headers/PageHeader";
import Wrapper from "@/components/templates/Wrapper";
import { Box, Button, Grid, LinearProgress } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CustomModal from "@/components/organisms/modals/CustomModal";
import { useMessagesContext } from "@/contexts/MessagesContext";
import styles from "@/styles/Messages.module.css";
import { useGlobalContext } from "@/contexts/GlobalContext";
import MessagesChatList from "./chat-list/ChatList";
import MessagesHeader from "./header/MessagesHeader";
import ChatMessagesBoard from "./chat-board/ChatBoard";
import CreateNewMessageGroup from "./create-group/CreateGroup";
import { useGetUserGroupChats } from "@/hooks/chat/useChat";
import NoAvailableChat from "./no-chat/NoAvailableChat";
import NoSelectedChat from "./no-chat/NoSelectedChat";
import ChatMembers from "./members/Chat-Members";
import AddChatMembers from "./members/Add-Members";

const MessagesPage = () => {
  const { userDetails } = useGlobalContext();
  const { chats, fetchingChats } = useGetUserGroupChats(userDetails?.id ?? 0);
  const { chat, chatModal, openChatModal, closeChatModal } =
    useMessagesContext();
  const activeChat = chat ? true : false;

  const role = userDetails ? userDetails.role : "";

  return (
    <Wrapper>
      <CustomModal
        open={chatModal === "create-group"}
        //setOpen={setCreateGroupModal}
        showCloseIcon
        closeModal={closeChatModal}
        width="698px"
      >
        <CreateNewMessageGroup closeModal={closeChatModal} />
      </CustomModal>

      <CustomModal
        open={chatModal === "show-members"}
        closeModal={closeChatModal}
        width="698px"
        showCloseIcon
      >
        <ChatMembers />
      </CustomModal>

      <CustomModal
        open={chatModal === "add-members"}
        closeModal={closeChatModal}
        width="698px"
        showCloseIcon
      >
        <AddChatMembers />
      </CustomModal>

      <PageHeader headerText="Messages" />
      {fetchingChats ? (
        <Box sx={{ width: "100%", margin: "25px", boxSizing: "border-box" }}>
          <LinearProgress sx={{ color: "#213F7D" }} />
        </Box>
      ) : chats.length <= 0 ? (
        <div className={`${styles.messagesContainer}`}>
          <NoAvailableChat />
        </div>
      ) : (
        <>
          <div className={`${styles.messagesContainer}`}>
            <div className={`${styles.messagesLeftSection}`}>
              <div className={styles.chatListsContainer}>
                <MessagesChatList chats={chats} />
              </div>

              {role?.toLowerCase() === "admin" && (
                <Button
                  sx={{ mt: "17px" }}
                  onClick={() => openChatModal("create-group")}
                >
                  <AddCircleOutlineIcon
                    sx={{ marginRight: "5.68px" }}
                    fontSize="small"
                  />
                  Create New Group
                </Button>
              )}
            </div>

            <div className={`${styles.messagesRightSection}`}>
              {activeChat ? (
                <>
                  <MessagesHeader />
                  <ChatMessagesBoard />
                </>
              ) : (
                <div className={styles.messageNoSelectedChat}>
                  <NoSelectedChat />
                </div>
              )}
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
                <MessagesChatList chats={chats} />
              </div>
            )}
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default MessagesPage;
