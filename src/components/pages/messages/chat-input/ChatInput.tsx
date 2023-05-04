import React, { useState, useRef } from "react";
import ActionButton from "@/components/atoms/buttons/ActionButton";
import { Button, IconButton, TextareaAutosize } from "@mui/material";
import Popover from "@mui/material/Popover";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AttachFileIcon from "@mui/icons-material/AttachFile";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import styles from "./styles.module.css";

const ChatInput = () => {
  const [message, setMessage] = useState("");
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

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

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleEmoji = (emoji: any) => {
    setMessage(prev => prev.concat(emoji.native));
  };

  return (
    <div className={styles.chatInputContainer}>
      <>
        <IconButton size="small" onClick={handleShowEmojis}>
          <AttachFileIcon fontSize="small" />
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
        onFocus={() => console.log("hello world")}
      />

      <Button variant="contained" className={styles.chatInputButton}>
        Send
      </Button>
    </div>
  );
};

export default ChatInput;
