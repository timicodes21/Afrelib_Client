import {
  ADMIN_LOGIN_API,
  CREATE_WEEKLY_UPDATES,
  GET_WEEKLY_UPDATES,
  UPLOAD_FILE,
} from "@/data/constants";
import { usersHttpClient } from "@/service/httpClients";
import { ICreateUpdateRequest } from "@/types/apiRequests";
import {
  ICreateWeeklyUpdatesResponse,
  IGetWeeklyUpdatesResponse,
  IResponseMessageWithData,
  IStatusWithData,
} from "@/types/apiResponses";
import { toast } from "react-hot-toast";

export const getWeeklyUpdates: () => Promise<
  IGetWeeklyUpdatesResponse | string
> = async () => {
  try {
    const response: Awaited<IStatusWithData<IGetWeeklyUpdatesResponse>> =
      await usersHttpClient(GET_WEEKLY_UPDATES);
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
    err?.response?.data?.message
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};

export const createUpdate: (
  body: ICreateUpdateRequest,
) => Promise<ICreateWeeklyUpdatesResponse | string> = async body => {
  try {
    const response: Awaited<
      IStatusWithData<IResponseMessageWithData<ICreateWeeklyUpdatesResponse>>
    > = await usersHttpClient.post(CREATE_WEEKLY_UPDATES, body);
    const {
      status,
      data: { responseData, message },
    } = response;
    if (typeof response !== "undefined")
      if (status === 200 || status === 201) {
        toast.success(message);
        return responseData;
      } else {
        toast.error(message);
        return "";
      }
    else {
      toast.error(message);
      return "Error";
    }
  } catch (err: any) {
    err?.response?.data?.message
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};
