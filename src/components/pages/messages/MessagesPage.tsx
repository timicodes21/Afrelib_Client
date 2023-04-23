import React from "react";
import PageHeader from "@/components/molecules/headers/PageHeader";
import Wrapper from "@/components/templates/Wrapper";
import { Box, Grid, Typography } from "@mui/material";

import { useMessagesContext } from "@/contexts/MessagesContext";

import styles from "@/styles/Messages.module.css";

import { useGlobalContext } from "@/contexts/GlobalContext";
import MessagesChatList from "./chat-list/ChatList";
import MessagesHeader from "./header/MessagesHeader";
import ChatMessagesBoard from "./chat-board/ChatBoard";

const MessagesPage = () => {
  const { userDetails } = useGlobalContext();
  const { chat } = useMessagesContext();
  const activeChat = chat ? true : false;

  return (
    <Wrapper>
      <PageHeader headerText="Messages" />

      <div className={`${styles.messagesContainer}`}>
        <div className={`${styles.messagesLeftSection}`}>
          <MessagesChatList />
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
