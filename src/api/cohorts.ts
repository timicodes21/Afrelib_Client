import {
  ASSIGN_PANELISTS_API,
  CREATE_COHORT_API,
  DELETE_COHORT_API,
  GET_COHORTS_API,
  GET_COHORT_DEADLINE_API,
  GET_EVALUATION_CRITERIA,
  GET_SINGLE_COHORT_API,
  GET_SINGLE_TEAM_API,
  UPDATE_COHORT_API,
  VIEW_SUPPORT,
} from "@/data/constants";
import { coreHttpClient, usersHttpClient } from "@/service/httpClients";
import {
  IAssignPanelistsRequest,
  ICreateCohortRequest,
  IUpdateCohorRequest,
} from "@/types/apiRequests";
import {
  ICohortDeadlineResponse,
  IGetSupportResponse,
  IResponseMessageWithData,
  IStatusWithData,
} from "@/types/apiResponses";
import { toast } from "react-hot-toast";

export const createCohort = async (body: ICreateCohortRequest) => {
  try {
    const response = await coreHttpClient.post(CREATE_COHORT_API, body);
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

export const getCohorts = async (page: number) => {
  try {
    const response = await coreHttpClient(GET_COHORTS_API(page));

    const { status, data } = response;
    if (typeof response !== "undefined")
      if (status === 200 || status === 201) {
        return data?.data;
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

export const deleteCohort = async (cohortId: string) => {
  try {
    const response = await coreHttpClient.delete(DELETE_COHORT_API(cohortId));
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

export const assignPanelist = async (
  cohortId: string,
  body: IAssignPanelistsRequest,
) => {
  try {
    const response = await coreHttpClient.put(
      ASSIGN_PANELISTS_API(cohortId),
      body,
    );

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

export const updateCohort = async (
  cohortId: string,
  body: IUpdateCohorRequest,
) => {
  try {
    const response = await coreHttpClient.put(
      UPDATE_COHORT_API(cohortId),
      body,
    );

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

export const getSingleCohort = async (cohortId: string) => {
  try {
    const response = await coreHttpClient(GET_SINGLE_COHORT_API(cohortId));

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

export const getCohortCriteria: (
  cohortId: string,
) => Promise<Array<IGetSupportResponse[]> | string> = async cohortId => {
  try {
    const response: Awaited<IStatusWithData<Array<IGetSupportResponse[]>>> =
      await usersHttpClient(GET_EVALUATION_CRITERIA(cohortId));
    const { status, data } = response;
    if (typeof response !== "undefined")
      if (status === 200 || status === 201) {
        return data;
      } else {
        toast.error("An error occured");
        return "An error occured";
      }
    else {
      toast.error("An error occured");
      return "Error";
    }
  } catch (err: any) {
    err?.response?.data?.message
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};

export const getCohortDeadlines: (
  cohortId: string,
) => Promise<ICohortDeadlineResponse[] | string> = async cohortId => {
  try {
    const response: Awaited<
      IStatusWithData<IResponseMessageWithData<ICohortDeadlineResponse[]>>
    > = await usersHttpClient(GET_COHORT_DEADLINE_API(cohortId));
    const { status, data } = response;
    if (typeof response !== "undefined")
      if (status === 200 || status === 201) {
        return data?.responseData;
      } else {
        toast.error("An error occured");
        return "An error occured";
      }
    else {
      toast.error("An error occured");
      return "Error";
    }
  } catch (err: any) {
    err?.response?.data?.message
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};
