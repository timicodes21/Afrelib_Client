import { useState } from "react";
import { z, string, number } from "zod";
import { SubmitHandler } from "react-hook-form/dist/types";
import { AddTeamFormValues } from "@/types/formValues";
import { useInfiniteQuery, useMutation } from "@tanstack/react-query";
import {
  ICreateCohortResponse,
  IGetCohortsResponse,
} from "@/types/apiResponses";
import { queryClient, queryKeys } from "@/data/constants";
import { createTeam, getTeams } from "@/api/team";
import { ICreateTeamRequest } from "@/types/apiRequests";

const useCreateTeam = () => {
  return useMutation(createTeam);
};

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

  const allTeams: IGetCohortsResponse[] = [];
  data?.pages &&
    Array.isArray(data?.pages) &&
    data?.pages?.map(page =>
      page?.map((el: IGetCohortsResponse) => allTeams.push(el)),
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
  const schema = z.object({
    name: string(),
    description: string(),
    students: number().array(),
    mentor: number(),
  });

  const { mutate, isLoading } = useCreateTeam();

  const onSuccess = (data: ICreateCohortResponse | string) => {
    console.log("on success data cohorts", data);
    queryClient.invalidateQueries([queryKeys.getTeams]);
  };

  const onError = () => {};

  const onSubmit: SubmitHandler<AddTeamFormValues> = data => {
    console.log("data form cohort", data);

    const formData: ICreateTeamRequest = {
      team_name: data?.name,
      team_description: data?.description,
      studentIds: data?.students,
      mentorId: data?.mentor,
    };

    mutate(formData, { onSuccess, onError });
  };

  return { schema, onSubmit };
};
