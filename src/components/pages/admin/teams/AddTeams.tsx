import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { GrClose } from "react-icons/gr";
import { useForm, Controller } from "react-hook-form";
import { AddTeamFormValues } from "@/types/formValues";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthInput from "@/components/atoms/inputFields/AuthInput";
import CustomSelect from "@/components/atoms/inputFields/CustomSelect";
import AuthButton from "@/components/atoms/buttons/AuthButton";
import {
  useCohortsUsersForSelect,
  useFilterUsersForSelect,
  useStudentsForSelect,
} from "@/hooks/utility";
import InputErrorText from "@/components/atoms/texts/InputErrorText";
import CustomTextArea from "@/components/atoms/inputFields/CustomTextArea";
import { useAdminTeams } from "@/hooks/admin/useAdminTeams";
import CustomMultiSelect from "@/components/atoms/inputFields/CustomMultiSelect";
import HeaderAndCloseButton from "@/components/molecules/headers/HeaderAndCloseButton";

interface IProps {
  handleClose: () => void;
}

const AddTeams: React.FC<IProps> = ({ handleClose }) => {
  const { schema, onSubmit, isLoading: isLoadingSubmit } = useAdminTeams();
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

  const { allMentors, isLoading } = useFilterUsersForSelect();
  const { studentsSelect, isFetching: isFetchingStudents } =
    useStudentsForSelect();
  const { cohortsSelect, isLoading: isLoadingCohorts } =
    useCohortsUsersForSelect();

  return (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
      <HeaderAndCloseButton header="Add Team" onClick={handleClose} />
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container sx={{ mt: 3 }} spacing={2}>
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

            {/* <Grid item xs={12} md={6}>
              <CustomSelect
                label="Select Cohort"
                smallLabel
                onChange={e => {
                  setValue(
                    "cohort",
                    typeof e?.value === "string" ? e.value : "",
                  );
                }}
                blackLabel
                options={
                  cohortsSelect ? cohortsSelect : [{ label: "", value: "" }]
                }
                background="#F3F5F6"
                placeholder="Select Cohort"
                isLoading={isLoadingCohorts}
              />
              {errors?.cohort && (
                <InputErrorText>{errors?.cohort?.message ?? ""}</InputErrorText>
              )}
            </Grid> */}

            <Grid item xs={12} md={6}>
              <CustomSelect
                label="Select Mentor"
                smallLabel
                onChange={e => {
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
              <CustomMultiSelect
                label="Select Students(s)"
                smallLabel
                onChange={e => {
                  setValue(
                    "students",
                    Array.isArray(e) ? e.map(item => item?.value) : [],
                  );
                }}
                blackLabel
                options={
                  studentsSelect ? studentsSelect : [{ label: "", value: "" }]
                }
                background="#F3F5F6"
                placeholder="Select type"
                isLoading={isFetchingStudents}
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
              <AuthButton
                type="submit"
                onClick={() => {}}
                loading={isLoadingSubmit}
              >
                Create Team
              </AuthButton>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default AddTeams;
