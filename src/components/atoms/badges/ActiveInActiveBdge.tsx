import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface IProps {
  type: string;
  children?: ReactNode;
}

const ActiveInActiveBdge: React.FC<IProps> = ({ type, children }) => {
  return (
    <Box
      sx={{
        padding: "4px 8px",
        borderRadius: "6px",
        background: type === "active" ? "#B0EED3" : "#FDD1DA",
      }}
    >
      <Typography
        sx={{ color: type === "active" ? "#1AAE6F" : "#F80031" }}
        className="font-12 font-700"
      >
        {children}
      </Typography>
    </Box>
  );
};

export default ActiveInActiveBdge;
