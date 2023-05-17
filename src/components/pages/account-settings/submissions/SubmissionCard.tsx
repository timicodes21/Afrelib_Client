import { Box, Typography } from "@mui/material";

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
      <Typography
        className={`${styles.cardHeader} ${
          isEven ? styles.evenCardHeader : ""
        }`}
        mb={1}
      >
        {submission.title}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
        }}
        mb={2}
      >
        <Typography className={styles.teamName}>{submission.team}</Typography>
        <Typography className={styles.submittedBy}>
          Submitted By: {submission.submittedBy}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignsubmissions: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography className={styles.comments}>
          {submission.feedback ? submission.feedback.length : 0}
        </Typography>
        <Typography className={styles.points}>
          {submission.points} points
        </Typography>
      </Box>

      <Box>
        <Typography className={styles.submissionDate}>
          {submission.date}
        </Typography>
      </Box>
    </Box>
  );
};

export default SubmissionCard;
