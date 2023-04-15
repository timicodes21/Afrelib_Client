import { Box, Typography } from "@mui/material";
import React from "react";
import { GrClose } from "react-icons/gr";

interface IProps {
  onClick: () => void;
  header: string;
}

const HeaderAndCloseButton: React.FC<IProps> = ({ onClick, header }) => {
  return (
    <Box className="d-flex justify-between items-center">
      <Typography sx={{ color: "secondary.main" }} className="font-20 font-500">
        {header}
      </Typography>
      <GrClose
        style={{ color: "#353F50" }}
        className="pointer font-16 font-700"
        onClick={onClick}
      />
    </Box>
  );
};

export default HeaderAndCloseButton;
