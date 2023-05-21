import React from "react";
import { Box, Typography } from "@mui/material";
import { useClassRoom } from "@/hooks/classRoom/useClassRoom";
import { useForm, Controller } from "react-hook-form";
import { CreateSubmissionFormValues } from "@/types/formValues";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthInput from "@/components/atoms/inputFields/AuthInput";
import InputErrorText from "@/components/atoms/texts/InputErrorText";
import CustomTextArea from "@/components/atoms/inputFields/CustomTextArea";
import DragAndDrop from "@/components/atoms/inputFields/DragAndDrop";
import { uploadFile } from "@/api/file";
import { toast } from "react-hot-toast";
import AuthButton from "@/components/atoms/buttons/AuthButton";

interface IProps {
  projectId: number;
}

const SubmissionForm: React.FC<IProps> = ({ projectId }) => {
  const {
    schema,
    fileSelected,
    setFileSelected,
    url,
    setUrl,
    onSubmit,
    loading,
  } = useClassRoom();

  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<CreateSubmissionFormValues>({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });

  const handleFile = async (file: any) => {
    const formData = new FormData();
    formData.append("uploadFile", file[0]);
    const res = await uploadFile(formData);
    if (typeof res === "object") {
      setUrl(res?.url ?? "");
      setValue("submitted_url", res?.url);
      setFileSelected(file[0]?.name ?? "");
    } else {
      toast.error("An error occured, try again");
    }
  };

  const handleCustomSubmit =
    (projectId: any) => (data: CreateSubmissionFormValues) => {
      onSubmit(data, projectId);
    };

  return (
    <Box
      sx={{
        background: "#FFFFFF",
        boxShadow:
          "0px 1px 2px rgba(16, 24, 40, 0.1), 7px 0px 4px rgba(117, 171, 242, 0.08)",
        borderRadius: "8px",
        border: "1px solid #EAECF0",
        p: 1,
      }}
    >
      <Typography sx={{ color: "secondary.main" }} className="font-20 font-700">
        Make Submission
      </Typography>

      <form onSubmit={handleSubmit(handleCustomSubmit(projectId))}>
        <Box sx={{ mt: 2 }}>
          <>
            <Controller
              control={control}
              name="submission_title"
              render={({ field: { onChange, value, onBlur } }) => (
                <AuthInput
                  label="Title"
                  type="text"
                  placeholder="Enter submission title"
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  blackLabel
                  smallLabel
                />
              )}
            />
            {errors?.submission_title && (
              <InputErrorText>
                {errors?.submission_title?.message ?? ""}
              </InputErrorText>
            )}
          </>
          <Box sx={{ mt: 2 }}>
            <Controller
              control={control}
              name="submitted_file"
              render={({ field: { onChange, value, onBlur } }) => (
                <AuthInput
                  label="URL"
                  type="url"
                  placeholder="Paste URL"
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  blackLabel
                  smallLabel
                />
              )}
            />
            {errors?.submitted_file && (
              <InputErrorText>
                {errors?.submitted_file?.message ?? ""}
              </InputErrorText>
            )}
          </Box>
          <Box sx={{ mt: 2 }}>
            <Controller
              control={control}
              name="week_number"
              render={({ field: { onChange, value, onBlur } }) => (
                <AuthInput
                  label="Week"
                  type="number"
                  placeholder="Week number"
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  blackLabel
                  smallLabel
                  min={0}
                />
              )}
            />
            {errors?.week_number && (
              <InputErrorText>
                {errors?.week_number?.message ?? ""}
              </InputErrorText>
            )}
          </Box>
          <Box sx={{ mt: 2 }}>
            <Controller
              control={control}
              name="submission_comment"
              render={({ field: { onChange, value, onBlur } }) => (
                <CustomTextArea
                  label="Comment"
                  // type="date"
                  placeholder="Type your message..."
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  blackLabel
                  smallLabel
                />
              )}
            />
            {errors?.submission_comment && (
              <InputErrorText>
                {errors?.submission_comment?.message ?? ""}
              </InputErrorText>
            )}
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography
              sx={{ color: "secondary.main", mb: 1 }}
              className="font-12 font-600"
            >
              File (pdf,doc,etc)
            </Typography>
            <DragAndDrop
              handleDragDrop={file => handleFile(file)}
              fileName={fileSelected}
            />
            {errors?.submitted_url && (
              <InputErrorText>
                {errors?.submitted_url?.message ?? ""}
              </InputErrorText>
            )}
          </Box>
          <Box sx={{ mt: { xs: 2, md: 4 } }}>
            <AuthButton type="submit" onClick={() => {}} loading={loading}>
              Submit
            </AuthButton>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default SubmissionForm;
