import PageHeader from "@/components/molecules/headers/PageHeader";
import EvaluationWrapper from "@/components/molecules/wrappers/EvaluationWrapper";
import HeaderAndViewAll from "@/components/molecules/wrappers/HeaderAndViewAll";
import ProjectContainer from "@/components/organisms/containers/ProjectContainer";
import EmptyPage from "@/components/templates/EmptyPage";
import PageFlexLayout from "@/components/templates/PageFlexLayout";
import Wrapper from "@/components/templates/Wrapper";
import { useGetProjectsUnderPanelists } from "@/hooks/projects/useProjects";
import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import React from "react";

const PanelistProjectPage = () => {
  const { data, isFetching, status } = useGetProjectsUnderPanelists();

  return (
    <Wrapper>
      <PageHeader headerText="Projects" />
      <PageFlexLayout
        rightContent={
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={12}>
              <EvaluationWrapper header="Evaluation Criteria">
                The following are the evaluation criteria that will be used to
                assess the submissions: Technical proficiency: How well does the
                submission demonstrate technical skills? Innovation: Does the
                submission show creativity and originality? User experience: Is
                the submission easy to use and intuitive for the target
                audience? Impact: Does the submission have the potential to
                solve a real-world problem? Presentation: How well does the
                submission convey its ideas and message? Please use these
                criteria to provide a fair and unbiased evaluation of each
                submission. If you have any questions or concerns, please don't
                hesitate to contact us.
              </EvaluationWrapper>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={12}>
              <HeaderAndViewAll
                header="Leaderboard"
                text="View All"
                onClick={() => {}}
              />

              <Box
                sx={{
                  mt: 2,
                  boxShadow:
                    "0px 1px 3px rgba(16, 24, 40, 0.15), 0px 1px 2px rgba(16, 24, 40, 0.1)",
                  borderRadius: "10px",
                  background: "#FBFAFA",
                }}
              >
                {[1, 2, 3, 4].map((item, index) => (
                  <Box sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.08)" }}>
                    <Box
                      className="d-flex justify-between items-center"
                      sx={{ p: 1 }}
                    >
                      <Typography
                        className="font-12 font-500"
                        sx={{ color: "secondary.main" }}
                      >
                        Team 05
                      </Typography>
                      <Typography
                        className="font-12 font-500"
                        sx={{ color: "secondary.main" }}
                      >
                        1200
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        }
      >
        <Grid container spacing={3}>
          {typeof data === "object" &&
            data?.cohort_projects.map((item, index) => (
              <Grid item xs={12} sm={6} lg={4}>
                <ProjectContainer
                  headerText={`Team ${item?.team?.team_name ?? ""}`}
                  onClick={() => {}}
                  submissionText=""
                  totalSubmissions={7}
                  submissionsDone={2}
                />
              </Grid>
            ))}
        </Grid>

        {!isFetching && Array.isArray(data) && data.length === 0 && (
          <EmptyPage text="Team Projects will appear here.." />
        )}

        {isFetching && (
          <Box sx={{ width: "100%", mt: 2 }}>
            <LinearProgress sx={{ color: "#213F7D" }} />
          </Box>
        )}
      </PageFlexLayout>
    </Wrapper>
  );
};

export default PanelistProjectPage;
