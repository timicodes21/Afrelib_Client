import { ADMIN_LOGIN_API } from "@/data/constants";
import { usersHttpClient } from "@/service/httpClients";
import { IAdminLoginRequest } from "@/types/apiRequests";
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
