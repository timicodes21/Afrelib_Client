import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface IProps {
  text: string;
}

const EmptyPage: React.FC<IProps> = ({ text }) => {
  return (
    <Box
      className="d-flex flex-column justify-center items-center"
      sx={{ height: "60vh" }}
    >
      <Image
        width={143}
        height={107}
        alt="emty_icon"
        src="/assets/icons/empty_icon.svg"
      />
      <Typography
        className="font-12 font-500 text-center"
        sx={{ color: "secondary.main", mt: 2, width: "240px" }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default EmptyPage;
