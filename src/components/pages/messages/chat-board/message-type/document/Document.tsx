import { messageType } from "@/types/messages";
import styles from "./styles.module.css";
import { useGlobalContext } from "@/contexts/GlobalContext";
import dayjs from "dayjs";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import { useEffect } from "react";
import { Box, Typography } from "@mui/material";

const storageUrl = process.env.NEXT_PUBLIC_STORAGE_BASE_URL;

interface IProps {
  message: messageType;
}

const MessageDocumentType = ({ message }: IProps) => {
  const { userDetails } = useGlobalContext();

  const userId = String(userDetails.id);
  const senderId = String(message.senderId);

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }, []);

  const isSent = userId === senderId;
  return (
    <div className={`${styles.container}`}>
      {!isSent && <p className={styles.senderName}>{message.senderName}</p>}

      <div className={styles.documentContainer}>
        <Document
          file={{
            url: "https://africau.edu/images/default/sample.pdf",
          }}
          error={
            <Box
              sx={{
                width: "300px",
                height: "300px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ fontSize: "0.75rem" }}>
                Failed to display document
              </Typography>
            </Box>
          }
          loading={
            <Box
              sx={{
                width: "300px",
                height: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ fontSize: "0.75rem" }}>
                loading document file
              </Typography>
            </Box>
          }
          // onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            pageNumber={1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>

      <p className={styles.messageTime}>
        {dayjs(message.timestamp).format("h:mm A	")}
      </p>
    </div>
  );
};

export default MessageDocumentType;
