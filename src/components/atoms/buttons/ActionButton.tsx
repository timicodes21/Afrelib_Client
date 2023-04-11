import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import styles from "@/styles/Auth.module.css";
import { UseFormRegister } from "react-hook-form/dist/types/form";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  background: string;
  textColor: string;
  borderColor: string;
  onClick?: () => void;
}

const ActionButton: React.FC<IProps> = ({
  children,
  background,
  textColor,
  borderColor,
  ...rest
}) => {
  return (
    <button
      {...rest}
      style={{
        background,
        padding: "12px 24px",
        borderRadius: "8px",
        color: textColor,
        border: `1px solid ${borderColor}`,
      }}
      className="pointer"
    >
      {children}
    </button>
  );
};

export const DeleteButton: React.FC<{
  onClick: () => void;
  children: ReactNode;
}> = ({ children, onClick }) => {
  return (
    <ActionButton
      textColor="#FFFFFF"
      borderColor="#F03738"
      background="#F03738"
      onClick={onClick}
    >
      {children}
    </ActionButton>
  );
};

export const CancelButton: React.FC<{
  onClick: () => void;
  children: ReactNode;
}> = ({ children, onClick }) => {
  return (
    <ActionButton
      textColor="#353F50"
      borderColor="#353F50"
      background="#FFFFFF"
      onClick={onClick}
    >
      {children}
    </ActionButton>
  );
};

export default ActionButton;
