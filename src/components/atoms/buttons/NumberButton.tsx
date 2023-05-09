import React from "react";
import { Box, Typography } from "@mui/material";

interface IProps {
  onClick: (number: number) => void;
  number: number;
  ml?: boolean;
  active?: boolean;
}

const NumberButton: React.FC<IProps> = ({ onClick, number, ml, active }) => {
  return (
    <Box
      className="d-flex justify-center items-center pointer"
      sx={{
        borderRadius: "48px",
        width: "44px",
        height: "24px",
        ml: ml ? 1 : 0,
        border: active
          ? "1px solid #0275D8"
          : "1px solid rgba(65, 62, 62, 0.43)",
      }}
      onClick={() => onClick(number)}
    >
      <Typography
        sx={{ color: active ? "#0275D8" : `rgba(65, 62, 62, 0.43)` }}
        className="font-13 font-400"
      >
        {number}
      </Typography>
    </Box>
  );
};

export default NumberButton;
