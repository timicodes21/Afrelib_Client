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
import WeeklyUpdatesWrapper from "@/components/molecules/wrappers/WeeklyUpdatesWrapper";
import HeaderAndViewAll from "@/components/molecules/wrappers/HeaderAndViewAll";
import AddItemCard from "@/components/molecules/cards/AddItemCard";
import TeamSubmissions from "../../dashboard/TeamSubmissions";
import { useGlobalContext } from "@/contexts/GlobalContext";
import WeeklyProgressContainer from "@/components/organisms/progress/WeeklyProgressContainer";
import UsersTable from "@/components/organisms/tables/UsersTable";
import { useGetAllUsers } from "@/hooks/admin/useAdminUsers";

const AdminDashboardPage = () => {
  const { userDetails } = useGlobalContext();

  const { allUsers, isLoading } = useGetAllUsers();

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
                  <TeamSubmissions submissions={messages} noStyles />
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
              value="12"
              textColor="#0072C7"
              title="No. of Teams"
              height="70px"
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <DashboardCard
              background="#EFE3FF"
              value="80"
              textColor="#5C0BC9"
              title="No. of Students"
              height="70px"
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <DashboardCard
              background="#FFF9E3"
              value="12"
              textColor="#E4B300"
              title="No. of Mentors"
              height="70px"
            />
          </Grid>{" "}
          <Grid item xs={6} md={3}>
            <DashboardCard
              background="#E3FFF7"
              value="5"
              textColor="#02C08A"
              title="No. of Panelists"
              height="70px"
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
          <Grid item xs={12} md={6} lg={4}>
            <WeeklyUpdatesWrapper header="Week 1">
              Welcome to Week 1 of the Challenge! <br /> Endeavor to put your
              best foot forward this week and seize the days as they come.
            </WeeklyUpdatesWrapper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            {" "}
            <WeeklyUpdatesWrapper header="Week 2">
              Welcome to Week 1 of the Challenge! <br /> Endeavor to put your
              best foot forward this week and seize the days as they come.
            </WeeklyUpdatesWrapper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AddItemCard onClick={() => {}} height="150px">
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
            onDisableEnable={id => console.log("userId", id)}
            onResetPassword={id => console.log("userId", id)}
          />
        </Box>
      </PageFlexLayout>
    </Wrapper>
  );
};

export default AdminDashboardPage;
