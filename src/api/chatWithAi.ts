import {
  CHAT_AI_API,
  GET_CHAT_HISTORY,
  GET_COHORT_DEADLINE_API,
} from "@/data/constants";
import { usersHttpClient } from "@/service/httpClients";
import { IChatRequest } from "@/types/apiRequests";
import {
  IChatAiResponse,
  ICohortDeadlineResponse,
  IGetChatHistoryResponse,
  IResponseMessageWithData,
  IStatusWithData,
} from "@/types/apiResponses";
import { toast } from "react-hot-toast";

export const chatAiApi: (
  body: IChatRequest,
) => Promise<IChatAiResponse | string> = async body => {
  try {
    const response: Awaited<IStatusWithData<IChatAiResponse>> =
      await usersHttpClient.post(CHAT_AI_API, body);
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
    return typeof err?.response?.data?.message === "string"
      ? err?.response?.data?.message
      : "An error occured";
  }
};

export const getChatHistory: () => Promise<
  IGetChatHistoryResponse | string
> = async () => {
  try {
    const response: Awaited<
      IStatusWithData<IResponseMessageWithData<IGetChatHistoryResponse>>
    > = await usersHttpClient(GET_CHAT_HISTORY);
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
