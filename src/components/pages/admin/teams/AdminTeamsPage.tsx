import TransparentBlueButton from "@/components/atoms/buttons/TransparentBlueButton";
import PageHeader from "@/components/molecules/headers/PageHeader";
import CustomModal from "@/components/organisms/modals/CustomModal";
import Wrapper from "@/components/templates/Wrapper";
import { Box, LinearProgress } from "@mui/material";
import React from "react";
import { useModal } from "@/hooks/utility";
import AddTeams from "./AddTeams";
import EmptyPage from "@/components/templates/EmptyPage";
import { useAdminTeams, useGetAllTeams } from "@/hooks/admin/useAdminTeams";
import TeamsContainer from "@/components/organisms/containers/TeamsContainer";
import DeleteWrapper from "@/components/molecules/wrappers/DeleteWrapper";

const AdminTeamsPage = () => {
  const { open, setOpen, openModal, closeModal } = useModal();
  const {
    open: openDelete,
    setOpen: setOpenDelete,
    openModal: openDeleteModal,
    closeModal: closeDeleteModal,
  } = useModal();

  const {
    allTeams,
    status,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetAllTeams();

  const { onSubmitDelete, isLoadingDelete, team, setTeam } = useAdminTeams();

  return (
    <Wrapper>
      <PageHeader headerText="Teams" />

      <Box className="d-flex justify-end" sx={{ mt: 2 }}>
        <TransparentBlueButton type="button" onClick={openModal}>
          Create New
        </TransparentBlueButton>
      </Box>

      {!isLoading &&
        allTeams &&
        Array.isArray(allTeams) &&
        allTeams.length === 0 && (
          <EmptyPage
            text="There are no teams yet. 
Click the Add New button to create one..."
          />
        )}

      {isLoading && (
        <Box sx={{ width: "100%", mt: 2 }}>
          <LinearProgress sx={{ color: "#213F7D" }} />
        </Box>
      )}

      {!isLoading &&
        allTeams &&
        Array.isArray(allTeams) &&
        allTeams.length !== 0 &&
        allTeams.map((item, index) => (
          <Box sx={{ mt: 2 }} key={index}>
            <TeamsContainer
              header={item?.team_name}
              description={item?.team_description}
              students={item?.students}
              mentorName={`${item?.mentor?.first_name} ${item?.mentor?.last_name}`}
              onDelete={() => {
                setTeam(item);
                openDeleteModal();
              }}
              onEdit={() => {}}
              onAssign={() => {}}
            >
              <Box></Box>
            </TeamsContainer>
          </Box>
        ))}

      <CustomModal
        open={open}
        setOpen={setOpen}
        width="1000px"
        closeOnOverlayClick={false}
        showCloseIcon={false}
      >
        <AddTeams handleClose={closeModal} />
      </CustomModal>
      <CustomModal
        open={openDelete}
        setOpen={setOpenDelete}
        maxWidth="350px"
        closeOnOverlayClick={false}
        showCloseIcon
      >
        <DeleteWrapper
          text={`Are you sure you want to delete ${team?.team_name ?? ""}`}
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

export default AdminTeamsPage;
