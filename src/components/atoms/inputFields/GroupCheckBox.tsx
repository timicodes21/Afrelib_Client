import React from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Typography,
} from "@mui/material";
import { useWatch, useController } from "react-hook-form";
//import {FormLabel} from "../";

interface componentProps {
  label: string;
  disabled: boolean;
  row: boolean;
  name: string;
  options: { name: string; id: string | number }[] | [];
  control: any;
  optionColor: string;
}

const GroupCheckBox = ({
  control,
  label,
  name,
  options,
  row,
  disabled,
  optionColor,
}: componentProps) => {
  const {
    field: { ref, value, onChange, ...inputProps },
    formState: { errors },
  } = useController({
    name,
    control,
    defaultValue: [],
  });

  const checkboxIds = useWatch({ control, name: name }) || [];

  const handleChange = (value: { name: string; id: string | number }) => {
    const newArray = [...checkboxIds];
    const item = value.id;

    //Ensure array isnt empty
    if (newArray.length > 0) {
      //Attempt to find an item in array with matching id
      const index = newArray.findIndex(x => x === item);

      // If theres no match add item to the array
      if (index === -1) {
        newArray.push(item);
      } else {
        //If there is a match and the value is empty, remove the item from the array
        newArray.splice(index, 1);
      }
    } else {
      //If the array is empty, add the item to the array
      newArray.push(item);
    }

    //Overwrite existing array with newArray}
    onChange(newArray);
  };

  return (
    <div>
      <FormControl sx={{ marginTop: "0.75rem" }}>
        <FormLabel
          sx={{ color: "#000000", fontSize: "0.85rem" }}
          component="legend"
        >
          {label}
        </FormLabel>
        <FormGroup row={row}>
          {options.map(option => (
            <FormControlLabel
              //classes={row && {root: classes.label}}
              control={
                <Checkbox
                  checked={value?.includes(option.id)}
                  {...inputProps}
                  inputRef={ref}
                  onChange={() => handleChange(option)}
                  size="small"
                  disabled={disabled}
                />
              }
              label={
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontFamily: "Nunito",
                    lineHeight: "24px",
                    fontWeight: 400,
                    fontStyle: "normal",
                    color: `${optionColor}`,
                  }}
                >
                  {option.name}
                </Typography>
              }
              key={option.id}
            />
          ))}
        </FormGroup>
      </FormControl>
      {/* <FormHelperText error variant="outlined">
        {errors?.[name]?.message || " "}
      </FormHelperText> */}
    </div>
  );
};

export default GroupCheckBox;
