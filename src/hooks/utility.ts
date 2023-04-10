import { allUsers } from "./../data/dashboard";
import { getRoles } from "@/api/roles";
import { queryKeys } from "@/data/constants";
import { IRole } from "@/types/apiResponses";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useGetAllUsers } from "./admin/useAdminUsers";

const usePasswordShow = () => {
  const [passwordShow, setPasswordShow] = useState<boolean>(false);

  const showPassword = () => {
    setPasswordShow(!passwordShow);
  };

  return { passwordShow, showPassword };
};

export default usePasswordShow;

export const useModal = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return { open, setOpen, openModal, closeModal };
};

export const useDrawer = () => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return { open, setOpen, openDrawer, closeDrawer };
};

export const useTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return {
    rowsPerPage,
    page,
    handleChangePage,
    handleChangeRowsPerPage,
  };
};

// Logic for all beneficiaries screen
export const useGetRoles = () => {
  const { data, status, isFetching } = useQuery<IRole[], Error>(
    [queryKeys.getRoles],
    () => getRoles(),
  );

  const rolesSelect =
    data &&
    Array.isArray(data) &&
    data?.map((item, index) => {
      return { label: item?.role_name, value: item?.role_id };
    });

  return { data, status, isFetching, rolesSelect };
};

export const useFilterUsersForSelect = () => {
  const { allUsers, isLoading } = useGetAllUsers();

  const allMentors =
    !isLoading &&
    Array.isArray(allUsers) &&
    allUsers
      .filter(item => {
        return item?.role_name === "Mentor";
      })
      .map(item => {
        return {
          label: `${item?.first_name} ${item?.last_name}`,
          value: item?.id,
        };
      });

  const allPanelists =
    !isLoading &&
    Array.isArray(allUsers) &&
    allUsers
      .filter(item => {
        return item?.role_name === "Panelist";
      })
      .map(item => {
        return {
          label: `${item?.first_name} ${item?.last_name}`,
          value: item?.id,
        };
      });

  const allStudents =
    !isLoading &&
    Array.isArray(allUsers) &&
    allUsers
      .filter(item => {
        return item?.role_name === "Student";
      })
      .map(item => {
        return {
          label: `${item?.first_name} ${item?.last_name}`,
          value: item?.id,
        };
      });

  return { isLoading, allMentors, allPanelists, allStudents };
};
