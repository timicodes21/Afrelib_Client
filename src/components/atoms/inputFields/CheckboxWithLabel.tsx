import { Box, Checkbox, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  onChange:
    | ((event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void)
    | undefined;
  checked: boolean;
}

const CheckboxWithLabel: React.FC<IProps> = ({
  children,
  onChange,
  checked,
}) => {
  return (
    <Box className="d-flex items-center">
      <Checkbox onChange={onChange} checked={checked} />
      <Typography sx={{ color: "secondary.main", ml: 1 }}>
        {children}
      </Typography>
    </Box>
  );
};

export default CheckboxWithLabel;
