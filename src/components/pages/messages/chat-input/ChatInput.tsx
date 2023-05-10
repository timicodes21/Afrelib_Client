import React, { useState, useRef } from "react";
import ActionButton from "@/components/atoms/buttons/ActionButton";
import {
  Button,
  CircularProgress,
  IconButton,
  Menu,
  MenuItem,
  TextareaAutosize,
} from "@mui/material";
import Popover from "@mui/material/Popover";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import dayjs from "dayjs";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import styles from "./styles.module.css";
import { useMessagesContext } from "@/contexts/MessagesContext";
import { useSendNewMessage } from "@/hooks/chat/useChat";
import { ISendMessageRequest } from "@/types/apiRequests";
import { useGlobalContext } from "@/contexts/GlobalContext";

const ChatInput = () => {
  const { chat } = useMessagesContext();
  const { userDetails } = useGlobalContext();
  const { sendNewMessage, sendingMessage } = useSendNewMessage();
  const [message, setMessage] = useState("");
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );
  const [fileAnchorEl, setFileAnchorEl] =
    React.useState<HTMLButtonElement | null>(null);

  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const handleOnChange: React.ChangeEventHandler<
    HTMLTextAreaElement
  > = event => {
    setMessage(event.currentTarget.value);
  };

  const handleShowEmojis = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleHideEmojis = () => {
    setAnchorEl(null);
    inputRef?.current?.focus();
  };

  const handleCloseOptions = () => {
    setFileAnchorEl(null);
  };

  const handleOpenOptions = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFileAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleEmoji = (emoji: any) => {
    setMessage(prev => prev.concat(emoji.native));
  };

  const handleSendNewMessage = () => {
    const chatId = chat?.chatId ?? 0;
    const newMessage: ISendMessageRequest = {
      content: message,
      mediaType: "text",
      senderId: userDetails.id || 0,
      mediaUrl: "",
      timestamp: dayjs(Date.now()).toISOString(),
      senderName: `${userDetails.first_name} ${userDetails.last_name}`,
    };

    sendNewMessage(chatId, newMessage);
  };

  //const sendingMessage = false;

  return (
    <div className={styles.chatInputContainer}>
      <>
        <IconButton size="small" onClick={handleOpenOptions}>
          <AttachFileIcon fontSize="small" />
        </IconButton>

        <Menu
          anchorEl={fileAnchorEl}
          id="account-menu"
          open={Boolean(fileAnchorEl)}
          onClose={handleCloseOptions}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          // sx={{padding: 0}}
        >
          <MenuItem
            sx={{ fontSize: "0.8rem" }}
            onClick={() => {
              handleCloseOptions();
            }}
          >
            Voice
          </MenuItem>
          <MenuItem
            sx={{ fontSize: "0.8rem" }}
            onClick={() => {
              handleCloseOptions();
            }}
          >
            Image
          </MenuItem>
          <MenuItem
            sx={{ fontSize: "0.8rem" }}
            onClick={() => {
              handleCloseOptions();
            }}
          >
            Video
          </MenuItem>{" "}
          <MenuItem
            sx={{ fontSize: "0.8rem" }}
            onClick={() => {
              handleCloseOptions();
            }}
          >
            Document
          </MenuItem>
        </Menu>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleHideEmojis}
          sx={{
            top: -130,
          }}
        >
          <Picker
            data={data}
            onEmojiSelect={handleEmoji}
            previewPosition="none"
            theme="light"
          />
        </Popover>
      </>

      <>
        <IconButton size="small" onClick={handleShowEmojis}>
          <EmojiEmotionsIcon fontSize="small" />
        </IconButton>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleHideEmojis}
          sx={{
            top: -130,
          }}
        >
          <Picker
            data={data}
            onEmojiSelect={handleEmoji}
            previewPosition="none"
            theme="light"
          />
        </Popover>
      </>
      <textarea
        ref={inputRef}
        className={styles.chatInputTextArea}
        aria-label="empty textarea"
        onChange={handleOnChange}
        value={message}
        maxLength={1000}
        placeholder="Type your message"
        // onFocus={() => console.log("hello world")}
      />

      <Button
        variant="contained"
        className={styles.chatInputButton}
        onClick={handleSendNewMessage}
        disabled={sendingMessage || !message}
      >
        {sendingMessage ? (
          <CircularProgress sx={{ color: "#FFF" }} size={25} />
        ) : (
          "Send"
        )}
      </Button>
    </div>
  );
};

export default ChatInput;
