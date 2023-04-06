import MessagesWrapper from "@/components/molecules/wrappers/MessagesWrapper";
import { IMessages } from "@/data/dashboard";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface IProps {
  messages: IMessages[];
}

const MessagesPage: React.FC<IProps> = ({ messages }) => {
  return (
    <Box
      sx={{
        background: "#FBFAFA",
        boxShadow:
          "0px 1px 2px rgba(16, 24, 40, 0.1), 0px 1px 3px rgba(16, 24, 40, 0.15)",
        borderRadius: "10px",
        pt: 1,
      }}
    >
      <Typography
        className="font-16 font-500"
        sx={{ color: "secondary.main", mx: 2 }}
      >
        Messages
      </Typography>
      <Box>
        {messages.map((item, index) => (
          <MessagesWrapper
            key={index}
            message={item.message}
            time={item.time}
            group={item.group}
            number={item?.number}
          />
        ))}
      </Box>
      {messages.length === 0 && (
        <Box
          className="d-flex justify-center flex-column items-center"
          sx={{ p: 2 }}
        >
          <Image
            src="/assets/icons/empty_message.svg"
            width={81}
            height={90}
            alt="icon"
          />
          <Typography
            className="font-12 font-500"
            sx={{ color: "secondary.main" }}
          >
            Your messages will appear here
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default MessagesPage;
