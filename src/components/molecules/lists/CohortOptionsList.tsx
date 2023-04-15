import { cohortOptions } from "@/data/dashboard";
import { Box } from "@mui/material";
import React from "react";
import OptionItem from "./OptionItem";

interface IProps {
  onEdit: () => void;
  onAssign: () => void;
  onDelete: () => void;
  onUpdate: () => void;
}

const CohortOptionsList: React.FC<IProps> = ({
  onEdit,
  onAssign,
  onDelete,
  onUpdate,
}) => {
  return (
    <Box
      sx={{
        borderRadius: "8px",
        boxShadow:
          "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
    >
      <OptionItem src={cohortOptions[0]?.src} onClick={onUpdate}>
        {cohortOptions[0].name}
      </OptionItem>
      <OptionItem src={cohortOptions[1]?.src} onClick={onAssign}>
        {cohortOptions[1].name}
      </OptionItem>
      <OptionItem src={cohortOptions[2]?.src} onClick={onDelete}>
        {cohortOptions[2].name}
      </OptionItem>
    </Box>
  );
};

export default CohortOptionsList;
