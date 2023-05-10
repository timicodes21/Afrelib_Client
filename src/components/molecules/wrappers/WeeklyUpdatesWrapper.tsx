import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import styles from "@/styles/Molecules.module.css";
import { FiMoreVertical } from "react-icons/fi";

interface IProps {
  children: ReactNode;
  header?: string;
  onClick?: () => void;
  onClickCard?: () => void;
}

const WeeklyUpdatesWrapper: React.FC<IProps> = ({
  children,
  header,
  onClick,
  onClickCard,
}) => {
  return (
    <Box
      className={styles.weeklyUpdatesContainer}
      sx={{ height: "150px", cursor: "pointer" }}
      onClick={onClickCard}
    >
      <Box className="d-flex items-center justify-between" sx={{ my: 1 }}>
        <Typography className="font-16 font-500" sx={{ color: "info.main" }}>
          {header ?? "Weekly Updates"}
        </Typography>
        {header && (
          <FiMoreVertical
            style={{ color: "#FFF" }}
            className="font-18 font-600 pointer"
            onClick={onClick}
          />
        )}
      </Box>
      <Typography className="font-14 font-500" sx={{ color: "info.main" }}>
        {children}
      </Typography>
    </Box>
  );
};

export default WeeklyUpdatesWrapper;
