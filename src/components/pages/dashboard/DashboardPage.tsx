import PageHeader from "@/components/molecules/headers/PageHeader";
import Wrapper from "@/components/templates/Wrapper";
import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import styles from "@/styles/Dashboard.module.css";
import Image from "next/image";
import DashboardCard from "@/components/molecules/cards/DashboardCard";
import PageFlexLayout from "@/components/templates/PageFlexLayout";
import ResourcesTable from "@/components/organisms/tables/ResourcesTable";
import { resources } from "@/data/dashboard";
import WeeklyUpdatesWrapper from "@/components/molecules/wrappers/WeeklyUpdatesWrapper";
import HeaderAndViewAll from "@/components/molecules/wrappers/HeaderAndViewAll";
import TeamSubmissions from "./TeamSubmissions";
import { useGlobalContext } from "@/contexts/GlobalContext";
import {
  IWeeklyUpdate,
  useGetWeeklyUpdates,
} from "@/hooks/admin/useAdminDashboard";
import { sliceText } from "@/utils/helpers";
import CustomModal from "@/components/organisms/modals/CustomModal";
import { useModal } from "@/hooks/utility";
import WeeklyUpdatesPage from "../admin/dashboard/WeeklyUpdatesPage";
import { useAdminDashboard } from "@/hooks/admin/useAdminDashboard";
import {
  ICohortDeadlineResponse,
  IGetStudentDashboardResponse,
  IGetTeamProjectsResponse,
  IGetWeeklyUpdatesResponse,
} from "@/types/apiResponses";
import {
  useGetCohortDeadlines,
  useGetDashboardDetailsStudent,
} from "@/hooks/dashboard/useDashboard";
import DashboardWeeklyProgress from "@/components/organisms/progress/DashboardWeeklyProgress";
import DashboardNextSubmission from "@/components/organisms/progress/DashboardNextSubmission";
import { useGetTeamProjects } from "@/hooks/classRoom/useClassRoom";
import { useRouter } from "next/router";
import { CLASSROOM } from "@/data/constants";
import moment from "moment";

const DashboardPage = () => {
  const { userDetails } = useGlobalContext();
  const { data } = useGetWeeklyUpdates();
  const { open, setOpen, openModal, closeModal } = useModal();
  const { weeklyUpdate, setWeeklyUpdate } = useAdminDashboard();

  const currenUpdate = useMemo<IGetWeeklyUpdatesResponse>(() => {
    return typeof data === "object" ? data : ({} as IGetWeeklyUpdatesResponse);
  }, [data]);

  const {
    userDetails: { teamId },
  } = useGlobalContext();

  const { data: projectData, isFetching: isFetchingProject } =
    useGetTeamProjects(teamId ?? 0, typeof teamId === "number" && teamId !== 0);

  const { data: dashboardData, isFetching: isFetchingDashboard } =
    useGetDashboardDetailsStudent();

  const dashboardDetails = useMemo(() => {
    return typeof dashboardData === "object"
      ? dashboardData
      : ({} as IGetStudentDashboardResponse);
  }, [dashboardData]);

  const projectDetails = useMemo(() => {
    return typeof projectData === "object"
      ? projectData
      : ({} as IGetTeamProjectsResponse);
  }, [projectData]);

  const { data: deadlines, isFetching: isFetchingDeadlines } =
    useGetCohortDeadlines(
      userDetails?.cohortId ?? "",
      typeof userDetails?.cohortId === "string" &&
        userDetails.cohortId.trim().length > 0,
    );

  const router = useRouter();

  const cohortDeadlines = useMemo(() => {
    return Array.isArray(deadlines)
      ? deadlines
      : ([] as ICohortDeadlineResponse[]);
  }, [deadlines]);

  const currentDeadline = useMemo(() => {
    const deadline = cohortDeadlines.find(
      item => item?.week_number === dashboardDetails?.current_week,
    )?.week_end;

    return deadline ? moment(deadline, "YYYY-MM-DD").valueOf() : 0;
  }, [cohortDeadlines, dashboardDetails]);

  const totalAverageScore = useMemo(() => {
    let score = 0;
    if (
      Array.isArray(projectDetails?.projects) &&
      Array.isArray(projectDetails?.projects[0]?.submissions)
    ) {
      projectDetails?.projects[0]?.submissions?.forEach(item => {
        if (item?.average_score && typeof item?.average_score === "number") {
          score += item?.average_score;
        }
      });
    }
    return score ? score : 0;
  }, [projectDetails]);

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
                <TeamSubmissions
                  submissions={
                    Array.isArray(projectDetails?.projects) &&
                    Array.isArray(projectDetails?.projects[0]?.submissions)
                      ? projectDetails?.projects[0]?.submissions
                      : []
                  }
                />
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
                <DashboardNextSubmission deadline={currentDeadline} />

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
          <Grid item xs={6} md={6}>
            <DashboardCard
              background="#EFE3FF"
              value={
                Array.isArray(projectDetails?.projects) &&
                Array.isArray(projectDetails?.projects[0]?.submissions)
                  ? projectDetails?.projects[0]?.submissions?.length
                  : 0
              }
              textColor="#5C0BC9"
              title="Submissions"
              isLoading={isFetchingDashboard}
              height="100px"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <DashboardCard
              background="#FFDFDF"
              value={totalAverageScore}
              textColor="#F56E6E"
              title="Your Team"
              leadershipCard
              isLoading={isFetchingDashboard}
              height="100px"
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: 1 }}>
          <HeaderAndViewAll
            header="Resources"
            text="View All"
            onClick={() => {}}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <ResourcesTable loading={false} resources={resources} />
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

export default DashboardPage;
