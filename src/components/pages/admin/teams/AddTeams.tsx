import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { GrClose } from "react-icons/gr";
import { useForm, Controller } from "react-hook-form";
import { AddTeamFormValues } from "@/types/formValues";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthInput from "@/components/atoms/inputFields/AuthInput";
import CustomSelect from "@/components/atoms/inputFields/CustomSelect";
import AuthButton from "@/components/atoms/buttons/AuthButton";
import { useFilterUsersForSelect, useGetRoles } from "@/hooks/utility";
import InputErrorText from "@/components/atoms/texts/InputErrorText";
import CustomTextArea from "@/components/atoms/inputFields/CustomTextArea";
import { useAdminTeams } from "@/hooks/admin/useAdminTeams";

interface IProps {
  handleClose: () => void;
}

const AddTeams: React.FC<IProps> = ({ handleClose }) => {
  const { schema, onSubmit } = useAdminTeams();
  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<AddTeamFormValues>({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });

  console.log("errors", errors);

  const { allMentors, isLoading, allStudents } = useFilterUsersForSelect();

  return (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
      <Box className="d-flex justify-between items-center">
        <Typography
          sx={{ color: "secondary.main" }}
          className="font-20 font-500"
        >
          Add Team
        </Typography>
        <GrClose
          style={{ color: "#353F50" }}
          className="pointer font-16 font-700"
          onClick={handleClose}
        />
      </Box>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container sx={{ mt: 3 }} spacing={2}>
            <Grid item xs={12} md={6}>
              <CustomSelect
                label="Select Mentor"
                smallLabel
                onChange={e => {
                  console.log("select event", e);
                  setValue(
                    "mentor",
                    typeof e?.value === "number" ? e.value : 0,
                  );
                }}
                blackLabel
                options={allMentors ? allMentors : [{ label: "", value: "" }]}
                background="#F3F5F6"
                placeholder="Select Mentor"
                isLoading={isLoading}
              />
              {errors?.mentor && (
                <InputErrorText>{errors?.mentor?.message ?? ""}</InputErrorText>
              )}
            </Grid>

            <Grid item xs={12} md={6}>
              <CustomSelect
                label="Select Students(s)"
                smallLabel
                onChange={e => {
                  console.log("select event", e);
                  setValue(
                    "students",
                    Array.isArray(e) ? e.map(item => item?.value) : [],
                  );
                }}
                blackLabel
                options={allStudents ? allStudents : [{ label: "", value: "" }]}
                background="#F3F5F6"
                placeholder="Select type"
                isLoading={isLoading}
                isMulti
              />
              {errors?.students && (
                <InputErrorText>
                  {errors?.students?.message ?? ""}
                </InputErrorText>
              )}
            </Grid>

            <Grid item xs={12} md={6}>
              <Controller
                control={control}
                name="name"
                render={({ field: { onChange, value, onBlur } }) => (
                  <AuthInput
                    label="Team Name"
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
              <AuthButton type="submit" onClick={() => {}} loading={false}>
                Create Cohort
              </AuthButton>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default AddTeams;
