import AuthButton from "@/components/atoms/buttons/AuthButton";
import AuthInput from "@/components/atoms/inputFields/AuthInput";
import CustomTextArea from "@/components/atoms/inputFields/CustomTextArea";
import InputErrorText from "@/components/atoms/texts/InputErrorText";
import { useClassRoom } from "@/hooks/classRoom/useClassRoom";
import { AddProjectFormValues } from "@/types/formValues";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";

interface IProps {
  handleClose: () => void;
}

const AddProject: React.FC<IProps> = ({ handleClose }) => {
  const { addProjectSchema, onSubmitAddProject, isLoadingAdd } = useClassRoom();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddProjectFormValues>({
    mode: "onBlur",
    resolver: zodResolver(addProjectSchema),
  });
  return (
    <Box>
      <Typography sx={{ color: "secondary.main" }} className="font-20 font-700">
        Add Project
      </Typography>

      <form
        onSubmit={handleSubmit(data => onSubmitAddProject(data, handleClose))}
      >
        <Box sx={{ mt: 2 }}>
          <>
            <Controller
              control={control}
              name="project_title"
              render={({ field: { onChange, value, onBlur } }) => (
                <AuthInput
                  label="Project Title"
                  type="text"
                  placeholder="Enter Project title"
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  blackLabel
                  smallLabel
                />
              )}
            />
            {errors?.project_title && (
              <InputErrorText>
                {errors?.project_title?.message ?? ""}
              </InputErrorText>
            )}
          </>
          <Box sx={{ mt: 2 }}>
            <Controller
              control={control}
              name="project_description"
              render={({ field: { onChange, value, onBlur } }) => (
                <CustomTextArea
                  label="Title"
                  placeholder="Enter project description"
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  blackLabel
                  smallLabel
                />
              )}
            />
            {errors?.project_description && (
              <InputErrorText>
                {errors?.project_description?.message ?? ""}
              </InputErrorText>
            )}
          </Box>

          <Box sx={{ mt: { xs: 2, md: 4 } }} className="d-flex justify-center">
            <Box sx={{ width: "300px" }}>
              <AuthButton
                type="submit"
                onClick={() => {}}
                loading={isLoadingAdd}
              >
                Submit
              </AuthButton>
            </Box>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default AddProject;
