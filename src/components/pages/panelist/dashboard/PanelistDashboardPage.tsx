import PageHeader from "@/components/molecules/headers/PageHeader";
import Wrapper from "@/components/templates/Wrapper";
import { Box, Grid, Typography } from "@mui/material";
import React, { useMemo } from "react";
import styles from "@/styles/Dashboard.module.css";
import Image from "next/image";
import DashboardCard from "@/components/molecules/cards/DashboardCard";
import PageFlexLayout from "@/components/templates/PageFlexLayout";
import ResourcesTable from "@/components/organisms/tables/ResourcesTable";
import { resources } from "@/data/dashboard";
import WeeklyUpdatesWrapper from "@/components/molecules/wrappers/WeeklyUpdatesWrapper";
import HeaderAndViewAll from "@/components/molecules/wrappers/HeaderAndViewAll";
import TeamSubmissions from "../../dashboard/TeamSubmissions";
import { useGlobalContext } from "@/contexts/GlobalContext";
import {
  IWeeklyUpdate,
  useGetWeeklyUpdates,
} from "@/hooks/admin/useAdminDashboard";
import { sliceText } from "@/utils/helpers";
import CustomModal from "@/components/organisms/modals/CustomModal";
import { useModal } from "@/hooks/utility";
import WeeklyUpdatesPage from "../../admin/dashboard/WeeklyUpdatesPage";
import { useAdminDashboard } from "@/hooks/admin/useAdminDashboard";
import {
  IGetMentorDashboardResponse,
  IGetPanelistDashboardResponse,
  IGetStudentDashboardResponse,
  IGetTeamProjectsResponse,
  IGetWeeklyUpdatesResponse,
} from "@/types/apiResponses";
import {
  useGetDashboardDetailsMentor,
  useGetDashboardDetailsPanelist,
  useGetDashboardDetailsStudent,
} from "@/hooks/dashboard/useDashboard";
import DashboardWeeklyProgress from "@/components/organisms/progress/DashboardWeeklyProgress";
import DashboardNextSubmission from "@/components/organisms/progress/DashboardNextSubmission";
import { useGetTeamProjects } from "@/hooks/classRoom/useClassRoom";
import { useRouter } from "next/router";
import { CLASSROOM, MENTEES, PROJECTS } from "@/data/constants";
import { useGetMentees } from "@/hooks/mentees/useMentees";
import MenteesTable from "@/components/organisms/tables/MenteesTable";
import { useGetProjectsUnderPanelists } from "@/hooks/projects/useProjects";
import ProjectContainer from "@/components/organisms/containers/ProjectContainer";
import EmptyPage from "@/components/templates/EmptyPage";

const PanelistDashboardPage = () => {
  const { userDetails } = useGlobalContext();
  const { data } = useGetWeeklyUpdates();
  const { open, setOpen, openModal, closeModal } = useModal();
  const { weeklyUpdate, setWeeklyUpdate } = useAdminDashboard();

  const currenUpdate = useMemo<IGetWeeklyUpdatesResponse>(() => {
    return typeof data === "object" ? data : ({} as IGetWeeklyUpdatesResponse);
  }, [data]);

  const {
    userDetails: { id },
  } = useGlobalContext();

  const { data: dashboardData, isFetching: isFetchingDashboard } =
    useGetDashboardDetailsPanelist();

  const dashboardDetails = useMemo(() => {
    return typeof dashboardData === "object"
      ? dashboardData
      : ({} as IGetPanelistDashboardResponse);
  }, [dashboardData]);

  //   const projectDetails = useMemo(() => {
  //     return typeof projectData === "object"
  //       ? projectData
  //       : ({} as IGetTeamProjectsResponse);
  //   }, [projectData]);

  const router = useRouter();

  const {
    data: projectsData,
    isFetching,
    status,
  } = useGetProjectsUnderPanelists();

  return (
    <Wrapper>
      <PageHeader headerText="Dashboard" />
      <PageFlexLayout
        rightContent={
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={12}>
              <WeeklyUpdatesWrapper
                header={
                  typeof data === "object" && Array.isArray(data?.data)
                    ? `Week ${data?.data[0]?.update_week} - ${data?.data[0]?.update_title}`
                    : ""
                }
                onClickCard={() => {
                  setWeeklyUpdate(
                    typeof data === "object" && Array.isArray(data?.data)
                      ? {
                          week: currenUpdate?.data[0]?.update_week.toString(),
                          body: currenUpdate?.data[0]?.update_description,
                          title: currenUpdate?.data[0]?.update_title,
                        }
                      : ({} as IWeeklyUpdate),
                  );
                  openModal();
                }}
              >
                {typeof data === "object" &&
                  Array.isArray(data?.data) &&
                  data?.data?.length > 0 &&
                  sliceText(
                    40,
                    data?.data[data?.data?.length - 1]?.update_description,
                  )}
              </WeeklyUpdatesWrapper>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={12}>
              <Box sx={{ mt: 1 }}>
                <HeaderAndViewAll
                  header="Team Submissions"
                  text="View All"
                  onClick={() => {
                    router.push(CLASSROOM);
                  }}
                />
              </Box>
              <Box sx={{ mt: 1 }}>
                {/* <TeamSubmissions
                  submissions={
                    Array.isArray(projectDetails?.projects) &&
                    Array.isArray(projectDetails?.projects[0]?.submissions)
                      ? projectDetails?.projects[0]?.submissions
                      : []
                  }
                /> */}
              </Box>
            </Grid>
          </Grid>
        }
      >
        <Box className={styles.dashboardgradientconainer}>
          <Grid container>
            <Grid item xs={12} md={7}>
              <Typography
                className="font-32 font-700"
                sx={{ color: "info.dark" }}
              >
                Welome, {userDetails?.first_name ?? ""}
              </Typography>
              <Box>
                <DashboardNextSubmission deadline={0} />

                <Typography
                  className="font-14 font-700"
                  sx={{ color: "info.dark", mt: 1 }}
                >
                  Weeks
                </Typography>
                <Box sx={{ mt: 1 }}>
                  <DashboardWeeklyProgress
                    currentWeek={dashboardDetails?.current_week}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box className="imageContainer">
                <Image
                  src="/assets/images/dashboard_vector.svg"
                  alt="vector"
                  fill
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {/* <Grid item xs={6} md={3}>
            <DashboardCard
              background="#DEF1FF"
              value="28"
              textColor="#0072C7"
              title="Completed Courses"
            />
          </Grid> */}
          <Grid item xs={6} md={6}>
            <DashboardCard
              background="#EFE3FF"
              value={dashboardDetails?.num_teams_in_cohort}
              textColor="#5C0BC9"
              title="No. of Teams"
              isLoading={isFetchingDashboard}
              height="100px"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <DashboardCard
              background="#EFE3FF"
              value={dashboardDetails?.num_submissions}
              textColor="#5C0BC9"
              title="No. of Submissions"
              isLoading={isFetchingDashboard}
              height="100px"
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: 1 }}>
          <HeaderAndViewAll
            header="Projects"
            text="View All"
            onClick={() => {
              router.push(PROJECTS);
            }}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <Grid container spacing={3}>
            {typeof projectsData === "object" &&
              projectsData?.cohort_projects.map((item, index) => (
                <Grid item xs={12} sm={6} lg={6} key={index}>
                  <ProjectContainer
                    headerText={item[0]?.project_title}
                    onClick={() => {}}
                    submissionText=""
                    totalSubmissions={7}
                    submissionsDone={item[0]?.submissions?.length}
                    onClickCard={() => {}}
                  />
                </Grid>
              ))}
          </Grid>
          {!isFetching &&
            typeof projectsData === "object" &&
            projectsData?.cohort_projects?.length === 0 && (
              <EmptyPage text="Cohort Projects will appear here." />
            )}
        </Box>
      </PageFlexLayout>
      <CustomModal
        open={open}
        setOpen={setOpen}
        width="600px"
        closeOnOverlayClick={false}
        showCloseIcon={false}
      >
        <WeeklyUpdatesPage
          handleClose={closeModal}
          header={`Week${weeklyUpdate?.week} - ${weeklyUpdate?.title}`}
          body={weeklyUpdate?.body}
        />
      </CustomModal>
    </Wrapper>
  );
};

export default PanelistDashboardPage;
