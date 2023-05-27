import { allUsers } from "./../data/dashboard";
import { getRoles } from "@/api/roles";
import { queryKeys } from "@/data/constants";
import {
  IGetAllUsersResponse,
  IGetRolesResponse,
  IRole,
  User,
} from "@/types/apiResponses";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useGetAllUsers } from "./admin/useAdminUsers";
import { useGetAllCohorts } from "./admin/useAdminCohort";
import { useGetAllTeams } from "./admin/useAdminTeams";
import { Allerta } from "next/font/google";
import { getStudensNotInTeam, getUsersByRoleId } from "@/api/users";

const usePasswordShow = () => {
  const [passwordShow, setPasswordShow] = useState<boolean>(false);

  const showPassword = () => {
    setPasswordShow(!passwordShow);
  };

  return { passwordShow, showPassword };
};

export default usePasswordShow;

export const getUserByRole = async (
  role: "Student" | "Panelist" | "Mentor",
  selectField: boolean,
): Promise<{ label: string; value: number }[]> => {
  const response = await getRoles();

  if (typeof response === "string") return [];
  let allRoles = response;
  if (Array.isArray(response)) {
    allRoles = response;
  }
  const roleId = allRoles?.find(item => item?.role_name === role)?.role_id;
  if (roleId === null) return [];
  const res = await getUsersByRoleId(roleId ?? "", 1);
  // if (!selectField)
  //   return typeof res === "object" && Array.isArray(res?.data) ? res?.data : [];

  const usersForSelect =
    typeof res === "object" &&
    Array.isArray(res?.data) &&
    res?.data?.map(item => {
      return {
        label: `${item?.first_name} ${item?.last_name}`,
        value: item?.id,
      };
    });

  return Array.isArray(usersForSelect) ? usersForSelect : [];
};

export const useUserForSelectField = (
  role: "Student" | "Panelist" | "Mentor",
) => {
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [users, setUsers] = useState<{ label: string; value: number }[]>([]);

  useEffect(() => {
    setLoadingUsers(true);
    getUserByRole(role, true)
      .then(res => {
        setUsers(res);
        setLoadingUsers(false);
      })
      .catch(err => {
        setLoadingUsers(false);
      });
  }, [role]);

  return { loadingUsers, users };
};

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
  const { data, status, isFetching } = useQuery<IGetRolesResponse[] | string>(
    [queryKeys.getRoles],
    () => getRoles(),
  );

  let rolesSelect =
    data &&
    Array.isArray(data) &&
    data?.map((item, index) => {
      return { label: item?.role_name, value: item?.role_id };
    });

  rolesSelect = Array.isArray(rolesSelect) ? rolesSelect : [];

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

export const useCohortsUsersForSelect = () => {
  const { allCohorts, isLoading } = useGetAllCohorts();

  const cohortsSelect =
    !isLoading &&
    Array.isArray(allCohorts) &&
    allCohorts.map(item => {
      return {
        label: item?.cohort_name,
        value: item?.cohort_id,
      };
    });

  return { isLoading, allCohorts, cohortsSelect };
};

export const useTeamsForSelect = () => {
  const { allTeams, isLoading } = useGetAllTeams();

  const teamSelect =
    !isLoading &&
    Array.isArray(allTeams) &&
    allTeams.map(item => {
      return {
        label: item?.team_name,
        value: item?.id,
      };
    });

  return { isLoading, teamSelect };
};

export const useGetStudentsNotInTeam = () => {
  const { data, isFetching, status } = useQuery<IGetAllUsersResponse>(
    [queryKeys.getStudentsNotInTeam],
    () => getStudensNotInTeam(),
  );

  return { data, isFetching, status };
};

export const useStudentsForSelect = () => {
  const { data, isFetching } = useGetStudentsNotInTeam();

  const studentsSelect =
    !isFetching &&
    Array.isArray(data) &&
    data.map(item => {
      return {
        label: `${item?.first_name} ${item?.last_name}`,
        value: item?.id,
      };
    });

  return { isFetching, studentsSelect };
};
