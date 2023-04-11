import {
  CREATE_COHORT_API,
  DELETE_COHORT_API,
  GET_COHORTS_API,
} from "@/data/constants";
import { coreHttpClient } from "@/service/httpClients";
import { ICreateCohortRequest } from "@/types/apiRequests";
import { toast } from "react-hot-toast";

export const createCohort = async (body: ICreateCohortRequest) => {
  try {
    const response = await coreHttpClient.post(CREATE_COHORT_API, body);
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

export const getCohorts = async (page: number) => {
  try {
    const response = await coreHttpClient(GET_COHORTS_API(page));

    const { status, data } = response;
    if (typeof response !== "undefined")
      if (status === 200 || status === 201) {
        toast.success("All Cohorts");
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

export const deleteCohort = async (cohortId: string) => {
  try {
    const response = await coreHttpClient.delete(DELETE_COHORT_API(cohortId));
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
