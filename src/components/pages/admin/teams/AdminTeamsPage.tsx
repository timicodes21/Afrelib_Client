import TransparentBlueButton from "@/components/atoms/buttons/TransparentBlueButton";
import PageHeader from "@/components/molecules/headers/PageHeader";
import CustomModal from "@/components/organisms/modals/CustomModal";
import Wrapper from "@/components/templates/Wrapper";
import { Box, Grid, LinearProgress } from "@mui/material";
import React, { useEffect } from "react";
import { getUserByRole, useModal } from "@/hooks/utility";
import AddTeams from "./AddTeams";
import EmptyPage from "@/components/templates/EmptyPage";
import {
  useAdminTeams,
  useGetAllTeams,
  useGetSingleTeam,
} from "@/hooks/admin/useAdminTeams";
import TeamsContainer from "@/components/organisms/containers/TeamsContainer";
import DeleteWrapper from "@/components/molecules/wrappers/DeleteWrapper";
import AddMentor from "./AddMentor";
import StudentsTable from "@/components/organisms/tables/StudentsTable";

const AdminTeamsPage = () => {
  const { open, setOpen, openModal, closeModal } = useModal();

  const {
    open: openDelete,
    setOpen: setOpenDelete,
    openModal: openDeleteModal,
    closeModal: closeDeleteModal,
  } = useModal();

  const {
    open: openStudents,
    setOpen: setOpenStudents,
    openModal: openStudentsModal,
  } = useModal();

  const {
    allTeams,
    status,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetAllTeams();

  const { onSubmitDelete, isLoadingDelete, team, setTeam, option, setOption } =
    useAdminTeams();

  const {
    data,
    status: statusGetSingle,
    isFetching,
  } = useGetSingleTeam(team?.id ?? 0, openStudents);

  useEffect(() => {
    getUserByRole("Student", true).then(res => {
      console.log("response user", res);
    });
  }, []);

  return (
    <Wrapper>
      <PageHeader headerText="Teams" />

      <Box className="d-flex justify-end" sx={{ mt: 2 }}>
        <TransparentBlueButton
          type="button"
          onClick={() => {
            setOption("addTeam");
            openModal();
          }}
        >
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

      <Grid container spacing={3}>
        {!isLoading &&
          allTeams &&
          Array.isArray(allTeams) &&
          allTeams.length !== 0 &&
          allTeams.map((item, index) => (
            <Grid item key={index} xs={12} md={6}>
              <Box sx={{ mt: 2 }}>
                <TeamsContainer
                  header={item?.team_name}
                  description={item?.team_description}
                  students={item?.students}
                  mentorName={`${item?.mentor?.first_name} ${item?.mentor?.last_name}`}
                  onDelete={() => {
                    setTeam(item);
                    openDeleteModal();
                  }}
                  onEdit={() => {
                    setTeam(item);
                    setOption("addMentor");
                    openModal();
                  }}
                  onAssign={() => {}}
                  onClickStudents={() => {
                    setTeam(item);
                    openStudentsModal();
                  }}
                >
                  <Box></Box>
                </TeamsContainer>
              </Box>
            </Grid>
          ))}
      </Grid>

      <CustomModal
        open={open}
        setOpen={setOpen}
        width="1000px"
        closeOnOverlayClick={false}
        showCloseIcon={false}
      >
        {option === "addTeam" ? (
          <AddTeams handleClose={closeModal} />
        ) : option === "addMentor" ? (
          <AddMentor
            handleClose={closeModal}
            teamName={team?.team_name ?? ""}
            teamId={team?.id ?? 0}
          />
        ) : (
          <></>
        )}
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
          onDelete={() => onSubmitDelete(closeDeleteModal)}
          onCancel={closeDeleteModal}
          deleteBtnText="Yes, Delete"
          cancelBtnText="No, Cancel"
          loading={isLoadingDelete}
        />
      </CustomModal>
      <CustomModal
        open={openStudents}
        setOpen={setOpenStudents}
        width="1000px"
        closeOnOverlayClick={false}
        showCloseIcon
      >
        <Box sx={{ p: 5 }}>
          <StudentsTable students={data?.students ?? []} loading={isFetching} />
        </Box>
      </CustomModal>
    </Wrapper>
  );
};

export default AdminTeamsPage;
