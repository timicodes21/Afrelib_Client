import PageHeader from "@/components/molecules/headers/PageHeader";
import EvaluationWrapper from "@/components/molecules/wrappers/EvaluationWrapper";
import HeaderAndViewAll from "@/components/molecules/wrappers/HeaderAndViewAll";
import ProjectContainer from "@/components/organisms/containers/ProjectContainer";
import CustomModal from "@/components/organisms/modals/CustomModal";
import EmptyPage from "@/components/templates/EmptyPage";
import PageFlexLayout from "@/components/templates/PageFlexLayout";
import Wrapper from "@/components/templates/Wrapper";
import {
  useGetPanelistProjectSubmission,
  useGetProjectsUnderPanelists,
} from "@/hooks/projects/useProjects";
import { useModal } from "@/hooks/utility";
import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import React, { useState } from "react";
import AllSubmissions from "./AllSubmissions";
import SubmissionDetails from "./SubmissionDetails";
import { useGetSingleSubmissions } from "@/hooks/submissions/useSubmissions";
import { IGetSingleSubmissionResponse } from "@/types/apiResponses";
import WeeklyUpdatesPage from "../../admin/dashboard/WeeklyUpdatesPage";

const PanelistProjectPage = () => {
  const { data, isFetching, status } = useGetProjectsUnderPanelists();
  const [projectId, setProjectId] = useState(0);
  const [submissionId, setSubmissionId] = useState(0);

  const { open, openModal, setOpen, closeModal } = useModal();
  const {
    open: open2,
    openModal: openModal2,
    setOpen: setOpen2,
    closeModal: closeModal2,
  } = useModal();

  const { data: allSubmissions, isFetching: loadingAllSubmissions } =
    useGetPanelistProjectSubmission(
      projectId,
      typeof data === "object" && projectId !== 0,
    );

  const { data: singleSubmission, isFetching: isFetchingSubmission } =
    useGetSingleSubmissions(
      submissionId,
      submissionId !== 0 && typeof allSubmissions === "object",
    );

  const [options, setOptions] = useState<"submissions" | "criteria">(
    "submissions",
  );

  return (
    <Wrapper>
      <PageHeader headerText="Projects" />
      <PageFlexLayout
        rightContent={
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={12}>
              <EvaluationWrapper header="Evaluation Criteria">
                1. Collaboration (100 points): Collaboration emphasises the
                ability to work effectively in a team or group setting.
                Participants will be evaluated on their engagement in
                collaborative activities, including communication, sharing of
                ideas, and constructive contributions. The assessment will focus
                on the extent to which participants demonstrate teamwork,
                cooperation, and effective collaboration skills.
                <br />
                <br />
                <button
                  style={{
                    background: "transparent",
                    outline: "none",
                    border: "none",
                    color: "#FFF",
                  }}
                  className="pointer"
                  onClick={() => {
                    setOptions("criteria");
                    openModal();
                  }}
                >
                  Read More..
                </button>
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
                {typeof data === "object" &&
                  Array.isArray(data?.cohort_projects) &&
                  data?.cohort_projects.map((item, index) => (
                    <Box
                      sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.08)" }}
                      key={index}
                    >
                      <Box
                        className="d-flex justify-between items-center"
                        sx={{ p: 1 }}
                      >
                        <Typography
                          className="font-12 font-500"
                          sx={{ color: "secondary.main" }}
                        >
                          {item[0]?.project_title}
                        </Typography>
                        <Typography
                          className="font-12 font-500"
                          sx={{ color: "secondary.main" }}
                        ></Typography>
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
              <Grid item xs={12} sm={6} lg={6} key={index}>
                <ProjectContainer
                  headerText={item[0]?.project_title}
                  onClick={() => {}}
                  submissionText=""
                  totalSubmissions={7}
                  submissionsDone={item[0]?.submissions?.length}
                  onClickCard={() => {
                    setProjectId(item[0]?.id);
                    setOptions("submissions");
                    openModal();
                  }}
                />
              </Grid>
            ))}
        </Grid>

        {!isFetching &&
          typeof data === "object" &&
          data?.cohort_projects?.length === 0 && (
            <EmptyPage text="Cohort Projects will appear here." />
          )}

        {!isFetching && !data && (
          <EmptyPage text="Cohort Projects will appear here.." />
        )}

        {isFetching && (
          <Box sx={{ width: "100%", mt: 2 }}>
            <LinearProgress sx={{ color: "#213F7D" }} />
          </Box>
        )}
      </PageFlexLayout>
      <CustomModal
        open={open2}
        setOpen={setOpen2}
        width="1000px"
        closeOnOverlayClick={false}
        showCloseIcon
      >
        <SubmissionDetails
          submission={
            typeof singleSubmission === "object"
              ? singleSubmission
              : ({} as IGetSingleSubmissionResponse)
          }
          submissionId={submissionId}
        />
      </CustomModal>

      <CustomModal
        open={open}
        setOpen={setOpen}
        width="800px"
        closeOnOverlayClick={false}
        showCloseIcon={(options === "submissions") === true}
      >
        {options === "submissions" ? (
          <AllSubmissions
            evaluatedSubmissions={
              typeof allSubmissions === "object"
                ? allSubmissions?.evaluatedSubmissions
                : []
            }
            nonEvaluatedSubmissions={
              typeof allSubmissions === "object"
                ? allSubmissions?.nonEvaluatedSubmissions
                : []
            }
            isFetching={loadingAllSubmissions}
            onClick={submissionId => {
              setSubmissionId(submissionId);
              openModal2();
            }}
          />
        ) : (
          <WeeklyUpdatesPage
            header="Evaluation Criteria"
            body={
              <Typography
                className="font-14 font-400 pointer"
                sx={{ color: "secondary.main", mt: 1 }}
              >
                1. Collaboration (100 points): Collaboration emphasises the
                ability to work effectively in a team or group setting.
                Participants will be evaluated on their engagement in
                collaborative activities, including communication, sharing of
                ideas, and constructive contributions. The assessment will focus
                on the extent to which participants demonstrate teamwork,
                cooperation, and effective collaboration skills.
                <br />
                <br />
                2. Critical Thinking (100 points): Critical thinking refers to
                the ability to analyse, evaluate, and solve problems
                systematically. Participants will be assessed on their capacity
                to approach challenges with a logical and analytical mindset.
                The evaluation will focus on the use of evidence, reasoning, and
                sound judgment in developing solutions.
                <br />
                <br />
                3. Creative Problem Solving (100 points): This criterion
                assesses the participant's ability to think creatively and
                develop innovative solutions to complex problems. Participants
                will be evaluated on their capacity to generate original ideas,
                consider alternative perspectives, and apply imaginative
                thinking in problem-solving processes. <br />
                <br />
                4. Persistence (100 points): Persistence reflects the
                participant's determination, resilience, and dedication to
                overcome obstacles and achieve their goals. Participants will be
                evaluated on their ability to demonstrate perseverance and a
                proactive attitude throughout the challenge, including their
                response to setbacks or challenges faced during the solution
                development process. <br />
                <br />
                5. Learning Lessons (100 points): This criterion assesses the
                participant's ability to learn from the challenge experience and
                apply acquired knowledge and insights. Participants will be
                evaluated on their reflection, growth, and improvement
                throughout the challenge journey, as well as their ability to
                adapt and incorporate feedback into their work.
                <br />
                <br />
                6. Use of GPT (100 points): GPT (Generative Pre-trained
                Transformer) refers to the utilisation of language models for
                natural language processing tasks. This criterion assesses the
                participant's skill in leveraging GPT technology within their
                solution. Participants will be evaluated based on the
                appropriate and effective use of GPT to enhance the
                functionality, interactivity, or intelligence of their solution.
              </Typography>
            }
            handleClose={closeModal}
          />
        )}
      </CustomModal>
    </Wrapper>
  );
};

export default PanelistProjectPage;
