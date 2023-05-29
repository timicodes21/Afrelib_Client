import {
  CREATE_GROUP_CHAT_API,
  GET_USER_GROUP_CHATS_API,
  GET_ALL_CHAT_MESSAGES,
  SEND_CHAT_MESSAGE,
  REMOVE_CHAT_MEMBER,
  GET_ALL_CHAT_MEMBERS,
  READ_UNREAD_CHAT_MESSAGES,
  ADD_CHAT_MEMBER,
  GET_UNREAD_MESSAGES,
} from "@/data/constants";
import { usersHttpClient } from "@/service/httpClients";
import {
  ICreateGroupChatRequest,
  ISendMessageRequest,
} from "@/types/apiRequests";
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

export const getAllUserGroupChats = async (userId: number | string) => {
  try {
    const response = await usersHttpClient(GET_USER_GROUP_CHATS_API(userId));
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

export const getAllChatMessages = async (chatId: number | string) => {
  try {
    const response = await usersHttpClient(GET_ALL_CHAT_MESSAGES(chatId));
    //console.log(response);
    const { status, data } = response;
    if (typeof response !== "undefined")
      if (status === 200 || status === 201) {
        return data;
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

export const getUnreadMessages = async (chatId: number | string) => {
  try {
    const response = await usersHttpClient(GET_UNREAD_MESSAGES(chatId));
    //console.log(response);
    const { status, data } = response;
    if (typeof response !== "undefined")
      if (status === 200 || status === 201) {
        return data;
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

export const getAllChatMembers = async (chatId: number | string) => {
  try {
    const response = await usersHttpClient(GET_ALL_CHAT_MEMBERS(chatId));
    //console.log(response);
    const { status, data } = response;
    if (typeof response !== "undefined")
      if (status === 200 || status === 201 || status === 202) {
        return data[0];
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

export const sendChatMessage = async (
  body: ISendMessageRequest,
  chatId: string | number,
) => {
  try {
    const response = await usersHttpClient.post(
      SEND_CHAT_MESSAGE(chatId),
      body,
    );
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
    console.log(err);
    err?.response?.data?.message
      ? toast.error(err?.response?.data?.message)
      : toast.error("An Error Occured, Please try again later");
    return "An error occured";
  }
};

export const removeChatMember = async (
  userId: string | number,
  chatId: string | number,
) => {
  try {
    const response = await usersHttpClient.delete(
      REMOVE_CHAT_MEMBER(userId, chatId),
    );
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

export const readUnreadMessages = async (
  userId: string | number,
  chatId: string | number,
) => {
  try {
    const response = await usersHttpClient.get(
      READ_UNREAD_CHAT_MESSAGES(userId, chatId),
    );
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
