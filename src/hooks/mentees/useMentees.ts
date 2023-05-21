import { getMentorMentees } from "@/api/users";
import { queryKeys } from "@/data/constants";
import { IGetMentorMenteesResponse } from "@/types/apiResponses";
import { useQuery } from "@tanstack/react-query";

export const useGetMentees = (id: number, enabled: boolean) => {
  const { data, isFetching, status } = useQuery<
    IGetMentorMenteesResponse | string
  >([queryKeys.getMentorMentees], () => getMentorMentees(id), {
    enabled,
  });

  return { data, isFetching, status };
};
