import { CREATE_GROUP_CHAT_API } from "@/data/constants";
import { usersHttpClient } from "@/service/httpClients";
import { ICreateGroupChatRequest } from "@/types/apiRequests";
import { toast } from "react-hot-toast";

export const adminCreateGroupChat = async (body: ICreateGroupChatRequest) => {
  try {
    const response = await usersHttpClient.post(CREATE_GROUP_CHAT_API, body);
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

// export const loginUser = async (body: IUserLoginRequest) => {
//   try {
//     const response = await usersHttpClient.post(LOGIN_USER_API, body);
//     const {
//       status,
//       data: { message, responseData },
//     } = response;
//     if (typeof response !== "undefined")
//       if (status === 200 || status === 201) {
//         toast.success(message);
//         return responseData;
//       } else {
//         toast.error(message);
//         return message;
//       }
//   } catch (err: any) {
//     err?.response?.data?.message
//       ? toast.error(err?.response?.data?.message)
//       : toast.error("An Error Occured, Please try again later");
//     return "An error occured";
//   }
// };

// export const getAllusers = async (page: number) => {
//   try {
//     const response = await usersHttpClient(GET_ALL_USERS_API(page));
//     const { status, data } = response;
//     if (typeof response !== "undefined")
//       if (status === 200 || status === 201) {
//         return data?.data;
//       } else {
//         toast.error(data?.message);
//         return data?.message;
//       }
//   } catch (err: any) {
//     err?.response?.data?.message
//       ? toast.error(err?.response?.data?.message)
//       : toast.error("An Error Occured, Please try again later");
//     return "An error occured";
//   }
// };

// export const getStudensNotInTeam = async () => {
//   try {
//     const response = await usersHttpClient(GET_STUDENTS_NOT_IN_TEAM);
//     const { status, data } = response;
//     if (typeof response !== "undefined")
//       if (status === 200 || status === 201) {
//         return data?.responseData;
//       } else {
//         toast.error(data?.message);
//         return data?.message;
//       }
//   } catch (err: any) {
//     err?.response?.data?.message
//       ? toast.error(err?.response?.data?.message)
//       : toast.error("An Error Occured, Please try again later");
//     return "An error occured";
//   }
// };

// export const enableOrDisableUser = async (
//   type: "enable" | "disable",
//   userId: number,
// ) => {
//   try {
//     const response = await usersHttpClient.patch(
//       ENABLE_DISABLE_USER_API({ userId, type }),
//     );
//     const { status, data } = response;
//     if (typeof response !== "undefined")
//       if (status === 200 || status === 201) {
//         toast.success(data?.message ?? "Successful");

//         return data?.responseData;
//       } else {
//         toast.error(data?.message);
//         return data?.message;
//       }
//   } catch (err: any) {
//     err?.response?.data?.message
//       ? toast.error(err?.response?.data?.message)
//       : toast.error("An Error Occured, Please try again later");
//     return "An error occured";
//   }
// };
