import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { GrClose } from "react-icons/gr";
import { useForm, Controller } from "react-hook-form";
import { AddCohortFormValues } from "@/types/formValues";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthInput from "@/components/atoms/inputFields/AuthInput";
import CustomSelect from "@/components/atoms/inputFields/CustomSelect";
import AuthButton from "@/components/atoms/buttons/AuthButton";
import { useFilterUsersForSelect, useTeamsForSelect } from "@/hooks/utility";
import InputErrorText from "@/components/atoms/texts/InputErrorText";
import { useAdminCohort } from "@/hooks/admin/useAdminCohort";
import CustomTextArea from "@/components/atoms/inputFields/CustomTextArea";
import CustomMultiSelect from "@/components/atoms/inputFields/CustomMultiSelect";

interface IProps {
  handleClose: () => void;
}

const AddCohort: React.FC<IProps> = ({ handleClose }) => {
  const { schema, onSubmit, isLoading: isLoadingSubmit } = useAdminCohort();
  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<AddCohortFormValues>({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });

  const panelists = watch("panelists");

  const { allMentors, allPanelists, isLoading } = useFilterUsersForSelect();
  const { teamSelect, isLoading: isLoadingTeams } = useTeamsForSelect();

  return (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
      <Box className="d-flex justify-between items-center">
        <Typography
          sx={{ color: "secondary.main" }}
          className="font-20 font-500"
        >
          Add Cohort
        </Typography>
        <GrClose
          style={{ color: "#353F50" }}
          className="pointer font-16 font-700"
          onClick={handleClose}
        />
      </Box>
      <Box>
        <form onSubmit={handleSubmit(data => onSubmit(data, handleClose))}>
          <Grid container sx={{ mt: 3 }} spacing={2}>
            <Grid item xs={12} md={6}>
              <CustomMultiSelect
                label="Select Mentor(s)"
                smallLabel
                onChange={e => {
                  setValue(
                    "mentors",
                    Array.isArray(e) ? e.map(item => item?.value) : [],
                  );
                }}
                blackLabel
                options={allMentors ? allMentors : [{ label: "", value: "" }]}
                background="#F3F5F6"
                placeholder="Select type"
                isLoading={isLoading}
              />
              {errors?.mentors && (
                <InputErrorText>
                  {errors?.mentors?.message ?? ""}
                </InputErrorText>
              )}
            </Grid>

            <Grid item xs={12} md={6}>
              <CustomMultiSelect
                label="Select Panelists(s)"
                smallLabel
                onChange={e => {
                  setValue(
                    "panelists",
                    Array.isArray(e) ? e.map(item => Number(item?.value)) : [],
                  );
                }}
                blackLabel
                options={
                  allPanelists ? allPanelists : [{ label: "", value: "" }]
                }
                background="#F3F5F6"
                placeholder="Select type"
                isLoading={isLoading}
              />
              {errors?.panelists && (
                <InputErrorText>
                  {errors?.panelists?.message ?? ""}
                </InputErrorText>
              )}
            </Grid>

            <Grid item xs={12} md={6}>
              <CustomMultiSelect
                label="Select Team(s)"
                smallLabel
                onChange={e => {
                  setValue(
                    "teams",
                    Array.isArray(e) ? e.map(item => item?.value) : [],
                  );
                }}
                blackLabel
                options={teamSelect ? teamSelect : [{ label: "", value: "" }]}
                background="#F3F5F6"
                placeholder="Select Team"
                isLoading={isLoadingTeams}
              />
              {errors?.teams && (
                <InputErrorText>{errors?.teams?.message ?? ""}</InputErrorText>
              )}
            </Grid>

            <Grid item xs={12} md={6}>
              <Controller
                control={control}
                name="name"
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
                name="startDate"
                render={({ field: { onChange, value, onBlur } }) => (
                  <AuthInput
                    label="Start Date"
                    type="date"
                    placeholder="Start date"
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    blackLabel
                    smallLabel
                  />
                )}
              />
              {errors?.startDate && (
                <InputErrorText>
                  {errors?.startDate?.message ?? ""}
                </InputErrorText>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                control={control}
                name="endDate"
                render={({ field: { onChange, value, onBlur } }) => (
                  <AuthInput
                    label="End Date"
                    type="date"
                    placeholder="End date"
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    blackLabel
                    smallLabel
                  />
                )}
              />
              {errors?.endDate && (
                <InputErrorText>
                  {errors?.endDate?.message ?? ""}
                </InputErrorText>
              )}
            </Grid>

            <Grid item xs={12} md={6}>
              <Controller
                control={control}
                name="description"
                render={({ field: { onChange, value, onBlur } }) => (
                  <CustomTextArea
                    label="Description"
                    // type="date"
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
                loading={isLoadingSubmit}
              >
                Create Cohort
              </AuthButton>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default AddCohort;
