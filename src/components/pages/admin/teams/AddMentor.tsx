import AuthButton from "@/components/atoms/buttons/AuthButton";
import SearchInput from "@/components/atoms/inputFields/SearchInput";
import HeaderAndCloseButton from "@/components/molecules/headers/HeaderAndCloseButton";
import { useFilterUsersForSelect } from "@/hooks/utility";
import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { AddMentorFormValues } from "@/types/formValues";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAdminTeams } from "@/hooks/admin/useAdminTeams";
import CheckboxWithLabel from "@/components/atoms/inputFields/CheckboxWithLabel";
import InputErrorText from "@/components/atoms/texts/InputErrorText";

interface IProps {
  handleClose: () => void;
  teamName: string;
  teamId: number;
}

const AddMentor: React.FC<IProps> = ({ handleClose, teamName, teamId }) => {
  const { allMentors, isLoading } = useFilterUsersForSelect();

  const {
    schemaUpdateMentor,
    onSubmitUpdateMentor,
    isLoadingMentor,
    validateMentorForm,
  } = useAdminTeams();

  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<AddMentorFormValues>({
    mode: "onBlur",
    resolver: zodResolver(schemaUpdateMentor),
  });

  watch("mentorId");

  return (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
      <HeaderAndCloseButton header="Add Mentor" onClick={handleClose} />
      <Typography
        className="font-14 font-400"
        sx={{ color: "secondary.main", mb: 2 }}
      >
        Select Mentor to add to Team {teamName}
      </Typography>
      <SearchInput darkBackground />
      <Box>
        {isLoading && (
          <Box className="d-flex justify-center">
            <CircularProgress
              sx={{ color: "#0065B5" }}
              size={25}
              thickness={5}
            />
          </Box>
        )}
        {!isLoading &&
          allMentors &&
          Array.isArray(allMentors) &&
          allMentors.map(item => (
            <Box key={item?.value} sx={{ mt: 1 }}>
              <CheckboxWithLabel
                onChange={e => setValue("mentorId", item?.value)}
                checked={getValues("mentorId") === item?.value}
              >
                {item?.label}
              </CheckboxWithLabel>
            </Box>
          ))}
        {errors?.mentorId && (
          <InputErrorText>Please select a mentor</InputErrorText>
        )}
      </Box>

      <Box sx={{ mt: 5 }} className="d-flex justify-center">
        <AuthButton
          onClick={() => {
            handleSubmit(validateMentorForm)();
            onSubmitUpdateMentor(teamId, getValues("mentorId"));
          }}
          type="button"
          notFullWidth
          loading={isLoadingMentor}
        >
          Assign to Team
        </AuthButton>
      </Box>
    </Box>
  );
};

export default AddMentor;
