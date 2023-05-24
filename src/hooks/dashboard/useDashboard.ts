import { getDashboardDetailsStudent } from "@/api/dashboard";
import { queryKeys } from "@/data/constants";
import { IGetStudentDashboardResponse } from "@/types/apiResponses";
import { useQuery } from "@tanstack/react-query";

export const useGetDashboardDetailsStudent = () => {
  const { data, isFetching, status } = useQuery<
    IGetStudentDashboardResponse | string
  >([queryKeys.getStudentDashboard], () => getDashboardDetailsStudent());

  return { data, isFetching, status };
};
