import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "@/styles/Molecules.module.css";
import Image from "next/image";

interface IProps {
  title: string;
  background: string;
  textColor: string;
  value: string;
  value2?: string;
  leadershipCard?: boolean;
  height?: string;
}

const DashboardCard: React.FC<IProps> = ({
  title,
  background,
  textColor,
  value,
  leadershipCard,
  value2,
  height,
}) => {
  return (
    <Box
      sx={{
        boxShadow:
          "0px 1px 2px rgba(16, 24, 40, 0.1), 0px 1px 3px rgba(16, 24, 40, 0.15)",
        borderRadius: "8px",
        background,
        p: 2,
        height: height ?? "120px",
      }}
      className={styles.dashboardCard}
    >
      <Typography className="font-14 font-500" sx={{ color: "secondary.A100" }}>
        {title}
      </Typography>
      {!leadershipCard && (
        <Typography
          className="font-28 font-700"
          sx={{ color: textColor, mt: 1 }}
        >
          {value}
        </Typography>
      )}

      {leadershipCard && (
        <Box className="d-flex justify-between items-center">
          <Box>
            <Box>
              <Typography
                className="font-10 font-500"
                sx={{ color: "secondary.main" }}
              >
                Your Team
              </Typography>
              <Image
                src="/assets/icons/avatar_group.svg"
                alt="avatar"
                width={88}
                height={24}
              />
            </Box>
            <Box sx={{ mt: 1 }}>
              <Typography
                className="font-10 font-500"
                sx={{ color: "secondary.main" }}
              >
                You
              </Typography>
              <Image
                src="/assets/icons/avatar.svg"
                alt="avatar"
                width={24}
                height={24}
              />
            </Box>
          </Box>
          <Box>
            <Typography
              className="font-28 font-700 text-right"
              sx={{ color: textColor }}
            >
              {value}
            </Typography>
            <Typography
              className="font-28 font-700 text-right"
              sx={{ color: textColor }}
            >
              {value2}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default DashboardCard;
