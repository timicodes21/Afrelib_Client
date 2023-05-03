import {
  getAllProjects,
  getCohortProject,
  getProjectsUnderPanelists,
} from "@/api/projects";
import { queryKeys } from "@/data/constants";
import {
  IGetAllProjectsResponse,
  IGetCohortProjectResponse,
  IGetProjectsUnderPanelistsResponse,
} from "@/types/apiResponses";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const useGetProjectsUnderPanelists = () => {
  const { data, isFetching, status } = useQuery<
    IGetProjectsUnderPanelistsResponse | string
  >([queryKeys.getProjectsUnderPanelists], () => getProjectsUnderPanelists());

  return { data, isFetching, status };
};

export const useGetCohortProject = (cohortId: string) => {
  const { data, isFetching, status } = useQuery<
    IGetCohortProjectResponse | string
  >([queryKeys.getAllprojects], () => getCohortProject(cohortId));

  return { data, isFetching, status };
};

export const useProjects = () => {
  const [option, setOption] = useState<"submission" | "evaluation">(
    "submission",
  );
  return { option, setOption };
};
