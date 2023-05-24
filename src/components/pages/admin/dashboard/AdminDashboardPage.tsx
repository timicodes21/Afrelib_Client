import PageHeader from "@/components/molecules/headers/PageHeader";
import Wrapper from "@/components/templates/Wrapper";
import { Box, Grid, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import DashboardCard from "@/components/molecules/cards/DashboardCard";
import PageFlexLayout from "@/components/templates/PageFlexLayout";
import { messages } from "@/data/dashboard";
import WeeklyUpdatesWrapper from "@/components/molecules/wrappers/WeeklyUpdatesWrapper";
import HeaderAndViewAll from "@/components/molecules/wrappers/HeaderAndViewAll";
import AddItemCard from "@/components/molecules/cards/AddItemCard";
import TeamSubmissions from "../../dashboard/TeamSubmissions";
import { useGlobalContext } from "@/contexts/GlobalContext";
import WeeklyProgressContainer from "@/components/organisms/progress/WeeklyProgressContainer";
import UsersTable from "@/components/organisms/tables/UsersTable";
import { useGetAllUsers } from "@/hooks/admin/useAdminUsers";
import CustomModal from "@/components/organisms/modals/CustomModal";
import { useModal } from "@/hooks/utility";
import WeeklyUpdatesForm from "./WeeklyUpdatesForm";
import {
  useAdminDashboard,
  useGetAdminDashboardDetails,
  useGetWeeklyUpdates,
} from "@/hooks/admin/useAdminDashboard";
import { sliceText } from "@/utils/helpers";
import WeeklyUpdatesPage from "./WeeklyUpdatesPage";
import { IGetAdminDashboardResponse } from "@/types/apiResponses";

const AdminDashboardPage = () => {
  const { userDetails } = useGlobalContext();

  const { allUsers, isLoading } = useGetAllUsers();
  const { open, setOpen, openModal, closeModal } = useModal();

  const { data, isFetching } = useGetWeeklyUpdates();
  const [option, setOption] = useState<"weeklyUpdateForm" | "weeklyUpdatePage">(
    "weeklyUpdateForm",
  );

  const { weeklyUpdate, setWeeklyUpdate } = useAdminDashboard();

  const { data: dashboardData, isFetching: isFetchingDashboard } =
    useGetAdminDashboardDetails();
  console.log("data admin dashboard", dashboardData);

  const dashboardDetails = useMemo(() => {
    return typeof dashboardData === "object"
      ? dashboardData
      : ({} as IGetAdminDashboardResponse);
  }, [dashboardData]);

  return (
    <Wrapper>
      <PageHeader headerText="Dashboard" />
      <PageFlexLayout
        rightContent={
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={12}>
              <Box
                sx={{
                  background: "#FFF",
                  border: "1px solid #EAECF0",
                  boxShadow:
                    "0px 1px 2px rgba(16, 24, 40, 0.1), 7px 0px 4px rgba(117, 171, 242, 0.08)",
                  borderRadius: "8px",
                  p: 2,
                }}
              >
                <HeaderAndViewAll
                  header="Project Submissions"
                  text="View All"
                  onClick={() => {}}
                  smallHeader
                />
                <Box>
                  <WeeklyProgressContainer />
                </Box>
                <Box sx={{ mt: 2 }}>
                  <TeamSubmissions submissions={[]} noStyles />
                </Box>
              </Box>
            </Grid>
          </Grid>
        }
      >
        <Box>
          <Typography
            sx={{ color: "secondary.light" }}
            className="font-16 font-300"
          >
            Welcome
          </Typography>
          <Typography
            sx={{ color: "secondary.main" }}
            className="font-32 font-600"
          >
            {userDetails?.first_name}
          </Typography>
        </Box>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={6} md={3}>
            <DashboardCard
              background="#DEF1FF"
              value={dashboardDetails?.total_teams}
              textColor="#0072C7"
              title="No. of Teams"
              height="100px"
              isLoading={isFetchingDashboard}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <DashboardCard
              background="#EFE3FF"
              value={dashboardDetails?.total_students}
              textColor="#5C0BC9"
              title="No. of Students"
              height="100px"
              isLoading={isFetchingDashboard}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <DashboardCard
              background="#FFF9E3"
              value={dashboardDetails?.total_mentors}
              textColor="#E4B300"
              title="No. of Mentors"
              height="100px"
              isLoading={isFetchingDashboard}
            />
          </Grid>{" "}
          <Grid item xs={6} md={3}>
            <DashboardCard
              background="#E3FFF7"
              value={dashboardDetails?.total_panelists}
              textColor="#02C08A"
              title="No. of Panelists"
              height="100px"
              isLoading={isFetchingDashboard}
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: 2 }}>
          <HeaderAndViewAll
            header="Weekly Updates"
            text="View All"
            onClick={() => {}}
            hideViewAll
          />
        </Box>
        <Grid container spacing={3}>
          {typeof data === "object" &&
            Array.isArray(data?.data) &&
            data?.data?.map((item, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <WeeklyUpdatesWrapper
                  header={`Week${item?.update_week} - ${item?.update_title}`}
                  onClickCard={() => {
                    setWeeklyUpdate({
                      body: item?.update_description,
                      week: item?.update_week.toString(),
                      title: item?.update_title,
                    });
                    setOption("weeklyUpdatePage");
                    openModal();
                  }}
                >
                  {sliceText(40, item?.update_description)}
                </WeeklyUpdatesWrapper>
              </Grid>
            ))}

          <Grid item xs={12} md={6} lg={4}>
            <AddItemCard
              onClick={() => {
                setOption("weeklyUpdateForm");
                openModal();
              }}
              height="150px"
            >
              Add Weekly Updates
            </AddItemCard>
          </Grid>
        </Grid>
        <Box sx={{ mt: 2 }}>
          <HeaderAndViewAll
            header="Users"
            text="View All"
            onClick={() => {}}
            hideViewAll
          />
          <UsersTable
            users={allUsers}
            loading={isLoading}
            onDisableEnable={id => {}}
            onResetPassword={id => {}}
            role="Student"
          />
        </Box>
      </PageFlexLayout>
      <CustomModal
        open={open}
        setOpen={setOpen}
        width="600px"
        closeOnOverlayClick={false}
        showCloseIcon={false}
      >
        {option === "weeklyUpdateForm" ? (
          <WeeklyUpdatesForm handleClose={closeModal} />
        ) : (
          <WeeklyUpdatesPage
            handleClose={closeModal}
            header={`Week${weeklyUpdate?.week} - ${weeklyUpdate?.title}`}
            body={weeklyUpdate?.body}
          />
        )}
      </CustomModal>
    </Wrapper>
  );
};

export default AdminDashboardPage;
