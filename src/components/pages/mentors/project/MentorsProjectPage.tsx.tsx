import PageHeader from "@/components/molecules/headers/PageHeader";
import ProjectContainer from "@/components/organisms/containers/ProjectContainer";
import CustomModal from "@/components/organisms/modals/CustomModal";
import Wrapper from "@/components/templates/Wrapper";
import { useModal } from "@/hooks/utility";
import { Box, Grid, LinearProgress } from "@mui/material";
import { useGetProjects } from "@/hooks/admin/useAdminProjects";
import { useGlobalContext } from "@/contexts/GlobalContext";
import EmptyPage from "@/components/templates/EmptyPage";
import { IGetTeamProjectsResponse } from "@/types/apiResponses";
import { useState } from "react";
import { useGetTeamProjects } from "@/hooks/classRoom/useClassRoom";
import MentorTeamProjects from "./MentorTeamProjects";
import { queryClient, queryKeys } from "@/data/constants";

const MentorsProjectPage = () => {
  const {
    userDetails: { userId },
  } = useGlobalContext();
  const { open, setOpen, closeModal, openModal } = useModal();
  const [teamId, setTeamId] = useState(0);

  const { data, isFetching, status } = useGetProjects();
  const { data: teamProjects, isFetching: isFetchingTeamProjets } =
    useGetTeamProjects(teamId ?? 0, typeof teamId === "number" && teamId !== 0);

  console.log("team projects", teamProjects);

  return (
    <Wrapper>
      <PageHeader headerText="Projects" />

      <Box sx={{ mt: { xs: 2, md: 3 } }}>
        <Grid container spacing={3}>
          {typeof data === "object" &&
            data?.data
              ?.filter(item => item?.team?.mentor?.id === userId)
              .map((item, index) => (
                <Grid item xs={12} md={6} sm={6} lg={3}>
                  <ProjectContainer
                    headerText={`Team ${item?.team?.team_name}`}
                    onClick={() => {}}
                    submissionText=""
                    totalSubmissions={7}
                    submissionsDone={2}
                    onClickCard={() => {
                      setTeamId(item?.team?.id);
                      queryClient.invalidateQueries([
                        queryKeys.getTeamProjects,
                        item?.team?.id,
                      ]);
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
        <MentorTeamProjects
          data={
            typeof teamProjects === "object"
              ? teamProjects
              : ({} as IGetTeamProjectsResponse)
          }
          isFetching={isFetchingTeamProjets}
        />
      </CustomModal>
    </Wrapper>
  );
};

export default MentorsProjectPage;
