import {
  ADD_COHORT_GROUPCHAT,
  ADD_TEAM_MEMBERS_GROUPCHAT,
} from "@/data/constants";
import { usersHttpClient } from "@/service/httpClients";
import { ICreateTeamGroupChatRequest } from "@/types/apiRequests";
import {
  IGetWeeklyUpdatesResponse,
  IStatusWithData,
} from "@/types/apiResponses";
import { toast } from "react-hot-toast";

export const addTeamGroupChat: (
  body: ICreateTeamGroupChatRequest,
) => Promise<IGetWeeklyUpdatesResponse | string> = async body => {
  try {
    const response: Awaited<IStatusWithData<IGetWeeklyUpdatesResponse>> =
      await usersHttpClient.post(ADD_TEAM_MEMBERS_GROUPCHAT, body);
    // console.log("response group chat", response);
    const { status, data } = response;
    if (typeof response !== "undefined")
      if (status === 200 || status === 201) {
        return data;
      } else {
        return "";
      }
    else {
      return "Error";
    }
  } catch (err: any) {
    // console.log("error group chat", err);
    err?.response?.data?.message
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};

export const addCohortToChat: (
  cohortId: string,
) => Promise<IGetWeeklyUpdatesResponse | string> = async cohortId => {
  try {
    const response: Awaited<IStatusWithData<IGetWeeklyUpdatesResponse>> =
      await usersHttpClient.post(ADD_COHORT_GROUPCHAT(cohortId));
    // console.log("response group chat", response);
    const { status, data } = response;
    if (typeof response !== "undefined")
      if (status === 200 || status === 201) {
        return data;
      } else {
        return "";
      }
    else {
      return "Error";
    }
  } catch (err: any) {
    // console.log("error group chat", err);
    err?.response?.data?.message
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};
