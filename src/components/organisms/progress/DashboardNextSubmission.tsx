import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useCallback } from "react";
import Countdown from "react-countdown";

interface IPropsRenderer {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

interface IProps {
  deadline: number;
}

const Renderer: React.FC<IPropsRenderer> = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}) => {
  if (completed) {
    // Render a completed state
    return (
      <Typography className="font-14 font-700" sx={{ color: "primary.main" }}>
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

const DashboardNextSubmission: React.FC<IProps> = ({ deadline }) => {
  const CountdownRender = useCallback(
    () =>
      // check if deadline is passed
      deadline > 0 && Date.now() > deadline ? (
        <Typography className="font-14 font-700" sx={{ color: "primary.main" }}>
          Deadline has been passed. See you next week.
        </Typography>
      ) : (
        <Countdown date={deadline} renderer={Renderer} />
      ),
    [deadline],
  );

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
          <Box className="d-flex items-center">
            <Typography
              className="font-12 font-700"
              sx={{ color: "primary.main" }}
            >
              NEXT SUBMISSION
            </Typography>
            <Image
              src="/assets/images/hour_glass.gif"
              height={40}
              width={40}
              loading="lazy"
              alt="hour_glass"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          {CountdownRender()}
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardNextSubmission;
