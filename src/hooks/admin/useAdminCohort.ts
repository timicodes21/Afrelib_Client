import { useState } from "react";
import { z, string, number } from "zod";
import { SubmitHandler } from "react-hook-form/dist/types";
import { AddCohortFormValues } from "@/types/formValues";
import { useInfiniteQuery, useMutation } from "@tanstack/react-query";
import { createCohort, getCohorts } from "@/api/cohorts";
import {
  ICreateCohortResponse,
  IGetCohortsResponse,
} from "@/types/apiResponses";
import { ICreateCohortRequest } from "@/types/apiRequests";
import { queryClient, queryKeys } from "@/data/constants";

const useCreateCohort = () => {
  return useMutation(createCohort);
};

export const useGetAllCohorts = () => {
  const getAllCohorts = async (pageNo: 1) => {
    let response = await getCohorts(pageNo);
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
    [queryKeys.getCohorts],
    ({ pageParam = 1 }) => getAllCohorts(pageParam),
    {
      getNextPageParam: (lastPage, pages) => {
        // console.log("lastpage", lastPage, "pages", pages);
        return lastPage?.length !== 0 ? pages.length + 1 : null;
      },
    },
  );

  const allCohorts: IGetCohortsResponse[] = [];
  data?.pages &&
    Array.isArray(data?.pages) &&
    data?.pages?.map(page =>
      page?.map((el: IGetCohortsResponse) => allCohorts.push(el)),
    );

  return {
    allCohorts,
    status,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};

export const useAdminCohort = () => {
  const schema = z.object({
    name: string(),
    description: string(),
    startDate: string(),
    endDate: string(),
    mentors: number().array(),
    panelists: number().array(),
    teams: number().array().optional(),
  });

  const { mutate, isLoading } = useCreateCohort();

  const onSuccess = (data: ICreateCohortResponse | string) => {
    console.log("on success data cohorts", data);
    queryClient.invalidateQueries([queryKeys.getCohorts]);
  };

  const onError = () => {};

  const onSubmit: SubmitHandler<AddCohortFormValues> = data => {
    console.log("data form cohort", data);

    const formData: ICreateCohortRequest = {
      cohort_name: data?.name,
      cohort_description: data?.description,
      teamIds: data?.teams ?? [],
      mentorIds: data?.mentors,
      panelistIds: data?.panelists,
      start_date: data?.startDate,
      end_date: data?.endDate,
    };

    mutate(formData, { onSuccess, onError });
  };

  return { schema, onSubmit, isLoading };
};
