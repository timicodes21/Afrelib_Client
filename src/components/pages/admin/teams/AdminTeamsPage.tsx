import TransparentBlueButton from "@/components/atoms/buttons/TransparentBlueButton";
import PageHeader from "@/components/molecules/headers/PageHeader";
import CustomModal from "@/components/organisms/modals/CustomModal";
import Wrapper from "@/components/templates/Wrapper";
import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import React, { useState } from "react";
import { useModal } from "@/hooks/utility";
import CohortsContainer from "@/components/organisms/containers/CohortsContainer";
import DashboardCard from "@/components/molecules/cards/DashboardCard";
import AddTeams from "./AddTeams";
import { useGetAllCohorts } from "@/hooks/admin/useAdminCohort";
import EmptyPage from "@/components/templates/EmptyPage";

const AdminTeamsPage = () => {
  const { open, setOpen, openModal, closeModal } = useModal();

  const {
    allCohorts,
    status,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetAllCohorts();

  return (
    <Wrapper>
      <PageHeader headerText="Teams" />

      <Box className="d-flex justify-end" sx={{ mt: 2 }}>
        <TransparentBlueButton type="button" onClick={openModal}>
          Create New
        </TransparentBlueButton>
      </Box>

      {!isLoading &&
        allCohorts &&
        Array.isArray(allCohorts) &&
        allCohorts.length === 0 && (
          <EmptyPage
            text="There are no cohorts yet. 
Click the Add New button to create one..."
          />
        )}

      {isLoading && (
        <Box sx={{ width: "100%", mt: 2 }}>
          <LinearProgress sx={{ color: "#213F7D" }} />
        </Box>
      )}

      {!isLoading &&
        allCohorts &&
        Array.isArray(allCohorts) &&
        allCohorts.length !== 0 &&
        allCohorts.map((item, index) => (
          <Box sx={{ mt: 2 }} key={index}>
            <CohortsContainer header={item?.cohort_name}>
              <Box></Box>
            </CohortsContainer>
          </Box>
        ))}

      <CustomModal
        open={open}
        setOpen={setOpen}
        width="1000px"
        closeOnOverlayClick={false}
      >
        <AddTeams handleClose={closeModal} />
      </CustomModal>
    </Wrapper>
  );
};

export default AdminTeamsPage;
