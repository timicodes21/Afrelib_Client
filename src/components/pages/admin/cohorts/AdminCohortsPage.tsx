import TransparentBlueButton from "@/components/atoms/buttons/TransparentBlueButton";
import PageHeader from "@/components/molecules/headers/PageHeader";
import CustomModal from "@/components/organisms/modals/CustomModal";
import Wrapper from "@/components/templates/Wrapper";
import { Box, LinearProgress } from "@mui/material";
import React, { useState } from "react";
import { useModal } from "@/hooks/utility";
import CohortsContainer from "@/components/organisms/containers/CohortsContainer";
import AddCohort from "./AddCohort";
import { useAdminCohort, useGetAllCohorts } from "@/hooks/admin/useAdminCohort";
import EmptyPage from "@/components/templates/EmptyPage";
import DeleteWrapper from "@/components/molecules/wrappers/DeleteWrapper";

const AdminCohortsPage = () => {
  const { open, setOpen, openModal, closeModal } = useModal();
  const {
    open: openDelete,
    setOpen: setOpenDelete,
    openModal: openDeleteModal,
    closeModal: closeDeleteModal,
  } = useModal();

  const {
    allCohorts,
    status,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetAllCohorts();

  const { isLoadingDelete, onSubmitDelete, setCohort, cohort } =
    useAdminCohort();

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
            <CohortsContainer
              header={item?.cohort_name}
              onDelete={() => {
                setCohort(item);
                openDeleteModal();
              }}
              onEdit={() => {}}
              onAssign={() => {}}
            >
              <Box></Box>
            </CohortsContainer>
          </Box>
        ))}

      <CustomModal
        open={open}
        setOpen={setOpen}
        width="1000px"
        closeOnOverlayClick={false}
        showCloseIcon={false}
      >
        <AddCohort handleClose={closeModal} />
      </CustomModal>
      <CustomModal
        open={openDelete}
        setOpen={setOpenDelete}
        maxWidth="350px"
        closeOnOverlayClick={false}
        showCloseIcon
      >
        <DeleteWrapper
          text={`Are you sure you want to delete ${cohort?.cohort_name ?? ""}`}
          onDelete={onSubmitDelete}
          onCancel={closeDeleteModal}
          deleteBtnText="Yes, Disable"
          cancelBtnText="No, Cancel"
          loading={isLoadingDelete}
        />
      </CustomModal>
    </Wrapper>
  );
};

export default AdminCohortsPage;
