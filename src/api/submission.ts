import {
  CREATE_COHORT_API,
  CREATE_SUBMISSION,
  GET_PROJECT_PANELIST_SUBMISSION,
  GET_SINGLE_SUBMISSION,
  PANELIST_COMMENT_SUBMISSION,
  PANELIST_SCORE_SUBMISSION,
} from "@/data/constants";
import { coreHttpClient } from "@/service/httpClients";
import {
  ICommentSubmissionRequest,
  ICreateCohortRequest,
  ICreateSubmissionRequest,
  IScoreSubmissionRequest,
} from "@/types/apiRequests";
import {
  ICreateSubmissionResponse,
  IGetProjectPanelistSubmission,
  IGetSingleSubmissionResponse,
  IResponseMessageWithData,
  IStatusWithData,
} from "@/types/apiResponses";
import { toast } from "react-hot-toast";

export const createSubmission: (
  body: ICreateSubmissionRequest,
  projectId: number,
) => Promise<ICreateSubmissionResponse | string> = async (body, projectId) => {
  try {
    const response: Awaited<
      IStatusWithData<IResponseMessageWithData<ICreateSubmissionResponse>>
    > = await coreHttpClient.post(CREATE_SUBMISSION(projectId), body);
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
      return "";
    }
  } catch (err: any) {
    err?.response?.data?.message
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};

export const getProjectPanelistSubmission: (
  projectId: number,
) => Promise<IGetProjectPanelistSubmission | string> = async projectId => {
  try {
    const response: Awaited<
      IStatusWithData<IResponseMessageWithData<IGetProjectPanelistSubmission>>
    > = await coreHttpClient(GET_PROJECT_PANELIST_SUBMISSION(projectId));
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
      return "";
    }
  } catch (err: any) {
    err?.response?.data?.message
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};

export const getSingleSubmission: (
  submissionId: number,
) => Promise<IGetSingleSubmissionResponse | string> = async submissionId => {
  try {
    const response: Awaited<
      IStatusWithData<IResponseMessageWithData<IGetSingleSubmissionResponse>>
    > = await coreHttpClient(GET_SINGLE_SUBMISSION(submissionId));
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
      return "";
    }
  } catch (err: any) {
    err?.response?.data?.message
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};

export const panelistScoreSubmission = async (
  body: IScoreSubmissionRequest,
  submissionId: number,
) => {
  try {
    const response = await coreHttpClient.put(
      PANELIST_SCORE_SUBMISSION(submissionId),
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
    else {
      return "";
    }
  } catch (err: any) {
    err?.response?.data?.message
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};

export const panelistCommentSubmission = async (
  body: ICommentSubmissionRequest,
  submissionId: number,
) => {
  try {
    const response = await coreHttpClient.put(
      PANELIST_COMMENT_SUBMISSION(submissionId),
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
    else {
      return "";
    }
  } catch (err: any) {
    err?.response?.data?.message
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};
