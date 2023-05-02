import { getAllProjects, getCohortProject } from "@/api/projects";
import { queryKeys } from "@/data/constants";
import {
  IGetAllProjectsResponse,
  IGetCohortProjectResponse,
} from "@/types/apiResponses";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const useGetProjects = () => {
  const { data, isFetching, status } = useQuery<
    IGetAllProjectsResponse | string
  >([queryKeys.getAllprojects], () => getAllProjects());

  return { data, isFetching, status };
};

export const useGetCohortProject = (cohortId: string) => {
  const { data, isFetching, status } = useQuery<
    IGetCohortProjectResponse | string
  >([queryKeys.getAllprojects], () => getCohortProject(cohortId));

  return { data, isFetching, status };
};

export const useAdminProjects = () => {
  const [option, setOption] = useState<"submission" | "evaluation">(
    "submission",
  );
  return { option, setOption };
};
