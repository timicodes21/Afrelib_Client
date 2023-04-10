import { Box, Typography } from "@mui/material";
import React from "react";

const WeeklyProgressContainer = () => {
  return (
    <Box sx={{ background: "#00425F", borderRadius: "20px", p: 2 }}>
      <button
        className="font-12 font-400"
        style={{
          borderRadius: "7px",
          padding: "7px",
          background: "#f6f6f6",
          border: "none",
        }}
      >
        Week
      </button>
      <Box>
        <Box sx={{}}></Box>
      </Box>
    </Box>
  );
};

export default WeeklyProgressContainer;
