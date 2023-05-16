import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { useMessagesContext } from "@/contexts/MessagesContext";
import { useSendNewMessage } from "@/hooks/chat/useChat";
import { uploadFile } from "@/api/file";
import { Button } from "@mui/material";
import { toast } from "react-hot-toast";
import { ISendMessageRequest } from "@/types/apiRequests";
import dayjs from "dayjs";
import { useGlobalContext } from "@/contexts/GlobalContext";

const MessageSendVoice = () => {
  const [uploadingAudio, setUploadingAudio] = useState(false);

  const { setSendMedia, chat } = useMessagesContext();
  const { sendNewMessage, sendingMessage } = useSendNewMessage();
  const { userDetails } = useGlobalContext();

  const onRecordingComplete = async (blob: any) => {
    setUploadingAudio(true);
    //console.log(blob);
    var file = new File([blob], "audio");
    const url = URL.createObjectURL(blob);

    const formData = new FormData();
    formData.append("uploadFile", file);

    const res = await uploadFile(formData);
    setUploadingAudio(false);

    if (typeof res === "object") {
      const url = res?.url ?? "";
      const chatId = chat?.chatId ?? 0;
      const newMessage: ISendMessageRequest = {
        content: "",
        mediaType: "audio",
        senderId: userDetails.id || 0,
        mediaUrl: url,
        timestamp: dayjs(Date.now()).toISOString(),
        senderName: `${userDetails.first_name} ${userDetails.last_name}`,
      };

      return sendNewMessage(chatId, newMessage);
    } else {
      toast.error("An error occured, try again");
    }

    // console.log(res);
  };
  const recorderControls = useAudioRecorder();

  const { startRecording, stopRecording, isRecording } = recorderControls;

  return (
    <div className={styles.container}>
      <div className={styles.backdrop} onClick={() => setSendMedia(null)} />
      <div className={styles.audioContainer}>
        <AudioRecorder
          onRecordingComplete={onRecordingComplete}
          downloadOnSavePress={false}
          downloadFileExtension="mp3"
          recorderControls={recorderControls}
        />

        {isRecording && (
          <Button variant="contained" onClick={stopRecording}>
            Send
          </Button>
        )}
      </div>
    </div>
  );
};

export default MessageSendVoice;
