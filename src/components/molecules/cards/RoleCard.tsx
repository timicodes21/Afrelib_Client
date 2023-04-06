import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import styles from "@/styles/Auth.module.css";

interface IProps {
  text: string;
  image: string;
  onClick: () => void;
  selectedRole?: string;
}

const RoleCard: React.FC<IProps> = ({ text, image, onClick, selectedRole }) => {
  return (
    <Box
      sx={{
        p: { xs: 2, md: 3 },
        backgroundColor: "info.main",
        cursor: "pointer",
      }}
      className={styles.roleCardContainer}
      onClick={onClick}
    >
      <Image src={image} height={35} width={35} loading="lazy" alt="icon" />
      <Typography
        className="font-18 font-600"
        sx={{ color: selectedRole === text ? "primary.main" : "primary.A200" }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default RoleCard;
