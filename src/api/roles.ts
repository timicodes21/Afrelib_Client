import { GET_ROLES_API } from "@/data/constants";
import { usersHttpClient } from "@/service/httpClients";
import { IGetRolesResponse, IStatusWithData } from "@/types/apiResponses";
import { toast } from "react-hot-toast";

export const getRoles: () => Promise<
  IGetRolesResponse[] | string
> = async () => {
  try {
    const response: Awaited<IStatusWithData<IGetRolesResponse[]>> =
      await usersHttpClient(GET_ROLES_API);
    const { status, data } = response;
    if (typeof response !== "undefined")
      if (status === 200 || status === 201) {
        return data;
      } else {
        toast.error("Roles not Loaded");
        return "Roles not Loaded";
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
