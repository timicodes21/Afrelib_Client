import PageHeader from "@/components/molecules/headers/PageHeader";
import ProjectContainer from "@/components/organisms/containers/ProjectContainer";
import PageFlexLayout from "@/components/templates/PageFlexLayout";
import Wrapper from "@/components/templates/Wrapper";
import { useGetProjects } from "@/hooks/admin/useAdminProjects";
import { Box, Grid } from "@mui/material";
import React from "react";

const PanelistProjectPage = () => {
  const { data, isFetching, status } = useGetProjects();
  return (
    <Wrapper>
      <PageHeader headerText="Projects" />
      <PageFlexLayout rightContent={<Box></Box>}>
        <Grid container spacing={3}>
          {typeof data === "object" &&
            data?.data?.map((item, index) => (
              <Grid item xs={12} md={6} lg={4}>
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
      </PageFlexLayout>
    </Wrapper>
  );
};

export default PanelistProjectPage;
