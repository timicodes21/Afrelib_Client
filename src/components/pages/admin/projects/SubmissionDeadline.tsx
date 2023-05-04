import { Box, Typography } from "@mui/material";
import React, { MouseEvent, useState } from "react";
import HeaderAndCloseButton from "@/components/molecules/headers/HeaderAndCloseButton";
import AuthButton from "@/components/atoms/buttons/AuthButton";
import Calendar from "react-calendar";
import { Value } from "react-calendar/dist/cjs/shared/types";

interface IProps {
  handleClose: () => void;
}

const SubmissionDeadline: React.FC<IProps> = ({ handleClose }) => {
  const [value, onChange] = useState(new Date());

  // const handleChange: (
  //   value: Value,
  //   event: MouseEvent<HTMLButtonElement, MouseEvent>,
  // ) => void = () => {
  //   onChange(value);
  // };

  console.log("calendar value", value);
  return (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
      <HeaderAndCloseButton
        header="Submission Deadline"
        onClick={handleClose}
      />
      <Typography className="font-14 font-400" sx={{ color: "secondary.main" }}>
        Choose a date for the next submission{" "}
      </Typography>

      <Box className="d-flex justify-center" sx={{ my: 2 }}>
        <Calendar value={value} />
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography
          className="font-14 font-400"
          sx={{ color: "secondary.main" }}
        >
          Next Submission: 23 April 2023
        </Typography>
      </Box>

      <Box className="text-center" sx={{ mt: 2 }}>
        <AuthButton onClick={() => {}} type="button" width="327px">
          Save
        </AuthButton>
      </Box>
    </Box>
  );
};

export default SubmissionDeadline;
