import { Button } from "@mui/material";
import React, { ReactNode } from "react";

interface IProps {
  children?: ReactNode;
  type: "button" | "submit" | "reset" | undefined;
}

const TransparentBlueButton: React.FC<IProps> = ({ children, type }) => {
  return (
    <Button
      sx={{
        borderRadius: "8px",
        background: "primary.main",
        color: "primary.main",
        boxShadow: 0,
      }}
      variant="outlined"
      className="font-16 font-600"
      size="large"
      type={type}
    >
      {children}
    </Button>
  );
};

export default TransparentBlueButton;
