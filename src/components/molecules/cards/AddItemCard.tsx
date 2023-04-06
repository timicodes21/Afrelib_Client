import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

interface IProps {
  children: ReactNode;
  onClick: () => void;
  height: string;
}

const AddItemCard: React.FC<IProps> = ({ children, onClick, height }) => {
  return (
    <Box
      className="d-flex justify-center items-center"
      sx={{
        boxShadow:
          " 0px 1px 3px rgba(16, 24, 40, 0.15), 0px 1px 2px rgba(16, 24, 40, 0.1)",
        borderRadius: "10px",
        background: "#FBFAFA",
        p: 2,
        height: height,
      }}
    >
      <Box>
        <Box className="text-center">
          <AiOutlinePlusCircle
            style={{ color: "#0065B5" }}
            className="font-56 pointer text-center"
            onClick={onClick}
          />
        </Box>
        <Typography
          sx={{ color: "secondary.main" }}
          className="font-16 font-500 "
        >
          {children}
        </Typography>
      </Box>
    </Box>
  );
};

export default AddItemCard;
