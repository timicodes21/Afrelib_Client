import MessagesWrapper from "@/components/molecules/wrappers/MessagesWrapper";
import { IMessages, messages } from "@/data/dashboard";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface IProps {
  submissions: IMessages[];
  noStyles?: boolean;
}

const TeamSubmissions: React.FC<IProps> = ({ submissions, noStyles }) => {
  return (
    <Box
      sx={
        noStyles
          ? {}
          : {
              background: "#FBFAFA",
              boxShadow:
                "0px 1px 2px rgba(16, 24, 40, 0.1), 0px 1px 3px rgba(16, 24, 40, 0.15)",
              borderRadius: "10px",
              pt: 1,
            }
      }
    >
      {
        <Box>
          {submissions.map((item, index) => (
            <MessagesWrapper
              key={index}
              message={item.message}
              time={item.time}
              group={item.group}
              number={item?.number}
              hideImage
              link="https://jdjjdjdjjdjdjjjiioe.com"
              whiteBg={noStyles}
            />
          ))}
        </Box>
      }
      {submissions.length === 0 && (
        <Box
          sx={{ p: 2 }}
          className="d-flex justify-center items-center flex-column"
        >
          <Image
            src="/assets/icons/empty_icon.svg"
            alt="icon"
            width={143}
            height={107}
          />
          <Typography
            className="font-12 font-500"
            sx={{ color: "secondary.main" }}
          >
            There are no submissions yet...
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default TeamSubmissions;
