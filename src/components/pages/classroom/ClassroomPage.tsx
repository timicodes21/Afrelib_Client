import PageHeader from "@/components/molecules/headers/PageHeader";
import Wrapper from "@/components/templates/Wrapper";
import {
  Box,
  Grid,
  Typography,
  CircularProgress,
  LinearProgress,
} from "@mui/material";
import React, { useState } from "react";
import PageFlexLayout from "@/components/templates/PageFlexLayout";
import WeeklyUpdatesWrapper from "@/components/molecules/wrappers/WeeklyUpdatesWrapper";
import HeaderAndViewAll from "@/components/molecules/wrappers/HeaderAndViewAll";
import LightCard from "@/components/molecules/wrappers/LightCard";
import Image from "next/image";
import {
  useClassRoom,
  useGetTeamProjects,
} from "@/hooks/classRoom/useClassRoom";
import { useGlobalContext } from "@/contexts/GlobalContext";
import ProjectContainer from "@/components/organisms/containers/ProjectContainer";
import EmptyPage from "@/components/templates/EmptyPage";
import SubmissionForm from "./SubmissionForm";
import CustomModal from "@/components/organisms/modals/CustomModal";
import { useModal } from "@/hooks/utility";
import ProjectDetails from "./ProjectDetails";
import { IGetTeamProjectsResponse } from "@/types/apiResponses";

const ClassroomPage = () => {
  const {
    userDetails: { teamId },
  } = useGlobalContext();
  const { data, isFetching, status } = useGetTeamProjects(
    teamId ?? 0,
    typeof teamId === "number" && teamId !== 0,
  );

  const { open, setOpen, openModal, closeModal } = useModal();

  const [index, setIndex] = useState(0);

  console.log("data", data);

  return (
    <Wrapper>
      <PageHeader headerText="Classroom" />
      <PageFlexLayout
        rightContent={
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={12}>
              <SubmissionForm
                projectId={typeof data === "object" ? data?.projects[0]?.id : 0}
              />
            </Grid>
          </Grid>
        }
      >
        <Box>
          <LightCard width="184px">
            {status === "loading" ? (
              <Box className="text-center">
                <CircularProgress sx={{ color: "#0065B5" }} size={25} />
              </Box>
            ) : (
              <Box className="d-flex items-center" sx={{ p: 1 }}>
                {" "}
                <Image
                  alt="avatar"
                  src="/assets/icons/avatar_mentor.svg"
                  width={40}
                  height={40}
                />
                <Box sx={{ ml: 1 }}>
                  <Typography
                    className="font-12 font-400"
                    sx={{ color: "secondary.main" }}
                  >
                    {typeof data === "object" &&
                      `${data?.team?.mentor?.first_name} ${data?.team?.mentor?.last_name}`}
                  </Typography>
                  <Typography
                    className="font-12 font-600"
                    sx={{ color: "secondary.main" }}
                  >
                    Mentor
                  </Typography>
                </Box>
              </Box>
            )}
          </LightCard>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={3}>
            {typeof data === "object" &&
              data?.projects.map((item, index) => (
                <Grid item xs={12} sm={6} lg={4}>
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
      </PageFlexLayout>
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

export default ClassroomPage;
