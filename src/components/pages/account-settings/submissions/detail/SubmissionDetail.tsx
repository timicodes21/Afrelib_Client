import { submissionType } from "@/data/submissions";
import styles from "./styles.module.css";
import { Button } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import Image from "next/image";

interface IProps {
  submission: submissionType | null;
}

const StudentSubmissionDetails = ({ submission }: IProps) => {
  return (
    <div className={styles.container}>
      <section className={styles.detailsSection}>
        <div className={styles.eachDetail}>
          <span>Title:</span>
          <p>{submission?.title}</p>
        </div>
        <div className={styles.eachDetail}>
          <span>URL:</span>
          <p>{submission?.url}</p>
        </div>
        <div className={styles.eachDetail}>
          <span>Team:</span>
          <p>{submission?.team}</p>
        </div>
        <div className={styles.eachDetail}>
          <span>Comment:</span>
          <p>{submission?.comments}</p>
        </div>

        <div className={`${styles.eachDetail} ${styles.eachDetailFile}`}>
          <span>File:</span>
          <div className={styles.fileDownloader}>
            <div className={styles.fileInformation}>
              <div className={styles.iconContainer}>
                <Image
                  src={"/assets/icons/pdf_icon.svg"}
                  height={36.35}
                  width={28.48}
                  loading="lazy"
                  alt="pdf"
                />
              </div>
              <div className={styles.fileDetail}>
                <p>submission_document.pdf</p>
                <span>350.56 KB</span>
              </div>
            </div>

            <Button size="small">
              <FileDownloadOutlinedIcon fontSize="small" /> Download
            </Button>
          </div>
        </div>
      </section>

      <div className={styles.divider} />

      <section className={styles.feedbackSection}>
        <div className={styles.feedBackHeader}>
          <h1>Feedback</h1>
          <span>Score: {submission?.points} Points</span>
        </div>

        <div className={styles.feedBackContents}>
          {!submission?.feedback && (
            <div className={styles.noFeedBack}>
              <p>No Feedback for this submission yet.</p>
            </div>
          )}
          {submission?.feedback &&
            submission?.feedback.map((item, index) => (
              <div className={styles.eachFeedback} key={index}>
                <div className={styles.avatar}>
                  <div
                    className={styles.avatarImage}
                    style={{
                      background: `url(${item.image})`,
                    }}
                  />
                </div>
                <div className={styles.feedbackInfo}>
                  <p>{item.name}</p>
                  <span>{item.comment}</span>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default StudentSubmissionDetails;
