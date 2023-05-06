import React from "react";
import { Box, Typography } from "@mui/material";
import { IGetTeamProjectsResponse } from "@/types/apiResponses";
import SubmissionTable from "@/components/organisms/tables/SubmissionTable";

interface IProps {
  project: IGetTeamProjectsResponse;
  index: number;
}

const ProjectDetails: React.FC<IProps> = ({ project, index }) => {
  return (
    <Box>
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
          {project?.team?.mentor?.first_name} {project?.team?.mentor?.last_name}
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
          {project?.projects[index]?.project_title}
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
          {project?.projects[index]?.project_description}
        </Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography className="font-20 font-600" sx={{ color: "#172B4D" }}>
          Submissions
        </Typography>
        <SubmissionTable submission={project?.projects[index]?.submissions} />
      </Box>
    </Box>
  );
};

export default ProjectDetails;
