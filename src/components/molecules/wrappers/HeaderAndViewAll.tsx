import { Box, Typography } from "@mui/material";
import React from "react";

interface IProps {
  header: string;
  text: string;
  onClick: () => void;
  hideViewAll?: boolean;
  smallHeader?: boolean;
}

const HeaderAndViewAll: React.FC<IProps> = ({
  header,
  text,
  onClick,
  hideViewAll,
  smallHeader,
}) => {
  return (
    <Box className="d-flex items-center justify-between">
      <Typography
        className={`${smallHeader ? "font-16" : "font-20"} font-500`}
        sx={{ color: "secondary.main" }}
      >
        {header}
      </Typography>
      {!hideViewAll && (
        <Typography
          sx={{ color: "primary.A100" }}
          className="font-12 font-600 pointer"
          onClick={onClick}
        >
          {text}
        </Typography>
      )}
    </Box>
  );
};

export default HeaderAndViewAll;
