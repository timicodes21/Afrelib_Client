import { Button, CircularProgress } from "@mui/material";
import React, { ReactNode } from "react";

interface IProps {
  children?: ReactNode;
  notFullWidth?: boolean;
  size?: "large" | "small" | "medium";
  loading?: boolean;
  type: "button" | "submit" | "reset" | undefined;
}

const AuthButton: React.FC<IProps> = ({
  children,
  notFullWidth,
  size,
  loading,
  type,
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
      type={type}
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
