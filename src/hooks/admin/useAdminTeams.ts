import { useState } from "react";
import { z, string, number } from "zod";
import { SubmitHandler } from "react-hook-form/dist/types";
import { AddCohortFormValues, AddTeamFormValues } from "@/types/formValues";
import { useInfiniteQuery, useMutation } from "@tanstack/react-query";
import { createCohort, getCohorts } from "@/api/cohorts";
import {
  ICreateCohortResponse,
  IGetCohortsResponse,
} from "@/types/apiResponses";
import { ICreateCohortRequest } from "@/types/apiRequests";
import { queryClient, queryKeys } from "@/data/constants";

export const useAdminTeams = () => {
  const schema = z.object({
    name: string(),
    description: string(),
    students: number().array(),
    mentor: number(),
  });

  const onSuccess = (data: ICreateCohortResponse | string) => {
    console.log("on success data cohorts", data);
    queryClient.invalidateQueries([queryKeys.getCohorts]);
  };

  const onError = () => {};

  const onSubmit: SubmitHandler<AddTeamFormValues> = data => {
    console.log("data form cohort", data);
  };

  return { schema, onSubmit };
};
