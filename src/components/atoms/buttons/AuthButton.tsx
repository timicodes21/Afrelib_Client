import { Button, CircularProgress } from "@mui/material";
import React, { ReactNode } from "react";

interface IProps {
  children?: ReactNode;
  notFullWidth?: boolean;
  size?: "large" | "small" | "medium";
  loading?: boolean;
  type: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
  borderRadius?: string;
  width?: string;
  disabled?: boolean;
}

const AuthButton: React.FC<IProps> = ({
  children,
  notFullWidth,
  size,
  loading,
  type,
  onClick,
  borderRadius,
  width,
  disabled,
}) => {
  return (
    <Button
      sx={{
        borderRadius: borderRadius ?? "8px",
        background: disabled ? "#A8D6EF" : "info.main",
        width: notFullWidth ? "inherit" : width ? width : "100%",
        color: "info.main",
        boxShadow: 0,
      }}
      variant="contained"
      className={`${size === "small" ? "font-12" : "font-16"} font-700`}
      size={size ? size : "large"}
      type={type}
      onClick={disabled ? () => {} : onClick}
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
