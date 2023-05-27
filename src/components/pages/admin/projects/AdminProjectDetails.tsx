import React, { useState } from "react";
import { Box, LinearProgress, Typography } from "@mui/material";
import {
  IGetSingleProject,
  IGetSingleSubmissionResponse,
  IGetTeamProjectsResponse,
} from "@/types/apiResponses";
import SubmissionTable from "@/components/organisms/tables/SubmissionTable";
import CustomModal from "@/components/organisms/modals/CustomModal";
import { useModal } from "@/hooks/utility";
import SubmissionDetails from "../../panelist/projects/SubmissionDetails";
import { useGetSingleSubmissions } from "@/hooks/submissions/useSubmissions";
import { queryClient, queryKeys } from "@/data/constants";

interface IProps {
  project: IGetSingleProject;
  isFetching?: boolean;
}

const AdminProjectDetails: React.FC<IProps> = ({ project, isFetching }) => {
  const { open, setOpen, openModal, closeModal } = useModal();
  const [submissionId, setSubmissionId] = useState(0);

  const { data: singleSubmission, isFetching: isFetchingSubmission } =
    useGetSingleSubmissions(submissionId, submissionId !== 0);

  return (
    <Box>
      {isFetching && (
        <Box sx={{ width: "100%", mt: 2 }}>
          <LinearProgress sx={{ color: "#213F7D" }} />
        </Box>
      )}

      {!isFetching && (
        <>
          <Box sx={{}} className="d-flex items-center">
            <Typography className="font-16 font-600" sx={{ color: "#172B4D" }}>
              Team Name:
            </Typography>
            <Typography
              className="font-14 font-400"
              sx={{ color: "secondary.main", ml: 1 }}
            >
              {project?.team?.team_name}
            </Typography>
          </Box>
          <Box sx={{}} className="d-flex items-center">
            <Typography className="font-16 font-600" sx={{ color: "#172B4D" }}>
              Mentor:
            </Typography>
            <Typography
              className="font-14 font-400"
              sx={{ color: "secondary.main", ml: 1 }}
            >
              {project?.team?.mentor?.first_name}{" "}
              {project?.team?.mentor?.last_name}
            </Typography>
          </Box>
          <Box sx={{}} className="d-flex items-center">
            <Typography className="font-16 font-600" sx={{ color: "#172B4D" }}>
              Project Title:
            </Typography>
            <Typography
              className="font-14 font-400"
              sx={{ color: "secondary.main", ml: 1 }}
            >
              {project?.project_title}
            </Typography>
          </Box>
          <Box sx={{}} className="d-flex items-center">
            <Typography className="font-16 font-600" sx={{ color: "#172B4D" }}>
              Project Description:
            </Typography>
            <Typography
              className="font-14 font-400"
              sx={{ color: "secondary.main", ml: 1 }}
            >
              {project?.project_description}
            </Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography className="font-20 font-600" sx={{ color: "#172B4D" }}>
              Submissions
            </Typography>
            <SubmissionTable
              submission={project?.submissions}
              onClickRow={id => {
                setSubmissionId(id);
                queryClient.invalidateQueries([
                  queryKeys.getSingleSubmission,
                  id,
                ]);
                openModal();
              }}
            />
          </Box>
        </>
      )}
      <CustomModal
        open={open}
        setOpen={setOpen}
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
          notPanelist
          submissionId={submissionId}
        />
      </CustomModal>
    </Box>
  );
};

export default AdminProjectDetails;
