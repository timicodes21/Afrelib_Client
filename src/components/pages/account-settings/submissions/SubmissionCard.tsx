import { Box } from "@mui/material";

import styles from "./styles.module.css";
import { data, submissionType } from "../../../../data/submissions";

interface iProps {
  submission: submissionType;
  isEven: boolean;
  showDetails: (submission: submissionType) => void;
}

const SubmissionCard = ({ submission, isEven, showDetails }: iProps) => {
  return (
    <Box
      className={`${styles.cardContainer} ${
        isEven ? styles.evenCardContainer : ""
      }`}
      onClick={() => showDetails(submission)}
    >
      <p
        className={`${styles.cardHeader} ${
          isEven ? styles.evenCardHeader : ""
        }`}
      >
        {submission.title}
      </p>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
        }}
        mb={2}
      >
        <p className={styles.teamName}>{submission.team}</p>
        <p className={styles.submittedBy}>
          Submitted By: {submission.submittedBy}
        </p>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignsubmissions: "center",
          justifyContent: "space-between",
        }}
      >
        <p className={styles.comments}>
          {submission.feedback ? submission.feedback.length : 0}
        </p>
        <p className={styles.points}>{submission.points} points</p>
      </Box>

      <Box>
        <p className={styles.submissionDate}>{submission.date}</p>
      </Box>
    </Box>
  );
};

export default SubmissionCard;
