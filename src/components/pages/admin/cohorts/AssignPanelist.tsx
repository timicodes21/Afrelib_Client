import AuthButton from "@/components/atoms/buttons/AuthButton";
import SearchInput from "@/components/atoms/inputFields/SearchInput";
import HeaderAndCloseButton from "@/components/molecules/headers/HeaderAndCloseButton";
import {
  useFilterUsersForSelect,
  useUserForSelectField,
} from "@/hooks/utility";
import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  AddMentorFormValues,
  AssignPanelistsFormValues,
} from "@/types/formValues";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAdminTeams } from "@/hooks/admin/useAdminTeams";
import CheckboxWithLabel from "@/components/atoms/inputFields/CheckboxWithLabel";
import InputErrorText from "@/components/atoms/texts/InputErrorText";
import { useAdminCohort } from "@/hooks/admin/useAdminCohort";

interface IProps {
  handleClose: () => void;
  cohortName: string;
  cohortId: string;
}

const AssignPanelists: React.FC<IProps> = ({
  handleClose,
  cohortName,
  cohortId,
}) => {
  const { users: allPanelists, loadingUsers: isLoading } =
    useUserForSelectField("Panelist");

  const {
    schemaAssign,
    onSubmitAssign,
    isLoadingAssign,
    panelistIds,
    setPanelistIds,
  } = useAdminCohort();

  return (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
      <HeaderAndCloseButton header="Assign Panelists" onClick={handleClose} />
      <Typography
        className="font-14 font-400"
        sx={{ color: "secondary.main", mb: 2 }}
      >
        Select panelists to assign to {cohortName}
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
          allPanelists &&
          Array.isArray(allPanelists) &&
          allPanelists.map(item => (
            <Box key={item?.value} sx={{ mt: 1 }}>
              <CheckboxWithLabel
                onChange={e => {
                  if (e?.target?.checked) {
                    setPanelistIds([...panelistIds, item?.value]);
                  } else {
                    const filtered = panelistIds.filter(
                      id => id !== item?.value,
                    );
                    setPanelistIds(filtered);
                  }
                }}
                checked={panelistIds.includes(item?.value)}
              >
                {item?.label}
              </CheckboxWithLabel>
            </Box>
          ))}
        {panelistIds.length === 0 && (
          <InputErrorText>Please select panelists</InputErrorText>
        )}
      </Box>

      <Box sx={{ mt: 5 }} className="d-flex justify-center">
        <AuthButton
          onClick={() => {
            panelistIds.length > 0 &&
              onSubmitAssign(cohortId, panelistIds, handleClose);
          }}
          type="button"
          notFullWidth
          loading={isLoadingAssign}
        >
          Assign to Cohort
        </AuthButton>
      </Box>
    </Box>
  );
};

export default AssignPanelists;
