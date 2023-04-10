import { ISelect } from "@/types";
import { Typography, Box } from "@mui/material";
import React, { ReactNode } from "react";
import Select, { SingleValue, MultiValue } from "react-select";

interface Option {
  value: string | number;
  label: string;
}

type ValueType = Option | null;

interface IProps {
  label: string;
  icon?: ReactNode;
  blackLabel?: boolean;
  smallLabel?: boolean;
  background?: string;
  options: Option[];
  value?: ValueType;
  onChange: (value: MultiValue<Option> | SingleValue<Option>) => void;
  placeholder: string;
  isLoading?: boolean;
}

const CustomMultiSelect: React.FC<IProps> = ({
  options,
  blackLabel,
  smallLabel,
  label,
  background,
  onChange,
  placeholder,
  isLoading,
  value,
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
          value={value}
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
          isLoading={isLoading}
          isMulti
        />
      </Box>
    </>
  );
};

export default CustomMultiSelect;
