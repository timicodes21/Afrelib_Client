import PageHeader from "@/components/molecules/headers/PageHeader";
import MenteesTable from "@/components/organisms/tables/MenteesTable";
import Wrapper from "@/components/templates/Wrapper";
import { useGlobalContext } from "@/contexts/GlobalContext";
import { useGetMentees } from "@/hooks/mentees/useMentees";
import { Box } from "@mui/material";
import React from "react";

const MenteesPage = () => {
  const {
    userDetails: { id },
  } = useGlobalContext();

  const { data, isFetching, status } = useGetMentees(
    Number(id),
    typeof id === "number",
  );

  return (
    <Wrapper>
      <PageHeader headerText="My Mentees" />
      <Box sx={{ mt: 2 }}>
        <MenteesTable
          loading={isFetching}
          mentees={typeof data === "object" ? data?.mentees : []}
        />
      </Box>
    </Wrapper>
  );
};

export default MenteesPage;
