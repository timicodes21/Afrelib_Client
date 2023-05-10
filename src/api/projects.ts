import {
  CREATE_TEAM_PROJECT,
  EDIT_TEAM_PROJECT,
  GET_ALL_PROJECTS,
  GET_COHORT_PROJECT,
  GET_PROJECTS_UNDER_PANELISTS,
  GET_TEAM_PROJECTS,
} from "@/data/constants";
import { coreHttpClient } from "@/service/httpClients";
import {
  ICreateProjectRequest,
  IEditProjectRequest,
} from "@/types/apiRequests";
import {
  ICreateProjectResponse,
  IGetAllProjectsResponse,
  IGetCohortProjectResponse,
  IGetProjectsUnderPanelistsResponse,
  IGetTeamProjectsResponse,
  IResponseMessageWithData,
  IStatusWithData,
} from "@/types/apiResponses";
import { toast } from "react-hot-toast";

export const getAllProjects: () => Promise<
  IGetAllProjectsResponse | string
> = async () => {
  try {
    const response: Awaited<
      IStatusWithData<IResponseMessageWithData<IGetAllProjectsResponse>>
    > = await coreHttpClient(GET_ALL_PROJECTS);

    const {
      status,
      data: { message, responseData },
    } = response;
    if (typeof response !== "undefined")
      if (status === 200 || status === 201) {
        toast.success(message);
        return responseData;
      } else {
        toast.error(message);
        return message;
      }
    else {
      return "An error occured";
    }
  } catch (err: any) {
    err?.response?.data?.message
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};

export const createTeamProject: (
  body: ICreateProjectRequest,
) => Promise<ICreateProjectResponse | string> = async body => {
  try {
    const response: Awaited<
      IStatusWithData<IResponseMessageWithData<ICreateProjectResponse>>
    > = await coreHttpClient.post(CREATE_TEAM_PROJECT, body);

    const {
      status,
      data: { message, responseData },
    } = response;
    if (typeof response !== "undefined")
      if (status === 200 || status === 201) {
        toast.success(message);
        return responseData;
      } else {
        toast.error(message);
        return message;
      }
    else {
      return "An error occured";
    }
  } catch (err: any) {
    err?.response?.data?.message
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};

export const editTeamProject: (
  body: IEditProjectRequest,
  projectId: number,
) => Promise<ICreateProjectResponse | string> = async (body, projectId) => {
  try {
    const response: Awaited<
      IStatusWithData<IResponseMessageWithData<ICreateProjectResponse>>
    > = await coreHttpClient.put(EDIT_TEAM_PROJECT(projectId), body);

    const {
      status,
      data: { message, responseData },
    } = response;
    if (typeof response !== "undefined")
      if (status === 200 || status === 201) {
        toast.success(message);
        return responseData;
      } else {
        toast.error(message);
        return message;
      }
    else {
      return "An error occured";
    }
  } catch (err: any) {
    err?.response?.data?.message
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};

export const getCohortProject: (
  cohortId: string,
) => Promise<IGetCohortProjectResponse | string> = async cohortId => {
  try {
    const response: Awaited<
      IStatusWithData<IResponseMessageWithData<IGetCohortProjectResponse>>
    > = await coreHttpClient(GET_COHORT_PROJECT(cohortId));

    const {
      status,
      data: { message, responseData },
    } = response;
    if (typeof response !== "undefined")
      if (status === 200 || status === 201) {
        toast.success(message);
        return responseData;
      } else {
        toast.error(message);
        return message;
      }
    else {
      return "An error occured";
    }
  } catch (err: any) {
    err?.response?.data?.message
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};

export const getProjectsUnderPanelists: () => Promise<
  IGetProjectsUnderPanelistsResponse | string
> = async () => {
  try {
    const response: Awaited<
      IStatusWithData<
        IResponseMessageWithData<IGetProjectsUnderPanelistsResponse>
      >
    > = await coreHttpClient(GET_PROJECTS_UNDER_PANELISTS);

    const {
      status,
      data: { message, responseData },
    } = response;
    if (typeof response !== "undefined")
      if (status === 200 || status === 201) {
        toast.success(message);
        return responseData;
      } else {
        toast.error(message);
        return message;
      }
    else {
      return "An error occured";
    }
  } catch (err: any) {
    err?.response?.data?.message
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};

export const getTeamProjects: (
  teamId: number,
) => Promise<IGetTeamProjectsResponse | string> = async teamId => {
  try {
    const response: Awaited<
      IStatusWithData<IResponseMessageWithData<IGetTeamProjectsResponse>>
    > = await coreHttpClient(GET_TEAM_PROJECTS(teamId));

    const {
      status,
      data: { message, responseData },
    } = response;
    if (typeof response !== "undefined")
      if (status === 200 || status === 201) {
        toast.success(message);
        return responseData;
      } else {
        toast.error(message);
        return message;
      }
    else {
      return "An error occured";
    }
  } catch (err: any) {
    err?.response?.data?.message
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};
