import { Box, Typography } from "@mui/material";

import styles from "./styles.module.css";
import { data, submissionType } from "../../../../data/submissions";

interface iProps {
  item: submissionType;
  isEven: boolean;
}

const SubmissionCard = ({ item, isEven }: iProps) => {
  return (
    <Box
      className={`${styles.cardContainer} ${
        isEven ? styles.evenCardContainer : ""
      }`}
    >
      <Typography
        className={`${styles.cardHeader} ${
          isEven ? styles.evenCardHeader : ""
        }`}
        mb={1}
      >
        {item.title}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
        }}
        mb={2}
      >
        <Typography className={styles.teamName}>{item.team}</Typography>
        <Typography className={styles.submittedBy}>
          Submitted By: {item.submittedBy}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography className={styles.comments}>
          {item.feedback.length}
        </Typography>
        <Typography className={styles.points}>{item.points} points</Typography>
      </Box>

      <Box>
        <Typography className={styles.submissionDate}>{item.date}</Typography>
      </Box>
    </Box>
  );
};

export default SubmissionCard;
