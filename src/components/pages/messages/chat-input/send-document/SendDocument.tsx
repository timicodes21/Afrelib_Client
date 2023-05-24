import { Button, CircularProgress, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";

import styles from "./styles.module.css";
import { useMessagesContext } from "@/contexts/MessagesContext";
import { useEffect, useState } from "react";
import DragAndDrop from "@/components/atoms/inputFields/DragAndDrop";
import { getBase64 } from "@/service/returnBase64";
import { useSendNewMessage } from "@/hooks/chat/useChat";
import { messageType } from "@/types/messages";
import { ISendMessageRequest } from "@/types/apiRequests";
import { useGlobalContext } from "@/contexts/GlobalContext";
import dayjs from "dayjs";
import { uploadFile } from "@/api/file";
import { toast } from "react-hot-toast";

const MessageSendDocument = () => {
  const [docFile, setDocFile] = useState<any>("");
  const { setSendMedia, chat } = useMessagesContext();
  const [description, setDescription] = useState("");
  const { sendNewMessage, sendingMessage } = useSendNewMessage();
  const { userDetails } = useGlobalContext();
  const [uploadingDoc, setUploadingDoc] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const handleDocFileChange = async (file: any) => {
    // const base64Url = await getBase64(file[0]);
    // setBase64(base64Url);
    setDocFile(file[0]);
  };

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }, []);

  const handleSendNewMessage = async () => {
    if (description === "") return toast.error("Please add description");
    //return toast.error("Cant send message at this time");

    setUploadingDoc(true);
    const formData = new FormData();
    formData.append("uploadFile", docFile);

    const res = await uploadFile(formData, "chat");
    console.log(res);
    setUploadingDoc(false);
    if (typeof res === "object") {
      const url = res?.url ?? "";
      const chatId = chat?.chatId ?? 0;
      const newMessage: ISendMessageRequest = {
        content: description,
        mediaType: "document",
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

  const handleDescriptionChange: React.ChangeEventHandler<
    HTMLTextAreaElement
  > = event => {
    setDescription(event.currentTarget.value);
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: any }) => {
    setNumPages(numPages);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>Send Document</p>

        <IconButton onClick={() => setSendMedia(null)}>
          <CloseIcon />
        </IconButton>
      </div>

      {docFile !== "" ? (
        <div className={styles.documentContainer}>
          <Document file={docFile} onLoadSuccess={onDocumentLoadSuccess}>
            <Page
              pageNumber={pageNumber}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
          {/* <p>
            Page {pageNumber} of {numPages}
          </p> */}
        </div>
      ) : (
        <div className={styles.documentContainer}>
          <DragAndDrop
            handleDragDrop={file => handleDocFileChange(file)}
            fileName={docFile}
          />
        </div>
      )}

      <div className={styles.addCaptionContainer}>
        <textarea
          //ref={inputRef}
          className={styles.chatInputTextArea}
          aria-label="empty textarea"
          onChange={handleDescriptionChange}
          value={description}
          maxLength={1000}
          placeholder="Description..."
          // onFocus={() => console.log("hello world")}
        />

        <Button
          variant="contained"
          className={styles.chatInputButton}
          onClick={handleSendNewMessage}
          disabled={sendingMessage || uploadingDoc || docFile === ""}
        >
          {sendingMessage || uploadingDoc ? (
            <CircularProgress sx={{ color: "#FFF" }} size={25} />
          ) : (
            "Send"
          )}
        </Button>
      </div>
    </div>
  );
};

export default MessageSendDocument;
