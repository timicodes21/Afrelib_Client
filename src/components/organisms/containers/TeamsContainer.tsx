import DashboardCard from "@/components/molecules/cards/DashboardCard";
import { Box, Grid, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import { FiMoreVertical } from "react-icons/fi";

interface IProps {
  header: string;
  description: string;
  children: ReactNode;
  mentorName?: string;
}

const TeamsContainer: React.FC<IProps> = ({
  header,
  children,
  description,
  mentorName,
}) => {
  return (
    <Box
      sx={{
        p: 2,
        background: "#FBFAFA",
        borderRadius: "10px",
        boxShadow:
          "0px 1px 3px rgba(16, 24, 40, 0.15), 0px 1px 2px rgba(16, 24, 40, 0.1)",
      }}
    >
      <Box className="d-flex justify-between items-center">
        <Typography
          className="font-16 font-600"
          sx={{ color: "secodary.main" }}
        >
          {header}
        </Typography>
        <FiMoreVertical
          style={{ color: "#353F50" }}
          className="font-18 font-500 pointer"
        />
      </Box>
      <Box className="d-flex justify-between items-center">
        <Typography
          className="font-14 font-500"
          sx={{ color: "secodary.main" }}
        >
          Mentor: {mentorName}
        </Typography>
      </Box>
      <Box className="d-flex justify-between items-center">
        <Typography
          className="font-12 font-400"
          sx={{ color: "secodary.light" }}
        >
          {description}
        </Typography>
      </Box>

      <Box>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={6} md={3}>
            <DashboardCard
              background="#DEF1FF"
              value="12"
              textColor="#0072C7"
              title="No. of Members"
              height="70px"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TeamsContainer;
