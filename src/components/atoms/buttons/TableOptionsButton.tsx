import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  ml?: boolean;
  active?: boolean;
  onClick: () => void;
}

const TableOptionsButton: React.FC<IProps> = ({
  children,
  ml,
  onClick,
  active,
}) => {
  return (
    <Box
      className="pointer"
      sx={{
        p: 1,
        borderRadius: "8px",
        ml: ml ? 2 : 0,
        border: active ? "1px solid #A8D6EF" : "none",
      }}
      onClick={onClick}
    >
      <Typography
        className="font-14 font-400"
        sx={{ color: active ? "primary.A100" : "secondary.A200" }}
      >
        {children}
      </Typography>
    </Box>
  );
};

export const TableOptionsButton2: React.FC<IProps> = ({
  children,
  ml,
  onClick,
  active,
}) => {
  return (
    <Box
      className="pointer"
      sx={{
        padding: "2px 12px",
        borderRadius: "48px",
        ml: ml ? 1 : 0,
        border: active
          ? "1px solid #0065B5"
          : "1px solid rgba(65, 62, 62, 0.43",
        background: active ? "#CCE0F0" : "#FFF",
      }}
      onClick={onClick}
    >
      <Typography
        className="font-12 font-400"
        sx={{ color: active ? "primary.main" : "rgba(65, 62, 62, 0.43)" }}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default TableOptionsButton;
