import { Button, CircularProgress, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDropzone } from "react-dropzone";

import styles from "./styles.module.css";
import { useMessagesContext } from "@/contexts/MessagesContext";
import { useState } from "react";
import DragAndDrop from "@/components/atoms/inputFields/DragAndDrop";
import { getBase64 } from "@/service/returnBase64";
import { useSendNewMessage } from "@/hooks/chat/useChat";
import { messageType } from "@/types/messages";
import { ISendMessageRequest } from "@/types/apiRequests";
import { useGlobalContext } from "@/contexts/GlobalContext";
import dayjs from "dayjs";
import { uploadFile } from "@/api/file";
import { toast } from "react-hot-toast";

const MessageSendVideo = () => {
  const [videoFile, setVideoFile] = useState<any>("");
  const [base64, setBase64] = useState<any>(null);
  const [caption, setCaption] = useState("");
  const [uploadingVideo, setUploadingVideo] = useState(false);

  const { setSendMedia, chat } = useMessagesContext();
  const { sendNewMessage, sendingMessage } = useSendNewMessage();
  const { userDetails } = useGlobalContext();

  const handleFileChange = async (file: any) => {
    const base64Url = await getBase64(file[0]);
    setBase64(base64Url);
    //console.log(base64Url);
    setVideoFile(file[0]);
  };

  const handleCaptionChange: React.ChangeEventHandler<
    HTMLTextAreaElement
  > = event => {
    setCaption(event.currentTarget.value);
  };

  const handleSendNewMessage = async () => {
    //return toast.error("Cant send message at this time");

    setUploadingVideo(true);
    const formData = new FormData();
    formData.append("uploadFile", videoFile);

    const res = await uploadFile(formData);
    console.log(res);
    setUploadingVideo(false);
    if (typeof res === "object") {
      const url = res?.url ?? "";
      const chatId = chat?.chatId ?? 0;
      const newMessage: ISendMessageRequest = {
        content: caption,
        mediaType: "video",
        senderId: userDetails.id || 0,
        mediaUrl: url,
        timestamp: dayjs(Date.now()).toISOString(),
        senderName: `${userDetails.first_name} ${userDetails.last_name}`,
      };

      return sendNewMessage(chatId, newMessage);
    } else {
      toast.error("An error occured, try again");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>Send Video</p>

        <IconButton onClick={() => setSendMedia(null)}>
          <CloseIcon />
        </IconButton>
      </div>

      {base64 ? (
        <div className={styles.imageContainer}>
          <video src={base64} controls autoPlay={false} />
        </div>
      ) : (
        <DragAndDrop
          handleDragDrop={file => handleFileChange(file)}
          fileName={videoFile}
        />
      )}

      <div className={styles.addCaptionContainer}>
        <textarea
          //ref={inputRef}
          className={styles.chatInputTextArea}
          aria-label="empty textarea"
          onChange={handleCaptionChange}
          value={caption}
          maxLength={1000}
          placeholder="Caption..."
          // onFocus={() => console.log("hello world")}
        />

        <Button
          variant="contained"
          className={styles.chatInputButton}
          onClick={handleSendNewMessage}
          disabled={sendingMessage || uploadingVideo || !base64}
        >
          {sendingMessage || uploadingVideo ? (
            <CircularProgress sx={{ color: "#FFF" }} size={25} />
          ) : (
            "Send"
          )}
        </Button>
      </div>
    </div>
  );
};

export default MessageSendVideo;
