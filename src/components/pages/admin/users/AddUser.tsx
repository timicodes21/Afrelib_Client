import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { GrClose } from "react-icons/gr";
import { useForm, Controller } from "react-hook-form";
import { AddUserFormValues } from "@/types/formValues";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAdminUsers } from "@/hooks/admin/useAdminUsers";
import AuthInput from "@/components/atoms/inputFields/AuthInput";
import CustomSelect from "@/components/atoms/inputFields/CustomSelect";
import AuthButton from "@/components/atoms/buttons/AuthButton";
import { useGetRoles } from "@/hooks/utility";
import InputErrorText from "@/components/atoms/texts/InputErrorText";
import { ISelect } from "@/types";

interface IProps {
  handleClose: () => void;
}

const AddUser: React.FC<IProps> = ({ handleClose }) => {
  const { schema, onSubmit, isLoading } = useAdminUsers();
  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<AddUserFormValues>({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });

  const { data: allRoles, isFetching, rolesSelect } = useGetRoles();

  // This variable would watch for changes in the service ID and rerender the component
  const userType = watch("userType");

  return (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
      <Box className="d-flex justify-between items-center">
        <Typography
          sx={{ color: "secondary.main" }}
          className="font-20 font-500"
        >
          Add New User
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
              <CustomSelect
                label="User Type"
                smallLabel
                onChange={e => {
                  setValue(
                    "userType",
                    typeof e?.value === "string" || typeof e?.value === "number"
                      ? e?.value.toString()
                      : "",
                  );
                  setValue(
                    "roleName",
                    typeof e?.label === "string" || typeof e?.label === "number"
                      ? e?.label.toString()
                      : "",
                  );
                }}
                blackLabel
                options={rolesSelect ? rolesSelect : [{ label: "", value: "" }]}
                background="#F3F5F6"
                placeholder="Select type"
                isLoading={isFetching}
              />
              {errors?.userType && (
                <InputErrorText>
                  {errors?.userType?.message ?? ""}
                </InputErrorText>
              )}
            </Grid>

            <Grid item xs={12} md={6}>
              <Controller
                control={control}
                name="firstName"
                render={({ field: { onChange, value, onBlur } }) => (
                  <AuthInput
                    label="Firstname"
                    type="text"
                    placeholder="Firstname"
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    blackLabel
                    smallLabel
                  />
                )}
              />
              {errors?.firstName && (
                <InputErrorText>
                  {errors?.firstName?.message ?? ""}
                </InputErrorText>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value, onBlur } }) => (
                  <AuthInput
                    label="Email Address"
                    type="email"
                    placeholder="Email"
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    blackLabel
                    smallLabel
                  />
                )}
              />
              {errors?.email && (
                <InputErrorText>{errors?.email?.message ?? ""}</InputErrorText>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                control={control}
                name="lastName"
                render={({ field: { onChange, value, onBlur } }) => (
                  <AuthInput
                    label="Last Name"
                    type="text"
                    placeholder="Lastname"
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    blackLabel
                    smallLabel
                  />
                )}
              />
              {errors?.lastName && (
                <InputErrorText>
                  {errors?.lastName?.message ?? ""}
                </InputErrorText>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                control={control}
                name="dob"
                render={({ field: { onChange, value, onBlur } }) => (
                  <AuthInput
                    label="Date of Birth"
                    type="date"
                    placeholder="Date of Birth"
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    blackLabel
                    smallLabel
                    max="2000-01-01"
                  />
                )}
              />
              {errors?.dob && (
                <InputErrorText>{errors?.dob?.message ?? ""}</InputErrorText>
              )}
            </Grid>
            {userType === "6y8hXnL5xl1l" && (
              <Grid item xs={12} md={6}>
                <Controller
                  control={control}
                  name="school"
                  render={({ field: { onChange, value, onBlur } }) => (
                    <AuthInput
                      label="School Name"
                      type="text"
                      placeholder="School Name"
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      blackLabel
                      smallLabel
                    />
                  )}
                />
                {errors?.school && (
                  <InputErrorText>
                    {errors?.school?.message ?? ""}
                  </InputErrorText>
                )}
              </Grid>
            )}
          </Grid>
          <Box sx={{ mt: { xs: 2, md: 4 } }} className="d-flex justify-center">
            <Box sx={{ width: "327px" }}>
              <AuthButton type="submit" loading={isLoading} onClick={() => {}}>
                Create User
              </AuthButton>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default AddUser;
