import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import styles from "@/styles/Molecules.module.css";
import { FiMoreVertical } from "react-icons/fi";

interface IProps {
  children: ReactNode;
  header?: string;
}

const EvaluationWrapper: React.FC<IProps> = ({ children, header }) => {
  return (
    <Box className={styles.evaluationCiriteriaContainer}>
      <Box className="d-flex items-center justify-between" sx={{ my: 1 }}>
        <Typography className="font-16 font-500" sx={{ color: "info.main" }}>
          {header ?? ""}
        </Typography>
      </Box>
      <Typography className="font-14 font-500" sx={{ color: "info.main" }}>
        {children}
      </Typography>
    </Box>
  );
};

export default EvaluationWrapper;
