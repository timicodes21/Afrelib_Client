import PageHeader from "@/components/molecules/headers/PageHeader";
import Wrapper from "@/components/templates/Wrapper";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "@/styles/Dashboard.module.css";
import Image from "next/image";
import DashboardCard from "@/components/molecules/cards/DashboardCard";
import PageFlexLayout from "@/components/templates/PageFlexLayout";
import ResourcesTable from "@/components/organisms/tables/ResourcesTable";
import { messages, resources } from "@/data/dashboard";
import MessagesPage from "./MessagesPage";
import WeeklyUpdatesWrapper from "@/components/molecules/wrappers/WeeklyUpdatesWrapper";
import HeaderAndViewAll from "@/components/molecules/wrappers/HeaderAndViewAll";
import TeamSubmissions from "./TeamSubmissions";
import { useGlobalContext } from "@/contexts/GlobalContext";

const DashboardPage = () => {
  const { userDetails } = useGlobalContext();
  return (
    <Wrapper>
      <PageHeader headerText="Dashboard" />
      <PageFlexLayout
        rightContent={
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={12}>
              <MessagesPage messages={[]} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={12}>
              <WeeklyUpdatesWrapper>
                Welcome to Week 1 of the Challenge! <br /> Endeavor to put your
                best foot forward this week and seize the days as they come.
              </WeeklyUpdatesWrapper>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={12}>
              <Box sx={{ mt: 1 }}>
                <HeaderAndViewAll
                  header="Team Submissions"
                  text="View All"
                  onClick={() => {}}
                />
              </Box>
              <Box sx={{ mt: 1 }}>
                <TeamSubmissions submissions={[]} />
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
          <Grid item xs={6} md={3}>
            <DashboardCard
              background="#DEF1FF"
              value="28"
              textColor="#0072C7"
              title="Completed Courses"
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <DashboardCard
              background="#EFE3FF"
              value="28"
              textColor="#5C0BC9"
              title="Projects Submitted"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <DashboardCard
              background="#FFDFDF"
              value="4800"
              value2="200"
              textColor="#F56E6E"
              title="Leaderboard Points"
              leadershipCard
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
    </Wrapper>
  );
};

export default DashboardPage;
