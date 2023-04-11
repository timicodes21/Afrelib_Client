import {
  CREATE_TEAM_API,
  DELETE_TEAM_API,
  GET_TEAMS_API,
} from "@/data/constants";
import { coreHttpClient } from "@/service/httpClients";
import { ICreateTeamRequest } from "@/types/apiRequests";
import { toast } from "react-hot-toast";

export const createTeam = async (
  body: ICreateTeamRequest,
  cohortId: string,
) => {
  try {
    const response = await coreHttpClient.post(CREATE_TEAM_API(cohortId), body);
    console.log("create COHORT response", response);
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
    console.log("error", err);
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
        return data?.message;
      }
  } catch (err: any) {
    console.log("error", err);
    err?.response?.data?.message
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};

export const deleteTeam = async (teamId: number) => {
  try {
    const response = await coreHttpClient.delete(DELETE_TEAM_API(teamId));
    console.log("DELETE COHORT response", response);
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
    console.log("error", err);
    err?.response?.data?.message
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};
