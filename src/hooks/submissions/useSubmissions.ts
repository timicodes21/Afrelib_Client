import { getSingleSubmission } from "@/api/submission";
import { queryKeys } from "@/data/constants";
import { IGetSingleSubmissionResponse } from "@/types/apiResponses";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const useGetSingleSubmissions = (
  submissionId: number,
  enabled?: boolean,
) => {
  const { data, isFetching, status } = useQuery<
    IGetSingleSubmissionResponse | string
  >(
    [queryKeys.getSingleSubmission, submissionId],
    () => getSingleSubmission(submissionId),
    {
      enabled,
    },
  );

  return { data, isFetching, status };
};
