import { teamOptions } from "@/data/dashboard";
import { Box } from "@mui/material";
import React from "react";
import OptionItem from "./OptionItem";

interface IProps {
  onEdit: () => void;
  onAssign: () => void;
  onDelete: () => void;
}

const TeamOptionsList: React.FC<IProps> = ({ onEdit, onAssign, onDelete }) => {
  return (
    <Box
      sx={{
        borderRadius: "8px",
        boxShadow:
          "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
    >
      <OptionItem src={teamOptions[0]?.src} onClick={onEdit}>
        {teamOptions[0].name}
      </OptionItem>
      <OptionItem src={teamOptions[1]?.src} onClick={onDelete}>
        {teamOptions[1].name}
      </OptionItem>
    </Box>
  );
};

export default TeamOptionsList;
