import PageHeader from "@/components/molecules/headers/PageHeader";
import Wrapper from "@/components/templates/Wrapper";
import { Box, Grid, LinearProgress } from "@mui/material";
import React, { useState } from "react";
import ProjectContainer from "@/components/organisms/containers/ProjectContainer";
import EmptyPage from "@/components/templates/EmptyPage";
import CustomModal from "@/components/organisms/modals/CustomModal";
import { useModal } from "@/hooks/utility";
import ProjectDetails from "../../classroom/ProjectDetails";
import { IGetTeamProjectsResponse } from "@/types/apiResponses";

interface IProps {
  data: IGetTeamProjectsResponse;
  isFetching: boolean;
}

const MentorTeamProjects: React.FC<IProps> = ({ data, isFetching }) => {
  const { open, setOpen, openModal, closeModal } = useModal();

  const [index, setIndex] = useState(0);

  return (
    <Wrapper>
      <PageHeader
        headerText={`Team ${isFetching ? "" : data?.team?.team_name} Projects`}
        noSearchButton
      />

      <Box sx={{ mt: 3 }}>
        <Grid container spacing={3}>
          {!isFetching &&
            data &&
            typeof data === "object" &&
            data?.projects.map((item, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <ProjectContainer
                  headerText={
                    typeof data === "object"
                      ? data?.projects[index]?.project_title
                      : ""
                  }
                  onClick={() => {}}
                  submissionText=""
                  totalSubmissions={7}
                  submissionsDone={2}
                  onClickCard={() => {
                    setIndex(index);
                    openModal();
                  }}
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
      </Box>

      <CustomModal
        open={open}
        setOpen={setOpen}
        width="1000px"
        closeOnOverlayClick={false}
        showCloseIcon
      >
        <Box sx={{ p: 5 }}>
          <ProjectDetails
            project={
              typeof data === "object" ? data : ({} as IGetTeamProjectsResponse)
            }
            index={index}
          />
        </Box>
      </CustomModal>
    </Wrapper>
  );
};

export default MentorTeamProjects;
