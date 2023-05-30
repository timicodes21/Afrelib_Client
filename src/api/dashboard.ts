import {
  GET_DASHBOARD_DETAILS_MENTOR,
  GET_DASHBOARD_DETAILS_PANELIST,
} from "./../data/constants";
import {
  GET_DASHBOARD_DETAILS_ADMIN,
  GET_DASHBOARD_DETAILS_STUDENT,
  GET_MENTOR_MENTEES,
} from "@/data/constants";
import { coreHttpClient } from "@/service/httpClients";
import {
  IGetAdminDashboardResponse,
  IGetMentorDashboardResponse,
  IGetPanelistDashboardResponse,
  IGetStudentDashboardResponse,
  IStatusWithData,
} from "@/types/apiResponses";
import { toast } from "react-hot-toast";

export const getDashboardDetailsAdmin: () => Promise<
  IGetAdminDashboardResponse | string
> = async () => {
  try {
    const response: Awaited<IStatusWithData<IGetAdminDashboardResponse>> =
      await coreHttpClient(GET_DASHBOARD_DETAILS_ADMIN);
    const { status, data } = response;
    if (typeof response !== "undefined")
      if (status === 200 || status === 201) {
        return data;
      } else {
        return "An error occured";
      }
    else {
      return "Error";
    }
  } catch (err: any) {
    typeof err?.response?.data?.message === "string"
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};

export const getDashboardDetailsStudent: () => Promise<
  IGetStudentDashboardResponse | string
> = async () => {
  try {
    const response: Awaited<IStatusWithData<IGetStudentDashboardResponse>> =
      await coreHttpClient(GET_DASHBOARD_DETAILS_STUDENT);
    const { status, data } = response;
    if (typeof response !== "undefined")
      if (status === 200 || status === 201) {
        return data;
      } else {
        return "An error occured";
      }
    else {
      return "Error";
    }
  } catch (err: any) {
    typeof err?.response?.data?.message === "string"
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};

export const getDashboardDetailsMentors: () => Promise<
  IGetMentorDashboardResponse | string
> = async () => {
  try {
    const response: Awaited<IStatusWithData<IGetMentorDashboardResponse>> =
      await coreHttpClient(GET_DASHBOARD_DETAILS_MENTOR);
    const { status, data } = response;
    if (typeof response !== "undefined")
      if (status === 200 || status === 201) {
        return data;
      } else {
        return "An error occured";
      }
    else {
      return "Error";
    }
  } catch (err: any) {
    typeof err?.response?.data?.message === "string"
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};

export const getDashboardDetailsPanelist: () => Promise<
  IGetPanelistDashboardResponse | string
> = async () => {
  try {
    const response: Awaited<IStatusWithData<IGetPanelistDashboardResponse>> =
      await coreHttpClient(GET_DASHBOARD_DETAILS_PANELIST);
    const { status, data } = response;
    if (typeof response !== "undefined")
      if (status === 200 || status === 201) {
        return data;
      } else {
        return "An error occured";
      }
    else {
      return "Error";
    }
  } catch (err: any) {
    typeof err?.response?.data?.message === "string"
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};
