import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { BsDot } from "react-icons/bs";

interface IProps {
  src?: string;
  time: string;
  number?: number;
  message: string;
  group: string;
  hideImage?: boolean;
  link?: string;
  whiteBg?: boolean;
}

const MessagesWrapper: React.FC<IProps> = ({
  src,
  time,
  number,
  message,
  group,
  hideImage,
  link,
  whiteBg,
}) => {
  return (
    <Box
      sx={{
        borderBottom: "1px solid #E1E6ED",
        py: 1,
        px: 1,
        background: whiteBg ? "#FFF" : "#FBFAFA",
      }}
      className="d-flex justify-between items-center pointer"
    >
      <Box className="d-flex items-center">
        {!hideImage && (
          <Image
            src="/assets/icons/notification_avatar.svg"
            alt="avatar"
            width={50}
            height={50}
          />
        )}
        <Box sx={{ ml: 1 }}>
          <Typography
            sx={{ color: "secondary.main" }}
            className="font-12 font-500"
          >
            {message}
          </Typography>
          {!hideImage && (
            <Typography
              sx={{ color: "secondary.main" }}
              className="font-10 font-400"
            >
              {group}
            </Typography>
          )}
          <a href={link} target="_blank">
            <Typography sx={{ color: "#1A73E8" }} className="font-10 font-600">
              {link}
            </Typography>
          </a>
        </Box>
      </Box>
      <Box className="d-flex flex-column items-end justify-center">
        <Typography
          sx={{ color: "secondary.main" }}
          className="font-10 font-600"
        >
          {time}
        </Typography>
        {!link && (
          <Box
            className="d-flex justify-center items-center"
            sx={{
              width: "13px",
              height: "13px",
              borderRadius: "50%",
              background: "#1A73E8",
            }}
          >
            <Typography
              className="font-8 font-400 text-right"
              sx={{ color: "info.main" }}
            >
              {number}
            </Typography>
          </Box>
        )}
        {link && (
          <Image
            src="/assets/icons/link_icon.svg"
            alt="icon"
            width={11}
            height={13}
          />
        )}
      </Box>
    </Box>
  );
};

export default MessagesWrapper;
