import { useState } from "react";
import { z, string, number } from "zod";
import { SubmitHandler } from "react-hook-form/dist/types";
import { AddTeamFormValues } from "@/types/formValues";
import { useInfiniteQuery, useMutation } from "@tanstack/react-query";
import {
  ICreateCohortResponse,
  IGetTeamsResponse,
  ITeamRespons,
} from "@/types/apiResponses";
import { queryClient, queryKeys } from "@/data/constants";
import { createTeam, getTeams } from "@/api/team";
import { ICreateTeamRequest } from "@/types/apiRequests";

export const useGetAllTeams = () => {
  const getAllTeams = async (pageNo: 1) => {
    let response = await getTeams(pageNo);
    return response;
  };

  const {
    data,
    status,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery(
    [queryKeys.getTeams],
    ({ pageParam = 1 }) => getAllTeams(pageParam),
    {
      getNextPageParam: (lastPage, pages) => {
        // console.log("lastpage", lastPage, "pages", pages);
        return lastPage?.length !== 0 ? pages.length + 1 : null;
      },
    },
  );

  const allTeams: IGetTeamsResponse[] = [];
  data?.pages &&
    Array.isArray(data?.pages) &&
    data?.pages?.map(page =>
      page?.map((el: IGetTeamsResponse) => allTeams.push(el)),
    );

  return {
    allTeams,
    status,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};

export const useAdminTeams = () => {
  const [isLoading, setIsLoading] = useState(false);
  const schema = z.object({
    name: string(),
    description: string(),
    students: number().array(),
    mentor: number(),
    cohort: string(),
  });

  const onSuccess = (data: ITeamRespons | string) => {
    console.log("on success data teams", data);
    queryClient.invalidateQueries([queryKeys.getTeams]);
  };

  const onError = () => {};

  const onSubmit: SubmitHandler<AddTeamFormValues> = async data => {
    console.log("data form cohort", data);

    const formData: ICreateTeamRequest = {
      team_name: data?.name,
      team_description: data?.description,
      studentIds: data?.students,
      mentorId: data?.mentor,
    };

    setIsLoading(true);

    const response = await createTeam(formData, data?.cohort);

    if (response?.teamId) {
      onSuccess(response);
    } else {
      onError();
    }

    setIsLoading(false);
  };

  return { schema, onSubmit, isLoading };
};
