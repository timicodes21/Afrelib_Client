import { useEffect } from "react";
import { Box, LinearProgress } from "@mui/material";
import Pusher from "pusher-js";
import Echo from "laravel-echo";
import { GET_ALL_CHAT_MESSAGES, LOCAL_STORAGE_KEY } from "@/data/constants";

import styles from "./styles.module.css";
import ChatInput from "../chat-input/ChatInput";
import { useMessagesContext } from "@/contexts/MessagesContext";
import { messageType } from "../../../../types/messages";
import { useChatMessages } from "@/hooks/chat/useChat";

import EachChatBoardMessage from "./EachMessage";
import MessageSendImage from "../chat-input/send-image/SendImage";
import MessageSendVoice from "../chat-input/send-voice/SendVoice";
import MessageSendVideo from "../chat-input/send-video/SendVideo";
import MessageSendDocument from "../chat-input/send-document/SendDocument";

const pusher_key = process.env.PUSHER_APP_KEY || "";
const pusher_cluster = process.env.PUSHER_APP_CLUSTER || "";

const ChatMessagesBoard = () => {
  const { chat, sendMedia } = useMessagesContext();

  const { messages, fetchingMsgs, handleGetNewMessages } = useChatMessages(
    chat?.chatId ?? 0,
  );

  // useEffect(() => {
  //   const pusher = new Pusher(pusher_key, {
  //     cluster: pusher_cluster,
  //   });

  //   const channel = pusher.subscribe("chat-4220");
  //   //console.log(channel);

  //   channel.bind("SendChatMessage", function (data: any) {
  //     console.log(data);
  //     //handleGetNewMessages(chat?.chatId ?? 0);
  //   });

  //   return () => {
  //     channel.unbind("SendChatMessage");
  //   };
  // }, []);

  return (
    <Box className={styles.chatBoardContainer}>
      {sendMedia && sendMedia === "image" && <MessageSendImage />}
      {sendMedia && sendMedia === "audio" && <MessageSendVoice />}
      {sendMedia && sendMedia === "video" && <MessageSendVideo />}
      {sendMedia && sendMedia === "document" && <MessageSendDocument />}
      {fetchingMsgs ? (
        <Box sx={{ width: "100%", padding: "25px", boxSizing: "border-box" }}>
          <LinearProgress sx={{ color: "#213F7D" }} />
        </Box>
      ) : (
        <>
          <Box className={styles.chatBoardMessagesContainer}>
            {messages &&
              messages.map((msg: messageType) => {
                return (
                  <EachChatBoardMessage message={msg} key={msg.messageId} />
                );
              })}
          </Box>
          <Box>
            <ChatInput />
          </Box>
        </>
      )}
    </Box>
  );
};

export default ChatMessagesBoard;
