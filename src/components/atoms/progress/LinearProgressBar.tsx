import { Box } from "@mui/material";
import React from "react";

interface IProps {
  activeColor?: string;
  inActiveColor?: string;
  total: number;
  active: number;
}

const LinearProgressBar: React.FC<IProps> = ({
  total,
  active,
  activeColor,
  inActiveColor,
}) => {
  const activePercentage = (active / total) * 100;
  const inActivePercentage = 100 - activePercentage;

  return (
    <Box sx={{ display: "flex", height: "4px", width: "100%" }}>
      <Box
        sx={{
          background: activeColor ?? "#0065B5",
          width: `${activePercentage}%`,
        }}
      ></Box>
      <Box
        sx={{
          background: inActiveColor ?? "rgba(0, 101, 181, 0.16)",
          width: `${inActivePercentage}%`,
        }}
      ></Box>
    </Box>
  );
};

export default LinearProgressBar;
