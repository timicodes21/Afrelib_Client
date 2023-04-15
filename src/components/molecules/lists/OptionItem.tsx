import React, { ReactNode } from "react";
import styles from "@/styles/Molecules.module.css";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface IProps {
  children: ReactNode;
  onClick: () => void;
  src: string;
}

const OptionItem: React.FC<IProps> = ({ children, onClick, src }) => {
  return (
    <Box
      className={styles.optionWrapper}
      sx={{ padding: "10px 8px" }}
      onClick={onClick}
    >
      <Image width={22} height={22} alt="icon" src={src} />
      <Typography
        sx={{ color: "secondary.main", paddingLeft: "8px" }}
        className="font-12 font-500"
      >
        {children}
      </Typography>
    </Box>
  );
};

export default OptionItem;
