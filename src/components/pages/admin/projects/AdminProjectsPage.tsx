import TransparentBlueButton from "@/components/atoms/buttons/TransparentBlueButton";
import PageHeader from "@/components/molecules/headers/PageHeader";
import ProjectContainer from "@/components/organisms/containers/ProjectContainer";
import CustomModal from "@/components/organisms/modals/CustomModal";
import Wrapper from "@/components/templates/Wrapper";
import { useModal } from "@/hooks/utility";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useCallback } from "react";
import SubmissionDeadline from "./SubmissionDeadline";
import {
  useAdminProjects,
  useGetProjects,
} from "@/hooks/admin/useAdminProjects";
import EvaluationCriteria from "./EvaluationCriteria";

const AdminProjectsPage = () => {
  const { open, setOpen, closeModal, openModal } = useModal();
  const { option, setOption } = useAdminProjects();

  const { data, isFetching, status } = useGetProjects();

  const renderPage = useCallback(() => {
    switch (option) {
      case "evaluation":
        return <EvaluationCriteria handleClose={closeModal} />;
      case "submission":
        return <SubmissionDeadline handleClose={closeModal} />;
      default:
        return <></>;
    }
  }, [option]);

  return (
    <Wrapper>
      <PageHeader headerText="Projects" />
      <Box
        className=""
        sx={{
          mt: 2,
          display: { xs: "block", md: "flex" },
          justifyContent: "space-between",
        }}
      >
        <Box className="d-flex items-center">
          <TransparentBlueButton
            type="button"
            onClick={() => {
              setOption("submission");
              openModal();
            }}
          >
            <Image
              alt="calendar_icon"
              src="/assets/icons/calendar_icon.svg"
              width={18}
              height={20}
              style={{ marginRight: "10px" }}
            />
            Set Submission Deadline
          </TransparentBlueButton>
          <Typography
            className="font-16 font-600"
            sx={{ color: "secondary.main", ml: 1 }}
          >
            Date: -{" "}
          </Typography>
        </Box>
        <Box>
          <Typography
            className="font-16 font-600 pointer"
            sx={{ color: "primary.main", ml: 1, textDecoration: "underline" }}
            onClick={() => {
              setOption("evaluation");
              openModal();
            }}
          >
            Evaluation Criteria
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mt: { xs: 2, md: 3 } }}>
        <Grid container spacing={3}>
          {typeof data === "object" &&
            data?.data?.map((item, index) => (
              <Grid item xs={12} md={6} lg={3}>
                <ProjectContainer
                  headerText={`Team ${item?.team?.team_name}`}
                  onClick={() => {}}
                  submissionText=""
                  totalSubmissions={7}
                  submissionsDone={2}
                />
              </Grid>
            ))}
        </Grid>
      </Box>
      <CustomModal
        open={open}
        setOpen={setOpen}
        width="600px"
        closeOnOverlayClick={false}
        showCloseIcon={false}
      >
        {renderPage()}
      </CustomModal>
    </Wrapper>
  );
};

export default AdminProjectsPage;
