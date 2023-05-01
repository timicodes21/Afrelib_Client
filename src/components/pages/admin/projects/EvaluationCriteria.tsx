import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import HeaderAndCloseButton from "@/components/molecules/headers/HeaderAndCloseButton";
import AuthButton from "@/components/atoms/buttons/AuthButton";
import CustomTextArea from "@/components/atoms/inputFields/CustomTextArea";

interface IProps {
  handleClose: () => void;
}

const EvaluationCriteria: React.FC<IProps> = ({ handleClose }) => {
  const [value, setValue] = useState("");
  return (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
      <HeaderAndCloseButton
        header="Evaluation Criteria"
        onClick={handleClose}
      />
      <Typography className="font-14 font-400" sx={{ color: "secondary.main" }}>
        This will appear on the Panelists’ interface and serve as guidelines for
        evaluation of students’ projects.
      </Typography>

      <Box sx={{ my: 2 }}>
        <CustomTextArea
          label=""
          placeholder="Enter your message..."
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </Box>

      <Box className="text-center" sx={{ mt: 2 }}>
        <AuthButton onClick={() => {}} type="button" width="327px">
          Save
        </AuthButton>
      </Box>
    </Box>
  );
};

export default EvaluationCriteria;
