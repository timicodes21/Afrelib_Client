import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import styles from "@/styles/Auth.module.css";
import { UseFormRegister } from "react-hook-form/dist/types/form";

interface IProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  icon?: ReactNode;
  blackLabel?: boolean;
  smallLabel?: boolean;
  border?: boolean;
  rows?: number;
  background?: string;
}

const CustomTextArea: React.FC<IProps> = ({
  label,
  blackLabel,
  smallLabel,
  icon,
  rows,
  border,
  background,
  ...rest
}) => {
  return (
    <>
      <Typography
        sx={{ color: blackLabel ? "secondary.main" : "info.dark" }}
        className={`${smallLabel ? "font-12" : "font-16"} ${
          smallLabel ? "font-600" : "font-400"
        }`}
      >
        {label}
      </Typography>
      <Box
        sx={{
          backgroundColor: background ?? "info.dark",
          mt: smallLabel ? 0 : 1,
          border: border ? "0.8px solid #CED4DA" : "none",
        }}
        className={styles.inputContainer}
      >
        <textarea
          {...rest}
          style={{ background: background ?? "#F3F5F6", resize: "none" }}
          rows={rows ?? 2}
        />

        {icon}
      </Box>
    </>
  );
};

export default CustomTextArea;
