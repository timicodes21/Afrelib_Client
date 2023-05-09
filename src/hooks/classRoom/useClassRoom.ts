import { createTeamProject, getTeamProjects } from "@/api/projects";
import { queryClient, queryKeys } from "@/data/constants";
import { IGetTeamProjectsResponse } from "@/types/apiResponses";
import { useMutation, useQuery } from "@tanstack/react-query";
import { z, string, number } from "zod";
import { SubmitHandler } from "react-hook-form/dist/types";
import { useState } from "react";
import { createSubmission } from "@/api/submission";
import {
  AddProjectFormValues,
  CreateSubmissionFormValues,
} from "@/types/formValues";
import {
  ICreateProjectRequest,
  ICreateSubmissionRequest,
} from "@/types/apiRequests";
import { useGlobalContext } from "@/contexts/GlobalContext";

// get all projects in a team
export const useGetTeamProjects = (teamId: number, enabled: boolean) => {
  const { data, isFetching, status } = useQuery<
    IGetTeamProjectsResponse | string
  >([queryKeys.getTeamProjects, teamId], () => getTeamProjects(teamId), {
    // this query would only run when enabled is true
    enabled,
  });

  return { data, isFetching, status };
};

export const useClassRoom = () => {
  const [fileSelected, setFileSelected] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoadingAdd, setIsLoadingAdd] = useState(false);
  const {
    userDetails: { userId, teamId, cohortId },
  } = useGlobalContext();
  const [option, setOption] = useState<"projectDetails" | "addProject">(
    "projectDetails",
  );

  const schema = z.object({
    submission_title: string(),
    submitted_file: string(),
    submitted_url: string(),
    week_number: string(),
    submission_comment: string(),
  });

  const addProjectSchema = z.object({
    project_title: string(),
    project_description: string(),
  });

  const onSubmit = async (
    data: CreateSubmissionFormValues,
    projectId: number,
  ) => {
    setLoading(true);
    const submissionData: ICreateSubmissionRequest = {
      project_id: projectId,
      submitted_by: userId ?? 0,
      submission_title: data?.submission_title,
      submitted_file: data?.submitted_file,
      submitted_url: data?.submitted_url,
      week_number: Number(data?.week_number),
      submission_comment: data?.submission_comment,
    };

    const response = await createSubmission(submissionData, projectId);

    setLoading(false);
  };

  const onSubmitAddProject = async (
    data: AddProjectFormValues,
    callBack: () => void,
  ) => {
    setIsLoadingAdd(true);

    const formData: ICreateProjectRequest = {
      project_description: data?.project_description,
      project_title: data?.project_title,
      team_id: teamId ?? 0,
      cohort_id: cohortId ?? "",
    };

    const response = await createTeamProject(formData);

    if (typeof response === "object" && response?.created_at) {
      queryClient.invalidateQueries([queryKeys.getTeamProjects, teamId]);
      callBack();
    }
    setIsLoadingAdd(false);
  };

  return {
    schema,
    fileSelected,
    setFileSelected,
    url,
    setUrl,
    onSubmit,
    loading,
    option,
    setOption,
    addProjectSchema,
    onSubmitAddProject,
    isLoadingAdd,
  };
};
