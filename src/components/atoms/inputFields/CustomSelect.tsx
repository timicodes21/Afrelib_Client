import { ISelect } from "@/types";
import { Typography, Box } from "@mui/material";
import React, { ReactNode } from "react";
import Select, { ActionMeta, GroupBase, SingleValue } from "react-select";

interface IProps {
  label: string;
  icon?: ReactNode;
  blackLabel?: boolean;
  smallLabel?: boolean;
  options: readonly (string | number | GroupBase<string | number>)[];
  background?: string;
  onChange:
    | ((
        newValue: SingleValue<string | number>,
        actionMeta: ActionMeta<string | number>,
      ) => void)
    | undefined;
  placeholder: string;
}

const CustomSelect: React.FC<IProps> = ({
  options,
  blackLabel,
  smallLabel,
  label,
  background,
  onChange,
  placeholder,
}) => {
  return (
    <>
      <Typography
        sx={{ color: blackLabel ? "secondary.main" : "info.dark" }}
        className={`${smallLabel ? "font-12" : "font-16"} ${
          smallLabel ? "font-600" : "font-400"
        }`}
      >
        {label}
      </Typography>
      <Box
        sx={{
          backgroundColor: "info.dark",
          mt: smallLabel ? 0 : 1,
        }}
      >
        <Select
          options={options}
          onChange={onChange}
          placeholder={placeholder}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              background: background ?? "#FFF",
              border: "none",
            }),
            placeholder: baseStyles => {
              return {
                ...baseStyles,
                color: "#848F9F",
                fontSize: "14px",
              };
            },
          }}
        />
      </Box>
    </>
  );
};

export default CustomSelect;
