import { Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const InputErrorText: React.FC<IProps> = ({ children }) => {
  return (
    <Typography
      sx={{ color: "rgba(146, 22, 45, 0.92)" }}
      className="font-12 font-400"
    >
      {children}
    </Typography>
  );
};

export default InputErrorText;
