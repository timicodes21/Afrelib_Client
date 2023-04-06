import { GET_ROLES_API } from "@/data/constants";
import { usersHttpClient } from "@/service/httpClients";
import { toast } from "react-hot-toast";

export const getRoles = async () => {
  try {
    const response = await usersHttpClient(GET_ROLES_API);
    console.log("Get roles response", response);
    const { status, data } = response;
    if (typeof response !== "undefined")
      if (status === 200 || status === 201) {
        toast.success("Roles Loaded successfully");
        return data;
      } else {
        toast.error("Roles not Loaded");
        return "Roles not Loaded";
      }
  } catch (err: any) {
    console.log("error", err);
    err?.response?.data?.message
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};
