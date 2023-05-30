import { Box } from "@mui/material";
import React, { ReactNode } from "react";

const ActiveWeek = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#1A73E8",
        borderRadius: "20px",
        boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
        zIndex: 2,
        mt: 1,
      }}
    >
      <span style={{ color: "#F3F5F6", fontWeight: 700, fontSize: "18px" }}>
        {children}
      </span>
    </Box>
  );
};

const InActiveWeek = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#F3F5F6",
        borderRadius: "20px",
        boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
        zIndex: 2,
        mt: 1,
      }}
    >
      <span
        style={{
          color: "#F3F5F6",
          background: "#BFBFBF",
          fontWeight: 700,
          fontSize: "18px",
          width: "26px",
          height: "26px",
          borderRadius: "13px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </span>
    </Box>
  );
};

const Line = () => {
  return (
    <Box
      sx={{
        height: "12px",
        width: "40px",
        background: "#F3F5F6",
        marginLeft: "-5px",
        marginRight: "-5px",
        mt: 1,
      }}
    ></Box>
  );
};

interface IProps {
  currentWeek: number;
}

const DashboardWeeklyProgress: React.FC<IProps> = ({ currentWeek }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
      {currentWeek >= 1 ? (
        <ActiveWeek>1</ActiveWeek>
      ) : (
        <InActiveWeek>1</InActiveWeek>
      )}
      <Line />
      {currentWeek >= 2 ? (
        <ActiveWeek>2</ActiveWeek>
      ) : (
        <InActiveWeek>2</InActiveWeek>
      )}
      <Line />
      {currentWeek >= 3 ? (
        <ActiveWeek>3</ActiveWeek>
      ) : (
        <InActiveWeek>3</InActiveWeek>
      )}
      <Line />
      {currentWeek >= 4 ? (
        <ActiveWeek>4</ActiveWeek>
      ) : (
        <InActiveWeek>4</InActiveWeek>
      )}
      <Line />
      {currentWeek >= 5 ? (
        <ActiveWeek>5</ActiveWeek>
      ) : (
        <InActiveWeek>5</InActiveWeek>
      )}
      <Line />
      {currentWeek >= 6 ? (
        <ActiveWeek>6</ActiveWeek>
      ) : (
        <InActiveWeek>6</InActiveWeek>
      )}
    </Box>
  );
};

export default DashboardWeeklyProgress;
