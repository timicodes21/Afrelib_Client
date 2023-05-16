import { messageType } from "@/types/messages";
import styles from "./styles.module.css";
import { useGlobalContext } from "@/contexts/GlobalContext";
import dayjs from "dayjs";

const storageUrl = process.env.NEXT_PUBLIC_STORAGE_BASE_URL;

interface IProps {
  message: messageType;
}

const MessageAudioType = ({ message }: IProps) => {
  const { userDetails } = useGlobalContext();

  const userId = String(userDetails.id);
  const senderId = String(message.senderId);

  const isSent = userId === senderId;

  return (
    <div className={`${styles.container}`}>
      {!isSent && <p className={styles.senderName}>{message.senderName}</p>}
      <div className={styles.audioContainer}>
        <audio
          className={styles.audio}
          controls
          src={`${storageUrl}/${message.mediaUrl}`}
        />
      </div>

      <p className={styles.messageTime}>
        {dayjs(message.timestamp).format("h:mm A	")}
      </p>
    </div>
  );
};

export default MessageAudioType;
