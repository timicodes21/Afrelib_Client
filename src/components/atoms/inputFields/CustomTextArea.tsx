import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import styles from "@/styles/Auth.module.css";
import { UseFormRegister } from "react-hook-form/dist/types/form";

interface IProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  icon?: ReactNode;
  blackLabel?: boolean;
  smallLabel?: boolean;
}

const CustomTextArea: React.FC<IProps> = ({
  label,
  blackLabel,
  smallLabel,
  icon,
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
          backgroundColor: "info.dark",
          mt: smallLabel ? 0 : 1,
        }}
        className={styles.inputContainer}
      >
        <textarea {...rest} style={{ background: "#F3F5F6" }} />

        {icon}
      </Box>
    </>
  );
};

export default CustomTextArea;
