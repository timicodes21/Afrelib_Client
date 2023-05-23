import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { GrClose } from "react-icons/gr";
import { useForm, Controller } from "react-hook-form";
import { UpdateCohortFormValues } from "@/types/formValues";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthInput from "@/components/atoms/inputFields/AuthInput";
import AuthButton from "@/components/atoms/buttons/AuthButton";
import InputErrorText from "@/components/atoms/texts/InputErrorText";
import {
  useAdminCohort,
  useGetSingleCohort,
} from "@/hooks/admin/useAdminCohort";
import CustomTextArea from "@/components/atoms/inputFields/CustomTextArea";

interface IProps {
  handleClose: () => void;
  cohortId: string;
  cohortName: string;
  cohortDescription: string;
}

const UpdateCohort: React.FC<IProps> = ({
  handleClose,
  cohortId,
  cohortDescription,
  cohortName,
}) => {
  const { schemaUpdate, onSubmitUpdate, isLoadingUpdate } = useAdminCohort();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateCohortFormValues>({
    mode: "onBlur",
    resolver: zodResolver(schemaUpdate),
  });

  const { data, isFetching } = useGetSingleCohort(cohortId, true);

  console.log("data single cohort", data);

  return (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
      <Box className="d-flex justify-between items-center">
        <Typography
          sx={{ color: "secondary.main" }}
          className="font-20 font-500"
        >
          Update Cohort
        </Typography>
        <GrClose
          style={{ color: "#353F50" }}
          className="pointer font-16 font-700"
          onClick={handleClose}
        />
      </Box>
      <Box>
        <form onSubmit={handleSubmit(data => onSubmitUpdate(data, cohortId))}>
          <Grid container sx={{ mt: 3 }} spacing={2}>
            <Grid item xs={12} md={6}>
              <Controller
                control={control}
                name="name"
                defaultValue={cohortName}
                render={({ field: { onChange, value, onBlur } }) => (
                  <AuthInput
                    label="Cohort Name"
                    type="text"
                    placeholder="Name"
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
            </Grid>

            <Grid item xs={12} md={6}>
              <Controller
                control={control}
                name="description"
                defaultValue={cohortDescription}
                render={({ field: { onChange, value, onBlur } }) => (
                  <CustomTextArea
                    label="Description"
                    type="date"
                    placeholder="Description"
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
            </Grid>
          </Grid>
          <Box sx={{ mt: { xs: 2, md: 4 } }} className="d-flex justify-center">
            <Box sx={{ width: "327px" }}>
              <AuthButton
                type="submit"
                onClick={() => {}}
                loading={isLoadingUpdate}
              >
                Edit Cohort
              </AuthButton>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default UpdateCohort;
