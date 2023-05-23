import TransparentBlueButton from "@/components/atoms/buttons/TransparentBlueButton";
import PageHeader from "@/components/molecules/headers/PageHeader";
import CustomModal from "@/components/organisms/modals/CustomModal";
import Wrapper from "@/components/templates/Wrapper";
import { Box, LinearProgress } from "@mui/material";
import React from "react";
import { useModal } from "@/hooks/utility";
import CohortsContainer from "@/components/organisms/containers/CohortsContainer";
import AddCohort from "./AddCohort";
import {
  useAdminCohort,
  useGetAllCohorts,
  useGetSingleCohort,
} from "@/hooks/admin/useAdminCohort";
import EmptyPage from "@/components/templates/EmptyPage";
import DeleteWrapper from "@/components/molecules/wrappers/DeleteWrapper";
import AssignPanelists from "./AssignPanelist";
import UpdateCohort from "./UpdateCohort";
import MentorsTable from "@/components/organisms/tables/MentorsTable";
import PanelistsTable from "@/components/organisms/tables/PanelistsTable";
import TeamsTable from "@/components/organisms/tables/TeamsTable";
import StudentsTable from "@/components/organisms/tables/StudentsTable";

const AdminCohortsPage = () => {
  const { open, setOpen, openModal, closeModal } = useModal();
  const {
    open: detailsopen,
    setOpen: setDetailsOpen,
    openModal: openDetailsModal,
  } = useModal();
  const {
    open: openDelete,
    setOpen: setOpenDelete,
    openModal: openDeleteModal,
    closeModal: closeDeleteModal,
  } = useModal();

  const {
    allCohorts,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetAllCohorts();

  const {
    isLoadingDelete,
    onSubmitDelete,
    setCohort,
    cohort,
    option,
    setOption,
    detailsOptions,
    setDetailsOptions,
  } = useAdminCohort();

  const {
    data,
    status: statusGetSingle,
    isFetching,
  } = useGetSingleCohort(cohort?.cohort_id ?? "", detailsopen);

  const renderDetailsOptions = () => {
    switch (detailsOptions) {
      case "viewMentors":
        return (
          <MentorsTable
            loading={isFetching}
            mentors={data?.mentors?.data ?? []}
          />
        );
      case "viewStudents":
        return (
          <StudentsTable
            loading={isFetching}
            students={data?.students?.data ?? []}
          />
        );
      case "viewPanelists":
        return (
          <PanelistsTable
            loading={isFetching}
            panelists={data?.panelists?.data ?? []}
          />
        );
      case "viewTeams":
        return (
          <TeamsTable loading={isFetching} teams={data?.teams?.data ?? []} />
        );
      default:
        return <></>;
    }
  };

  return (
    <Wrapper>
      <PageHeader headerText="Cohorts" />

      <Box className="d-flex justify-end" sx={{ mt: 2 }}>
        <TransparentBlueButton
          type="button"
          onClick={() => {
            setOption("addCohort");
            openModal();
          }}
        >
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
              onAssign={() => {
                setCohort(item);
                setOption("assignPanelists");
                openModal();
              }}
              onUpdate={() => {
                setCohort(item);
                setOption("updateCohort");
                openModal();
              }}
              mentors={item?.mentors}
              panelists={item?.panelists}
              students={item?.students}
              teams={item?.teams}
              viewTeams={() => {
                setCohort(item);
                setDetailsOptions("viewTeams");
                openDetailsModal();
              }}
              viewPanelists={() => {
                setCohort(item);
                setDetailsOptions("viewPanelists");
                openDetailsModal();
              }}
              viewStudents={() => {
                setCohort(item);
                setDetailsOptions("viewStudents");
                openDetailsModal();
              }}
              viewMentors={() => {
                setCohort(item);
                setDetailsOptions("viewMentors");
                openDetailsModal();
              }}
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
        {option === "addCohort" ? (
          <AddCohort handleClose={closeModal} />
        ) : option === "assignPanelists" ? (
          <AssignPanelists
            handleClose={closeModal}
            cohortId={cohort?.cohort_id ?? ""}
            cohortName={cohort?.cohort_name ?? ""}
          />
        ) : option === "updateCohort" ? (
          <UpdateCohort
            handleClose={closeModal}
            cohortId={cohort?.cohort_id ?? ""}
            cohortDescription={cohort?.cohort_description ?? ""}
            cohortName={cohort?.cohort_name ?? ""}
          />
        ) : (
          <></>
        )}
      </CustomModal>
      <CustomModal
        open={detailsopen}
        setOpen={setDetailsOpen}
        width="800px"
        closeOnOverlayClick={false}
        showCloseIcon
      >
        <Box sx={{ p: 5 }}>{renderDetailsOptions()}</Box>
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
