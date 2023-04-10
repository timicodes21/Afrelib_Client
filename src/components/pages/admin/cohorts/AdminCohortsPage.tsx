import TransparentBlueButton from "@/components/atoms/buttons/TransparentBlueButton";
import PageHeader from "@/components/molecules/headers/PageHeader";
import CustomModal from "@/components/organisms/modals/CustomModal";
import Wrapper from "@/components/templates/Wrapper";
import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useModal } from "@/hooks/utility";
import CohortsContainer from "@/components/organisms/containers/CohortsContainer";
import DashboardCard from "@/components/molecules/cards/DashboardCard";
import AddCohort from "./AddCohort";
import { useGetAllCohorts } from "@/hooks/admin/useAdminCohort";
import EmptyPage from "@/components/templates/EmptyPage";

const AdminCohortsPage = () => {
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
      <PageHeader headerText="Cohorts" />

      <Box className="d-flex justify-end" sx={{ mt: 2 }}>
        <TransparentBlueButton type="button" onClick={openModal}>
          Create New
        </TransparentBlueButton>
      </Box>

      {!isLoading &&
        allCohorts &&
        Array.isArray(allCohorts) &&
        allCohorts.length !== 0 && (
          <EmptyPage
            text="There are no cohorts yet. 
Click the Add New button to create one..."
          />
        )}

      {/* <Box sx={{ mt: 2 }}>
        <CohortsContainer header="Cohorts 1">
          <Box></Box>
        </CohortsContainer>
      </Box> */}

      <CustomModal
        open={open}
        setOpen={setOpen}
        width="1000px"
        closeOnOverlayClick={false}
      >
        <AddCohort handleClose={closeModal} />
      </CustomModal>
    </Wrapper>
  );
};

export default AdminCohortsPage;
