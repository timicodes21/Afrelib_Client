import {
  CREATE_WEEKLY_UPDATES,
  POST_SUPPORT,
  VIEW_SUPPORT,
} from "@/data/constants";
import { usersHttpClient } from "@/service/httpClients";
import { IPostSupportRequest } from "@/types/apiRequests";
import {
  IGetSupportResponse,
  IPostSupportResponse,
  IStatusWithData,
} from "@/types/apiResponses";
import { toast } from "react-hot-toast";

export const postSupport: (
  body: IPostSupportRequest,
) => Promise<IPostSupportResponse | string> = async body => {
  try {
    const response: Awaited<IStatusWithData<IPostSupportResponse>> =
      await usersHttpClient(VIEW_SUPPORT);
    const { status, data } = response;
    if (typeof response !== "undefined")
      if (status === 200 || status === 201) {
        toast.success(data?.Success);
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

export const viewSupport: () => Promise<
  IGetSupportResponse[] | string
> = async () => {
  try {
    const response: Awaited<IStatusWithData<IGetSupportResponse[]>> =
      await usersHttpClient(VIEW_SUPPORT);
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
