import { ADMIN_LOGIN_API, UPLOAD_FILE } from "@/data/constants";
import { usersHttpClient } from "@/service/httpClients";
import {
  IGetFileResponse,
  IResponseMessageWithData,
  IStatusWithData,
} from "@/types/apiResponses";
import { toast } from "react-hot-toast";

export const uploadFile: (
  data: FormData,
  type: string,
) => Promise<IGetFileResponse | string> = async (data, type) => {
  try {
    const response: Awaited<
      IStatusWithData<IResponseMessageWithData<IGetFileResponse>>
    > = await usersHttpClient.post(UPLOAD_FILE(type), data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
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
      return "Error";
    }
  } catch (err: any) {
    err?.response?.data?.message
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};
