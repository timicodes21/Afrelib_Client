import { Box } from "@mui/material";
import React from "react";
import OptionItem from "./OptionItem";

interface IProps {
  onReset: () => void;
  isUserEnabled?: boolean;
  onDisableEnable: () => void;
}

const UsersOptionsList: React.FC<IProps> = ({
  onReset,
  isUserEnabled,
  onDisableEnable,
}) => {
  return (
    <Box
      sx={{
        borderRadius: "8px",
        boxShadow:
          "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
    >
      <OptionItem onClick={onReset} src="/assets/icons/reset_icon.svg">
        Reset Password
      </OptionItem>
      <OptionItem
        onClick={onDisableEnable}
        src={
          isUserEnabled
            ? "/assets/icons/disable_icon.svg"
            : "/assets/icons/enable_icon.svg"
        }
      >
        {isUserEnabled ? "Disable User" : "Enable User"}
      </OptionItem>
    </Box>
  );
};

export default UsersOptionsList;
