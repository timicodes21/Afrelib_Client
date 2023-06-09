import {
  CREATE_TEAM_API,
  CREATE_TEAM__WITHOUT_COHORT_API,
  DELETE_TEAM_API,
  GET_SINGLE_TEAM_API,
  GET_TEAMS_API,
  UPDATE_TEAM_MENTOR,
} from "@/data/constants";
import { coreHttpClient } from "@/service/httpClients";
import { ICreateTeamRequest, IUpdateMentorRequest } from "@/types/apiRequests";
import { toast } from "react-hot-toast";

export const createTeam = async (body: ICreateTeamRequest) => {
  try {
    const response = await coreHttpClient.post(
      CREATE_TEAM__WITHOUT_COHORT_API,
      body,
    );
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
  } catch (err: any) {
    err?.response?.data?.message
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};

export const getTeams = async (page: number) => {
  try {
    const response = await coreHttpClient(GET_TEAMS_API(page));

    const { status, data } = response;
    if (typeof response !== "undefined")
      if (status === 200 || status === 201) {
        return data?.data;
      } else {
        toast.error(data?.message);
        return data?.responseData;
      }
  } catch (err: any) {
    err?.response?.data?.message
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};

export const getSingleTeam = async (teamId: number) => {
  try {
    const response = await coreHttpClient(GET_SINGLE_TEAM_API(teamId));

    const { status, data } = response;
    if (typeof response !== "undefined")
      if (status === 200 || status === 201) {
        return data?.responseData;
      } else {
        toast.error(data?.message);
        return data?.message;
      }
  } catch (err: any) {
    err?.response?.data?.message
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};

export const deleteTeam = async (teamId: number) => {
  try {
    const response = await coreHttpClient.delete(DELETE_TEAM_API(teamId));
    const {
      status,
      data: { message },
    } = response;
    if (typeof response !== "undefined")
      if (status === 200 || status === 201) {
        toast.success(message);
        return message;
      } else {
        toast.error(message);
        return message;
      }
  } catch (err: any) {
    err?.response?.data?.message
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};

export const updateTeamMentor = async (
  teamId: number,
  body: IUpdateMentorRequest,
) => {
  try {
    const response = await coreHttpClient.put(UPDATE_TEAM_MENTOR(teamId), body);
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
  } catch (err: any) {
    err?.response?.data?.message
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};
