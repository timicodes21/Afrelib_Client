import {
  GET_DASHBOARD_DETAILS_ADMIN,
  GET_DASHBOARD_DETAILS_STUDENT,
  GET_MENTOR_MENTEES,
} from "@/data/constants";
import { coreHttpClient } from "@/service/httpClients";
import {
  IGetAdminDashboardResponse,
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
