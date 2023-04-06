import PageHeader from "@/components/molecules/headers/PageHeader";
import Wrapper from "@/components/templates/Wrapper";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import PageFlexLayout from "@/components/templates/PageFlexLayout";
import WeeklyUpdatesWrapper from "@/components/molecules/wrappers/WeeklyUpdatesWrapper";
import HeaderAndViewAll from "@/components/molecules/wrappers/HeaderAndViewAll";

const ClassroomPage = () => {
  return (
    <Wrapper>
      <PageHeader headerText="Classroom" />
      <PageFlexLayout
        rightContent={
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={12}>
              {/* <MessagesPage messages={[]} /> */}
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
                {/* <TeamSubmissions submissions={[]} /> */}
              </Box>
            </Grid>
          </Grid>
        }
      >
        
      </PageFlexLayout>
    </Wrapper>
  );
};

export default ClassroomPage;
