import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { BsDot } from "react-icons/bs";

interface IProps {
  src?: string;
  title: string;
  time: string;
  date: string;
}

const NotificationWrapper: React.FC<IProps> = ({ src, title, time, date }) => {
  return (
    <Box
      sx={{ borderBottom: "1px solid #E1E6ED", py: 1 }}
      className="d-flex justify-between items-start pointer"
    >
      <Box className="d-flex justify-between items-center">
        {/* <BsDot
                style={{ color: "#0275D8" }}
                className="font-24 font-500"
              /> */}
        <Image
          src="/assets/icons/notification_avatar.svg"
          alt="avatar"
          width={50}
          height={50}
        />
        <Box sx={{ ml: 1 }}>
          <Typography
            sx={{ color: "secondary.main" }}
            className="font-14 font-600"
          >
            {title}
          </Typography>
          <Typography
            sx={{ color: "secondary.light" }}
            className="font-14 font-400"
          >
            {time}
          </Typography>
        </Box>
      </Box>
      <Typography
        sx={{ color: "secondary.light" }}
        className="font-12 font-400"
      >
        {date}
      </Typography>
    </Box>
  );
};

export default NotificationWrapper;
