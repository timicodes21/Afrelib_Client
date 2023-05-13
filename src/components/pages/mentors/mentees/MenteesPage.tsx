import MenteesTable from "@/components/organisms/tables/MenteesTable";
import { useGetAllUsers } from "@/hooks/admin/useAdminUsers";
import React, { useMemo } from "react";

const MenteesPage = () => {
  const { allUsers, isLoading } = useGetAllUsers();

  const allMentees = useMemo(() => {
    // filter students
  }, []);

  return <>{/* <MenteesTable /> */}</>;
};

export default MenteesPage;
