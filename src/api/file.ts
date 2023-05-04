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
) => Promise<IGetFileResponse | string> = async data => {
  try {
    const response: Awaited<
      IStatusWithData<IResponseMessageWithData<IGetFileResponse>>
    > = await usersHttpClient.post(UPLOAD_FILE, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("file api response", response);
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
    console.log("file api err", err);
    err?.response?.data?.message
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};
