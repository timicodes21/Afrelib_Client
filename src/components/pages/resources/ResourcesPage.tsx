import PageHeader from "@/components/molecules/headers/PageHeader";
import ResourcesTable from "@/components/organisms/tables/ResourcesTable";
import Wrapper from "@/components/templates/Wrapper";
import { resources } from "@/data/dashboard";
import { Box } from "@mui/material";
import React from "react";

const ResourcesPage = () => {
  return (
    <Wrapper>
      <PageHeader headerText="Resources" />
      <Box sx={{ mt: 2 }}>
        <ResourcesTable loading={false} resources={resources} />
      </Box>
    </Wrapper>
  );
};

export default ResourcesPage;
