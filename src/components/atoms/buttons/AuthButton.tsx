import { Button, CircularProgress } from "@mui/material";
import React, { ReactNode } from "react";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  notFullWidth?: boolean;
  size?: "large" | "small" | "medium";
  loading?: boolean;
}

const AuthButton: React.FC<IProps> = ({
  children,
  notFullWidth,
  size,
  loading,
  ...props
}) => {
  return (
    <Button
      sx={{
        borderRadius: "8px",
        background: "info.main",
        width: notFullWidth ? "inherit" : "100%",
        color: "info.main",
        boxShadow: 0,
      }}
      variant="contained"
      className={`${size === "small" ? "font-12" : "font-16"} font-700`}
      size={size ? size : "large"}
      {...props}
    >
      {loading ? (
        <CircularProgress sx={{ color: "#FFF" }} size={25} />
      ) : (
        children
      )}
    </Button>
  );
};

export default AuthButton;
