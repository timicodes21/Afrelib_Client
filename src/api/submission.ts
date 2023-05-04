import { CREATE_COHORT_API, CREATE_SUBMISSION } from "@/data/constants";
import { coreHttpClient } from "@/service/httpClients";
import {
  ICreateCohortRequest,
  ICreateSubmissionRequest,
} from "@/types/apiRequests";
import {
  ICreateSubmissionResponse,
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
