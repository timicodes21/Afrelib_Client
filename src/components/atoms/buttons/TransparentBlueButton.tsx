import { Button } from "@mui/material";
import React, { ReactNode } from "react";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

const TransparentBlueButton: React.FC<IProps> = ({ children, ...props }) => {
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
      {...props}
    >
      {children}
    </Button>
  );
};

export default TransparentBlueButton;
