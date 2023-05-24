import {
  CREATE_USER_API,
  ENABLE_DISABLE_USER_API,
  GET_ALL_USERS_API,
  GET_MENTOR_MENTEES,
  GET_STUDENTS_NOT_IN_TEAM,
  LOGIN_USER_API,
  UPDATE_USER_DETAILS,
  CHANGE_USER_PASSWORD,
  RESET_USER_PASSWORD,
  GET_LOGGED_IN_USER,
} from "@/data/constants";
import { usersHttpClient } from "@/service/httpClients";
import {
  IChangePasswordRequest,
  ICreateUserRequest,
  IUserLoginRequest,
  IUpdateUserDetailsRequest,
} from "@/types/apiRequests";
import {
  IGetMentorMenteesResponse,
  IGetWeeklyUpdatesResponse,
  IResponseMessageWithData,
  IStatusWithData,
  UserDetails,
} from "@/types/apiResponses";
import { toast } from "react-hot-toast";

export const createUser = async (body: ICreateUserRequest) => {
  try {
    const response = await usersHttpClient.post(CREATE_USER_API, body);
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

export const loginUser = async (body: IUserLoginRequest) => {
  try {
    const response = await usersHttpClient.post(LOGIN_USER_API, body);
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

export const changeUserPassword = async (body: IChangePasswordRequest) => {
  try {
    const response = await usersHttpClient.put(CHANGE_USER_PASSWORD, body);
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

export const updateUserDetails = async (body: IUpdateUserDetailsRequest) => {
  try {
    const response = await usersHttpClient.put(UPDATE_USER_DETAILS, body);
    //console.log(response);
    const {
      status,
      data: { message, data },
    } = response;
    if (typeof response !== "undefined")
      if (status === 200 || status === 201) {
        toast.success(message);
        return data;
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

export const getLoggedInUser = async () => {
  try {
    const response = await usersHttpClient.get(GET_LOGGED_IN_USER);
    //console.log(response);
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

export const getAllusers = async (page: number) => {
  try {
    const response = await usersHttpClient(GET_ALL_USERS_API(page));
    const { status, data } = response;
    if (typeof response !== "undefined")
      if (status === 200 || status === 201) {
        return data?.data;
      } else {
        toast.error(data?.message);
        return data?.message;
      }
  } catch (err: any) {
    err?.response?.data?.message
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};

export const getStudensNotInTeam = async () => {
  try {
    const response = await usersHttpClient(GET_STUDENTS_NOT_IN_TEAM);
    const { status, data } = response;
    if (typeof response !== "undefined")
      if (status === 200 || status === 201) {
        return data?.responseData;
      } else {
        toast.error(data?.message);
        return data?.message;
      }
  } catch (err: any) {
    err?.response?.data?.message
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};

export const enableOrDisableUser = async (
  type: "enable" | "disable",
  userId: number,
) => {
  try {
    const response = await usersHttpClient.patch(
      ENABLE_DISABLE_USER_API({ userId, type }),
    );
    const { status, data } = response;
    if (typeof response !== "undefined")
      if (status === 200 || status === 201) {
        toast.success(data?.message ?? "Successful");

        return data?.responseData;
      } else {
        toast.error(data?.message);
        return data?.message;
      }
  } catch (err: any) {
    err?.response?.data?.message
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};

export const getMentorMentees: (
  id: number,
) => Promise<IGetMentorMenteesResponse | string> = async id => {
  try {
    const response: Awaited<
      IStatusWithData<IResponseMessageWithData<IGetMentorMenteesResponse>>
    > = await usersHttpClient(GET_MENTOR_MENTEES(id));
    const { status, data } = response;
    if (typeof response !== "undefined")
      if (status === 200 || status === 201) {
        toast.success(data?.message);
        return data?.responseData;
      } else {
        return data?.message;
      }
    else {
      return "Error";
    }
  } catch (err: any) {
    typeof err?.response?.data?.message === "string"
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};

export const resetUserPassword: (
  id: number,
) => Promise<UserDetails | string> = async id => {
  try {
    const response: Awaited<
      IStatusWithData<IResponseMessageWithData<UserDetails>>
    > = await usersHttpClient.patch(RESET_USER_PASSWORD(id));
    const { status, data } = response;
    if (typeof response !== "undefined")
      if (status === 200 || status === 201) {
        toast.success(data?.message);
        return data?.responseData;
      } else {
        return data?.message;
      }
    else {
      return "Error";
    }
  } catch (err: any) {
    typeof err?.response?.data?.message === "string"
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};
