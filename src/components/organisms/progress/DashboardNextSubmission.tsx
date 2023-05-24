import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Countdown from "react-countdown";

interface IPropsRenderer {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

const renderer: React.FC<IPropsRenderer> = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}) => {
  if (completed) {
    // Render a completed state
    return (
      <Typography className="font-12 font-700" sx={{ color: "primary.main" }}>
        DEADLINE
      </Typography>
    );
  } else {
    // Render a countdown
    return (
      <>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Typography
              className="font-10 font-400 text-center"
              sx={{ color: "primary.main" }}
            >
              Days
            </Typography>
            <Typography
              className="font-18 font-400 text-center"
              sx={{ color: "secondary.main" }}
            >
              {days < 10 ? `0${days}` : days} :
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography
              className="font-10 font-400 text-center"
              sx={{ color: "primary.main" }}
            >
              Hours
            </Typography>
            <Typography
              className="font-18 font-400 text-center"
              sx={{ color: "secondary.main" }}
            >
              {hours < 10 ? `0${hours}` : hours} :
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography
              className="font-10 font-400 text-center"
              sx={{ color: "primary.main" }}
            >
              Minutes
            </Typography>
            <Typography
              className="font-18 font-400 text-center"
              sx={{ color: "secondary.main" }}
            >
              {minutes < 10 ? `0${minutes}` : minutes} :
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography
              className="font-10 font-400 text-center"
              sx={{ color: "primary.main" }}
            >
              Seconds
            </Typography>
            <Typography
              className="font-18 font-400 text-center"
              sx={{ color: "secondary.main" }}
            >
              {seconds < 10 ? `0${seconds}` : seconds}
            </Typography>
          </Grid>
        </Grid>
      </>
    );
  }
};

const DashboardNextSubmission = () => {
  return (
    <Box
      sx={{
        background: "#FFF",
        border: "2px solid #0065B5",
        p: 2,
        borderRadius: "12px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography
            className="font-12 font-700"
            sx={{ color: "primary.main" }}
          >
            NEXT SUBMISSION
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Countdown date={Date.now() + 500000000} renderer={renderer} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardNextSubmission;
