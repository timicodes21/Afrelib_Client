import { useCallback, useEffect, useRef, useState, UIEvent } from "react";
import { Box, IconButton, LinearProgress } from "@mui/material";
import Pusher from "pusher-js";
import Echo from "laravel-echo";
import { GET_ALL_CHAT_MESSAGES, LOCAL_STORAGE_KEY } from "@/data/constants";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import Zoom from "@mui/material/Zoom";

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
import { groupArrayByDates } from "@/service/groupArrayByDate";
import moment from "moment";

const pusher_key = process.env.PUSHER_APP_KEY || "";
const pusher_cluster = process.env.PUSHER_APP_CLUSTER || "";

const ChatMessagesBoard = () => {
  const [goDownIcon, setGoDownIcon] = useState(false);
  const { chat, sendMedia } = useMessagesContext();
  const msgsContainerRef = useRef<HTMLDivElement | null>(null);

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
  //console.log("messages", messages);
  const groupedMessages = fetchingMsgs ? [] : groupArrayByDates(messages, "D");

  //console.log(groupedMessages);

  const handleOnScroll = (event: UIEvent<HTMLElement>) => {
    const target = event.target as HTMLDivElement;
    const { scrollHeight, scrollTop, clientHeight } = target;
    const scrollPosition = scrollHeight - scrollTop - clientHeight;

    if (scrollPosition > 1000) {
      setGoDownIcon(true);
    } else if (scrollPosition <= 0) {
      setGoDownIcon(false);
    }
  };

  const scrollToBottom = useCallback(() => {
    if (!msgsContainerRef.current) return;

    const scroll =
      msgsContainerRef.current.scrollHeight -
      msgsContainerRef.current.clientHeight;

    msgsContainerRef.current.scrollTo({
      top: scroll,
      behavior: "smooth",
    });
  }, [msgsContainerRef]);

  useEffect(() => {
    scrollToBottom();
  }, [fetchingMsgs]);

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
          <div
            className={styles.chatBoardMessagesContainer}
            ref={msgsContainerRef}
            onScroll={handleOnScroll}
          >
            {groupedMessages.map((group: messageType[]) => {
              const time = group[0].timestamp;
              const messagesDay = moment(time);
              const currentDay = moment(new Date());
              const prevDay = moment().subtract(1, "day");
              const weekDifference = currentDay.diff(messagesDay, "weeks");
              const isCurrentDay = messagesDay.isSame(currentDay, "day");
              const isPrevDay = messagesDay.isSame(prevDay, "day");
              return (
                <div className={styles.messagesGroup} key={group[0].messageId}>
                  <div className={styles.messageGroupTime}>
                    {weekDifference > 0 ? (
                      <p>{moment(time).format("L")}</p>
                    ) : (
                      <p>
                        {isCurrentDay
                          ? "Today"
                          : isPrevDay
                          ? "Yesterday"
                          : moment(time).format("dddd")}
                      </p>
                    )}
                  </div>

                  {[...group].reverse().map((msg: any) => {
                    return (
                      <EachChatBoardMessage
                        message={msg.message}
                        key={msg.messageId}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
          <Box>
            <ChatInput />
          </Box>
        </>
      )}
      <Zoom in={goDownIcon}>
        <IconButton
          size="small"
          sx={{
            position: "absolute",
            right: "5%",
            bottom: "20%",
            zIndex: 9999,
            backgroundColor: "#0065B5",
            "&:hover": {
              backgroundColor: "#0065B5",
            },
            color: "#ffffff",
          }}
          onClick={scrollToBottom}
        >
          <ArrowCircleDownIcon fontSize="small" />
        </IconButton>
      </Zoom>
    </Box>
  );
};

export default ChatMessagesBoard;
