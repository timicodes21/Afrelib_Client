import { SupportFormValues } from "@/types/formValues";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSupport } from "@/hooks/support/useSupport";
import AuthInput from "@/components/atoms/inputFields/AuthInput";
import InputErrorText from "@/components/atoms/texts/InputErrorText";
import CustomTextArea from "@/components/atoms/inputFields/CustomTextArea";
import DragAndDrop from "@/components/atoms/inputFields/DragAndDrop";
import AuthButton from "@/components/atoms/buttons/AuthButton";
import { uploadFile } from "@/api/file";
import { toast } from "react-hot-toast";

const SupportForm = () => {
  const { schema, url, setUrl, handleSubmitSupport, isLoading } = useSupport();
  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<SupportFormValues>({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });

  const [fileSelected, setFileSelected] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const handleFile = async (file: any) => {
    console.log("file in file function", file);
    const formData = new FormData();
    formData.append("uploadFile", file[0]);
    setIsUploading(true);
    const res = await uploadFile(formData, "submissions");
    console.log("res file upload", res);
    if (typeof res === "object") {
      setUrl(res?.url ?? "");
      setValue("file", res?.url);
      setFileSelected(file[0]?.name ?? "");
    } else {
      toast.error("An error occured, try again");
    }
    setIsUploading(false);
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
        py: 2,
      }}
    >
      <Typography sx={{ color: "secondary.main" }} className="font-20 font-700">
        Message the Support Team
      </Typography>
      <form onSubmit={handleSubmit(handleSubmitSupport)}>
        <Box sx={{ mt: 2 }}>
          <>
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value, onBlur } }) => (
                <AuthInput
                  label="Nature of Issue"
                  type="text"
                  placeholder="Nature of Issue"
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  blackLabel
                  smallLabel
                />
              )}
            />
            {errors?.name && (
              <InputErrorText>{errors?.name?.message ?? ""}</InputErrorText>
            )}
          </>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Controller
            control={control}
            name="description"
            render={({ field: { onChange, value, onBlur } }) => (
              <CustomTextArea
                label="Description"
                // type="date"
                placeholder="Type your description..."
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                blackLabel
                smallLabel
              />
            )}
          />
          {errors?.description && (
            <InputErrorText>
              {errors?.description?.message ?? ""}
            </InputErrorText>
          )}
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography
            sx={{ color: "secondary.main", mb: 1 }}
            className="font-12 font-600"
          >
            Attach file (Optional)
          </Typography>
          <DragAndDrop
            handleDragDrop={file => handleFile(file)}
            fileName={fileSelected}
            isLoading={isUploading}
          />
        </Box>
        <Box sx={{ mt: { xs: 2, md: 4 } }}>
          <AuthButton
            type="submit"
            onClick={() => {}}
            loading={isLoading}
            disabled={isUploading || isLoading}
          >
            Send
          </AuthButton>
        </Box>
      </form>
    </Box>
  );
};

export default SupportForm;
