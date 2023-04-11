import { cohortOptions } from "@/data/dashboard";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "@/styles/Molecules.module.css";

interface IProps {
  onDelete: () => void;
}

const UsersOptionsList: React.FC<IProps> = ({ onDelete }) => {
  return (
    <Box
      sx={{
        borderRadius: "8px",
        boxShadow:
          "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06) !important",
      }}
    >
      <Box
        className={styles.optionWrapper}
        sx={{ padding: "10px 8px" }}
        onClick={onDelete}
      >
        <Image
          width={22}
          height={22}
          alt="icon"
          src="/assets/icons/delete_icon.svg"
        />
        <Typography
          sx={{ color: "secondary.main", paddingLeft: "8px" }}
          className="font-12 font-500"
        >
          Delete User
        </Typography>
      </Box>
    </Box>
  );
};

export default UsersOptionsList;
