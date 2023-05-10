import HeaderAndCloseButton from "@/components/molecules/headers/HeaderAndCloseButton";
import { Box, Typography } from "@mui/material";
import React from "react";

interface IProps {
  handleClose: () => void;
  header: string;
  body: string;
}

const WeeklyUpdatesPage: React.FC<IProps> = ({ handleClose, header, body }) => {
  return (
    <Box sx={{ p: { xs: 2, md: 5 } }}>
      <HeaderAndCloseButton header={header} onClick={handleClose} />
      <Typography
        className="font-14 font-400 pointer"
        sx={{ color: "secondary.main", mt: 1 }}
      >
        {body}
      </Typography>
    </Box>
  );
};

export default WeeklyUpdatesPage;
