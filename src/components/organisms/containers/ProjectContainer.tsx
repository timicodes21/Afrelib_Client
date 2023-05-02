import ActionButton from "@/components/atoms/buttons/ActionButton";
import AuthButton from "@/components/atoms/buttons/AuthButton";
import LinearProgressBar from "@/components/atoms/progress/LinearProgressBar";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface IProps {
  headerText: string;
  onClick: () => void;
  submissionText: string;
  submissionsDone: number;
  totalSubmissions: number;
}

const ProjectContainer: React.FC<IProps> = ({
  headerText,
  onClick,
  submissionText,
  submissionsDone,
  totalSubmissions,
}) => {
  return (
    <Box
      sx={{
        p: 2,
        pb: { xs: 3, md: 4 },
        background: "#FBFAFA",
        borderRadius: "10px",
        boxShadow:
          "0px 1px 3px rgba(16, 24, 40, 0.15), 0px 1px 2px rgba(16, 24, 40, 0.1)",
      }}
    >
      <Box className="d-flex items-center justify-between">
        <Typography
          className="font-20 font-500"
          sx={{ color: "secondary.main" }}
        >
          {headerText}
        </Typography>
        <AuthButton
          type="button"
          size="small"
          notFullWidth
          onClick={onClick}
          borderRadius="20px"
        >
          New in
        </AuthButton>
      </Box>
      <Box sx={{ mt: { xs: 2, md: 3 } }}>
        <Typography
          className="font-14 font-500"
          sx={{ color: "secondary.main" }}
        >
          Submissions Done: {submissionText}
        </Typography>
        <Box sx={{ mt: 1 }}>
          <LinearProgressBar
            total={totalSubmissions}
            active={submissionsDone}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <Image
            alt="avatar_group"
            src="/assets/icons/avatar_group.svg"
            width={112}
            height={32}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectContainer;
