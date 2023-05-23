import { ADMIN_LOGIN_API, GET_ALL_ADMIN_API } from "@/data/constants";
import { usersHttpClient } from "@/service/httpClients";
import { IAdminLoginRequest } from "@/types/apiRequests";
import {
  IGetAllUsersResponse,
  IStatusWithData,
  User,
} from "@/types/apiResponses";
import { toast } from "react-hot-toast";

export const adminLogin = async (body: IAdminLoginRequest) => {
  try {
    const response = await usersHttpClient.post(ADMIN_LOGIN_API, body);
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

type GetAllAdminType = () => Promise<IGetAllUsersResponse[] | string>;

export const getAllAdmin: GetAllAdminType = async () => {
  try {
    const response: Awaited<IStatusWithData<IGetAllUsersResponse[]>> =
      await usersHttpClient(GET_ALL_ADMIN_API);
    const { status, data } = response;
    if (typeof response !== "undefined")
      if (status === 200 || status === 201) {
        return data;
      } else {
        toast.error("An error occured, Please try again");
        return "An error occured";
      }
    else {
      return "An error occured";
    }
  } catch (err: any) {
    err?.response?.data?.message
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};
