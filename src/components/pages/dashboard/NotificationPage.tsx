import NotificationWrapper from "@/components/molecules/wrappers/NotificationWrapper";
import { notifications } from "@/data/dashboard";
import { Box, Typography } from "@mui/material";
import React from "react";

interface IProps {}

const NotificationPage = () => {
  return (
    <>
      <Box sx={{ p: 2 }}>
        <Box className="d-flex justify-between items-center">
          <Typography
            sx={{ color: "secondary.main" }}
            className="font-16 font-600"
          >
            Notifications
          </Typography>
          <Typography
            sx={{ color: "primary.A100" }}
            className="font-16 font-600 pointer"
          >
            Mark all as read
          </Typography>
        </Box>
        <Box sx={{ mt: 3 }}>
          {notifications.map((item, index) => (
            <NotificationWrapper
              src={item?.src}
              title={item?.title}
              date={item?.date}
              time={item?.time}
              key={index}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default NotificationPage;
