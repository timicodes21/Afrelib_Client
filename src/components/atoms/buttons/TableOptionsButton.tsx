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
      <Typography className="font-14 font-400" sx={{ color: "secondary.A200" }}>
        {children}
      </Typography>
    </Box>
  );
};

export default TableOptionsButton;
