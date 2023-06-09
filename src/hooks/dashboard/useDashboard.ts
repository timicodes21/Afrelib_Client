import { getCohortDeadlines } from "@/api/cohorts";
import {
  getDashboardDetailsMentors,
  getDashboardDetailsPanelist,
  getDashboardDetailsStudent,
} from "@/api/dashboard";
import { queryKeys } from "@/data/constants";
import {
  ICohortDeadlineResponse,
  IGetMentorDashboardResponse,
  IGetPanelistDashboardResponse,
  IGetStudentDashboardResponse,
} from "@/types/apiResponses";
import { useQuery } from "@tanstack/react-query";

export const useGetDashboardDetailsStudent = () => {
  const { data, isFetching, status } = useQuery<
    IGetStudentDashboardResponse | string
  >([queryKeys.getStudentDashboard], () => getDashboardDetailsStudent());

  return { data, isFetching, status };
};

export const useGetDashboardDetailsMentor = () => {
  const { data, isFetching, status } = useQuery<
    IGetMentorDashboardResponse | string
  >([queryKeys.getMentorDashboard], () => getDashboardDetailsMentors());

  return { data, isFetching, status };
};

export const useGetDashboardDetailsPanelist = () => {
  const { data, isFetching, status } = useQuery<
    IGetPanelistDashboardResponse | string
  >([queryKeys.getPanelistDashboard], () => getDashboardDetailsPanelist());

  return { data, isFetching, status };
};

export const useGetCohortDeadlines = (cohortId: string, enabled?: boolean) => {
  const { data, isFetching, status } = useQuery<
    ICohortDeadlineResponse[] | string
  >([queryKeys.getPanelistDashboard], () => getCohortDeadlines(cohortId), {
    enabled,
  });

  return { data, isFetching, status };
};
