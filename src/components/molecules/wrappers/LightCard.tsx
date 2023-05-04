import React, { ReactNode } from "react";
import { Box } from "@mui/material";

interface IProps {
  children: ReactNode;
  width?: string;
}

const LightCard: React.FC<IProps> = ({ children, width }) => {
  return (
    <Box
      sx={{
        boxShadow:
          "0px 1px 2px rgba(16, 24, 40, 0.1), 0px 1px 3px rgba(16, 24, 40, 0.15)",
        borderRadius: "10px",
        background: "#FBFAFA",
        width: width ?? "100%",
      }}
    >
      {children}
    </Box>
  );
};

export default LightCard;
