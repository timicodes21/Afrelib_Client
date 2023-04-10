import { cohortOptions } from "@/data/dashboard";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "@/styles/Molecules.module.css";

interface IProps {
  onEdit: () => void;
  onAssign: () => void;
  onDelete: () => void;
}

const CohortOptionsList: React.FC<IProps> = ({
  onEdit,
  onAssign,
  onDelete,
}) => {
  return (
    <Box
      sx={{
        borderRadius: "8px",
        boxShadow:
          "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
    >
      <Box
        className={styles.optionWrapper}
        sx={{ padding: "10px 8px" }}
        onClick={onEdit}
      >
        <Image width={22} height={22} alt="icon" src={cohortOptions[0]?.src} />
        <Typography
          sx={{ color: "secondary.main", paddingLeft: "8px" }}
          className="font-12 font-500"
        >
          {cohortOptions[0].name}
        </Typography>
      </Box>
      <Box
        className={styles.optionWrapper}
        sx={{ padding: "10px 8px" }}
        onClick={onAssign}
      >
        <Image width={22} height={22} alt="icon" src={cohortOptions[1]?.src} />
        <Typography
          sx={{ color: "secondary.main", paddingLeft: "8px" }}
          className="font-12 font-500"
        >
          {cohortOptions[1].name}
        </Typography>
      </Box>{" "}
      <Box
        className={styles.optionWrapper}
        sx={{ padding: "10px 8px" }}
        onClick={onDelete}
      >
        <Image width={22} height={22} alt="icon" src={cohortOptions[2]?.src} />
        <Typography
          sx={{ color: "secondary.main", paddingLeft: "8px" }}
          className="font-12 font-500"
        >
          {cohortOptions[2].name}
        </Typography>
      </Box>
    </Box>
  );
};

export default CohortOptionsList;
