import { useState } from "react";
import { z, string, number } from "zod";
import { SubmitHandler } from "react-hook-form/dist/types";
import { AddMentorFormValues, AddTeamFormValues } from "@/types/formValues";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import {
  ICreateCohortResponse,
  IGetSingleTeamResponse,
  IGetTeamsResponse,
  ITeamRespons,
  IUpdateMentorResponse,
} from "@/types/apiResponses";
import { queryClient, queryKeys } from "@/data/constants";
import {
  createTeam,
  deleteTeam,
  getSingleTeam,
  getTeams,
  updateTeamMentor,
} from "@/api/team";
import { ICreateTeamRequest, IUpdateMentorRequest } from "@/types/apiRequests";
import { addTeamGroupChat } from "@/api/chatsTeamsAndCohorts";
import { toast } from "react-hot-toast";

// const useUpdateTeamMentor = () => {
//   return useMutation(updateTeamMentor);
// };

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
        return lastPage?.length !== 0 ? pages.length + 1 : null;
      },
    },
  );

  const allTeams: IGetTeamsResponse[] = [];
  data?.pages &&
    Array.isArray(data?.pages) &&
    data?.pages?.map(
      page =>
        page &&
        Array.isArray(data?.pages) &&
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

export const useGetSingleTeam = (teamId: number, enabled: boolean) => {
  const { data, isFetching, status } = useQuery<IGetSingleTeamResponse>(
    [queryKeys.getSingleTeam],
    () => getSingleTeam(teamId),
    {
      enabled,
    },
  );

  return { data, isFetching, status };
};

export const useAdminTeams = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [team, setTeam] = useState<IGetTeamsResponse>();
  const [option, setOption] = useState<"addTeam" | "addMentor">("addTeam");

  const schema = z.object({
    name: string(),
    description: string(),
    students: number().array(),
    mentor: number(),
    // cohort: string(),
  });

  const schemaUpdateMentor = z.object({
    mentorId: number({ invalid_type_error: "Please select a mentor" }).min(1, {
      message: "Please select a mentor",
    }),
  });

  const onSuccessDelete = (data: string) => {
    queryClient.invalidateQueries([queryKeys.getTeams]);
  };

  const onError = () => {
    queryClient.invalidateQueries([queryKeys.getTeams]);
    setIsLoading(false);
  };

  const onSubmit = async (data: AddTeamFormValues, closeModal: () => void) => {
    const formData: ICreateTeamRequest = {
      team_name: data?.name,
      team_description: data?.description,
      studentIds: data?.students,
      mentorId: data?.mentor,
    };

    setIsLoading(true);

    const response = await createTeam(formData);

    if (response?.team_id) {
      const studentsStringId = data?.students?.map(id => id.toString());
      await addTeamGroupChat({
        team_id: response?.id,
        participants: [...studentsStringId, data?.mentor.toString()],
      });
      queryClient.invalidateQueries([queryKeys.getTeams]);
      closeModal();
      setIsLoading(false);
      return;
    } else {
      setIsLoading(false);
      toast.error(
        typeof response === "string"
          ? response
          : "An error occured, Please try again",
      );
      closeModal();
      return;
    }

    setIsLoading(false);
  };

  const onSubmitDelete = async () => {
    setIsLoadingDelete(true);

    const response = await deleteTeam(team?.id ?? 0);

    response === "Team Deleted Successfully"
      ? onSuccessDelete(response)
      : () => {};

    setIsLoadingDelete(false);
  };

  const { mutate, isLoading: isLoadingMentor } = useMutation({
    mutationFn: ({
      teamId,
      body,
    }: {
      teamId: number;
      body: IUpdateMentorRequest;
    }) => updateTeamMentor(teamId, body),
  });

  const onSuccessUpdate = (data: IUpdateMentorResponse | string) => {
    queryClient.invalidateQueries([queryKeys.getTeams]);
  };

  const validateMentorForm: SubmitHandler<AddMentorFormValues> = data => {
    return;
  };

  const onSubmitUpdateMentor = (teamId: number, mentorId: number) => {
    const formData: IUpdateMentorRequest = {
      mentorId: mentorId,
    };

    mutate(
      { teamId: teamId ?? 0, body: formData },
      { onSuccess: onSuccessUpdate, onError },
    );
  };

  return {
    schema,
    onSubmit,
    isLoading,
    onSubmitDelete,
    isLoadingDelete,
    team,
    setTeam,
    option,
    setOption,
    schemaUpdateMentor,
    onSubmitUpdateMentor,
    isLoadingMentor,
    validateMentorForm,
  };
};
