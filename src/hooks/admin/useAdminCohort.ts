import { useState } from "react";
import { z, string, number } from "zod";
import { SubmitHandler } from "react-hook-form/dist/types";
import {
  AddCohortFormValues,
  AssignPanelistsFormValues,
  UpdateCohortFormValues,
} from "@/types/formValues";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import {
  assignPanelist,
  createCohort,
  deleteCohort,
  getCohorts,
  getSingleCohort,
  updateCohort,
} from "@/api/cohorts";
import {
  ICreateCohortResponse,
  IGetCohortsResponse,
  IGetSingleCohortResponse,
} from "@/types/apiResponses";
import {
  IAssignPanelistsRequest,
  ICreateCohortRequest,
  IUpdateCohorRequest,
} from "@/types/apiRequests";
import { queryClient, queryKeys } from "@/data/constants";
import { getSingleTeam } from "@/api/team";
import { addCohortToChat } from "@/api/chatsTeamsAndCohorts";

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
        return lastPage?.length !== 0 ? pages.length + 1 : null;
      },
    },
  );

  const allCohorts: IGetCohortsResponse[] = [];
  data?.pages &&
    Array.isArray(data?.pages) &&
    data?.pages?.map(
      page =>
        page &&
        Array.isArray(page) &&
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

export const useGetSingleCohort = (cohortId: string, enabled: boolean) => {
  const { data, isFetching, status } = useQuery<IGetSingleCohortResponse>(
    [queryKeys.getSingleCohort],
    () => getSingleCohort(cohortId),
    {
      enabled,
    },
  );

  return { data, isFetching, status };
};

export const useAdminCohort = () => {
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [cohort, setCohort] = useState<IGetCohortsResponse>();
  // Options of which item to display when modal is opened
  const [option, setOption] = useState<
    "addCohort" | "assignPanelists" | "updateCohort"
  >("addCohort");
  const [detailsOptions, setDetailsOptions] = useState<
    "viewTeams" | "viewPanelists" | "viewStudents" | "viewMentors" | ""
  >("");
  const [panelistIds, setPanelistIds] = useState<number[]>([]);

  // Schemas for React Hook form
  const schema = z.object({
    name: string(),
    description: string(),
    startDate: string(),
    endDate: string(),
    mentors: number().array(),
    panelists: number().array(),
    teams: number().array().optional(),
  });

  const schemaAssign = z.object({
    panelist_ids: number().array().optional(),
  });

  const schemaUpdate = z.object({
    name: string(),
    description: string(),
  });

  // Create cohort submit function
  const { mutate, isLoading } = useCreateCohort();

  const onError = () => {};

  const onSubmit = (data: AddCohortFormValues, closeModal: () => void) => {
    const formData: ICreateCohortRequest = {
      cohort_name: data?.name,
      cohort_description: data?.description,
      teamIds: data?.teams ?? [],
      mentorIds: data?.mentors,
      panelistIds: data?.panelists,
      start_date: data?.startDate,
      end_date: data?.endDate,
    };

    mutate(formData, {
      onSuccess: async (data: ICreateCohortResponse) => {
        if (data?.cohort_name) {
          await addCohortToChat(data?.cohort_id);
        }
        queryClient.invalidateQueries([queryKeys.getCohorts]);
        closeModal();
      },
      onError: () => {
        closeModal();
      },
    });
  };

  // Delete cohort submit function
  const onSuccessDelete = (data: string) => {
    queryClient.invalidateQueries([queryKeys.getCohorts]);
  };

  const onSubmitDelete = async () => {
    setIsLoadingDelete(true);

    const response = await deleteCohort(cohort?.cohort_id ?? "");

    response === "Cohort Deleted Successfully"
      ? onSuccessDelete(response)
      : () => {};

    setIsLoadingDelete(false);
  };

  // Assign cohort submit function
  const { mutate: mutateAssign, isLoading: isLoadingAssign } = useMutation({
    mutationFn: ({
      cohortId,
      body,
    }: {
      cohortId: string;
      body: IAssignPanelistsRequest;
    }) => assignPanelist(cohortId, body),
  });

  const onSuccessAssign = (data: string) => {
    queryClient.invalidateQueries([queryKeys.getCohorts]);
  };

  const onSubmitAssign = (cohortId: string, panelistsIds: number[]) => {
    const formData: IAssignPanelistsRequest = {
      panelist_ids: panelistsIds,
    };

    mutateAssign(
      { cohortId: cohortId ?? "", body: formData },
      { onSuccess: onSuccessAssign, onError },
    );
  };

  // Update cohort submit function
  const { mutate: mutateUpdate, isLoading: isLoadingUpdate } = useMutation({
    mutationFn: ({
      cohortId,
      body,
    }: {
      cohortId: string;
      body: IUpdateCohorRequest;
    }) => updateCohort(cohortId, body),
  });

  const onSubmitUpdate = (data: UpdateCohortFormValues, cohortId: string) => {
    const formData: IUpdateCohorRequest = {
      cohort_name: data?.name,
      cohort_description: data?.description,
    };

    mutateUpdate(
      { cohortId: cohortId ?? "", body: formData },
      { onSuccess: onSuccessAssign, onError },
    );
  };

  return {
    schema,
    onSubmit,
    isLoading,
    isLoadingDelete,
    onSubmitDelete,
    setCohort,
    cohort,
    option,
    setOption,
    schemaAssign,
    onSubmitAssign,
    isLoadingAssign,
    panelistIds,
    setPanelistIds,
    schemaUpdate,
    onSubmitUpdate,
    isLoadingUpdate,
    detailsOptions,
    setDetailsOptions,
  };
};
