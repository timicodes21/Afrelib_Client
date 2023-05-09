import AuthButton from "@/components/atoms/buttons/AuthButton";
import AuthInput from "@/components/atoms/inputFields/AuthInput";
import CustomTextArea from "@/components/atoms/inputFields/CustomTextArea";
import InputErrorText from "@/components/atoms/texts/InputErrorText";
import HeaderAndCloseButton from "@/components/molecules/headers/HeaderAndCloseButton";
import { useAdminDashboard } from "@/hooks/admin/useAdminDashboard";
import { WeeklyUpdatesFormValues } from "@/types/formValues";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box } from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";

interface IProps {
  handleClose: () => void;
}

const WeeklyUpdatesForm: React.FC<IProps> = ({ handleClose }) => {
  const { WeeklyUpdatesschema, isLoadingUpdates, onSubmitUpdate } =
    useAdminDashboard();
  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<WeeklyUpdatesFormValues>({
    mode: "onBlur",
    resolver: zodResolver(WeeklyUpdatesschema),
  });

  console.log("errors", errors);
  return (
    <Box sx={{ p: { xs: 2, md: 5 } }}>
      <HeaderAndCloseButton header="Weekly Update" onClick={handleClose} />
      <form onSubmit={handleSubmit(data => onSubmitUpdate(data, handleClose))}>
        <Box sx={{ mt: 2 }}>
          <Controller
            control={control}
            name="week"
            render={({ field: { onChange, value, onBlur } }) => (
              <AuthInput
                label="Week"
                type="number"
                placeholder="e.g Week 3"
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                smallLabel
                blackLabel
                min={0}
              />
            )}
          />
          {errors?.week && (
            <InputErrorText>{errors?.week?.message ?? ""}</InputErrorText>
          )}
        </Box>
        <Box sx={{ mt: 2 }}>
          <Controller
            control={control}
            name="title"
            render={({ field: { onChange, value, onBlur } }) => (
              <AuthInput
                label="Title"
                type="text"
                placeholder="Title"
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                smallLabel
                blackLabel
                min={0}
              />
            )}
          />
          {errors?.title && (
            <InputErrorText>{errors?.title?.message ?? ""}</InputErrorText>
          )}
        </Box>
        <Box sx={{ mt: 2 }}>
          <Controller
            control={control}
            name="body"
            render={({ field: { onChange, value, onBlur } }) => (
              <CustomTextArea
                label="Message"
                placeholder="Type your message..."
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                blackLabel
                smallLabel
                rows={10}
              />
            )}
          />
          {errors?.body && (
            <InputErrorText>{errors?.body?.message ?? ""}</InputErrorText>
          )}
        </Box>
        <Box sx={{ mt: { xs: 2, md: 4 } }} className="d-flex justify-center">
          <Box sx={{ width: "284px" }}>
            <AuthButton
              type="submit"
              onClick={() => {}}
              loading={isLoadingUpdates}
            >
              Submit
            </AuthButton>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default WeeklyUpdatesForm;
