import { useState } from "react";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import {
  getAllUserGroupChats,
  getAllChatMessages,
  sendChatMessage,
  removeChatMember,
  getAllChatMembers,
  readUnreadMessages,
} from "@/api/chats";
import {
  IGetChatMessagesResponse,
  IGetGroupChatResponse,
  ISendChatMessageResponse,
  IGetChatMembersResponse,
} from "@/types/apiResponses";
import { queryClient, queryKeys } from "@/data/constants";
import { ISendMessageRequest } from "@/types/apiRequests";

export const useGetUserGroupChats = (userId: string | number) => {
  const {
    data,
    status,
    isFetching: fetchingChats,
  } = useQuery<IGetGroupChatResponse[], Error>({
    queryKey: [queryKeys.getChats, userId],
    queryFn: () => getAllUserGroupChats(userId),
  });

  // console.log(data);

  const chats = data ? data[0].data : [];

  return { chats, status, fetchingChats };
};

export const useChatMessages = (chatId: string | number) => {
  const {
    data,
    status,
    isFetching: fetchingMsgs,
  } = useQuery<IGetChatMessagesResponse[], Error>(
    [queryKeys.getMessages, chatId],
    () => getAllChatMessages(chatId),
  );

  const onError = () => {};

  const messages = data ? data[0].data : [];

  const onSuccessReadMessages = (data: string) => {
    //Return chat members
    //queryClient.invalidateQueries([queryKeys.getTeams]);
  };

  const handleReadUnreadMsgs = async (
    userId: string | number,
    chatId: string | number,
  ) => {
    // setRemovingMember(true);

    const response = await readUnreadMessages(userId, chatId);

    response === "User removed from chat successfully"
      ? onSuccessReadMessages(response)
      : () => {};

    //setRemovingMember(false);
  };

  const handleGetNewMessages = async (chatId: string | number) => {
    // setRemovingMember(true);

    const response = await getAllChatMessages(chatId);
    console.log(response);
    response === "new messages" ? onSuccessReadMessages(response) : () => {};

    //setRemovingMember(false);
  };

  return {
    messages,
    status,
    fetchingMsgs,
    handleReadUnreadMsgs,
    handleGetNewMessages,
  };
};

export const useChatMembers = (chatId: string | number) => {
  const {
    data,
    status,
    isFetching: fetchingMembers,
  } = useQuery<IGetChatMembersResponse[], Error>({
    queryKey: [queryKeys.getMembers, chatId],
    queryFn: () => getAllChatMembers(chatId),
  });

  const onError = () => {};

  //console.log(data);

  const chatMembers = data ? data : null;

  return { status, chatMembers, fetchingMembers, data };
};

export const useSendNewMessage = () => {
  const onError = () => {};

  const { mutate, isLoading: sendingMessage } = useMutation({
    mutationFn: ({
      chatId,
      body,
    }: {
      chatId: number | string;
      body: ISendMessageRequest;
    }) => sendChatMessage(body, chatId),
  });

  const onMessageSuccess = (data: ISendChatMessageResponse | string) => {
    queryClient.invalidateQueries([queryKeys.getMessages]);
  };

  const sendNewMessage = (
    chatId: number | string,
    message: ISendMessageRequest,
  ) => {
    const messageData: ISendMessageRequest = {
      ...message,
    };

    // console.log(chatId);

    mutate(
      { chatId: chatId ?? 0, body: messageData },
      { onSuccess: onMessageSuccess, onError },
    );
  };

  return { sendNewMessage, sendingMessage };
};

export const useRemoveChatMember = () => {
  const [removingMember, setRemovingMember] = useState(false);

  const onSuccessRemoveMember = (data: string) => {
    //Return chat members
    //queryClient.invalidateQueries([queryKeys.getTeams]);
  };

  const handleRemoveMember = async (
    userId: string | number,
    chatId: string | number,
  ) => {
    setRemovingMember(true);

    const response = await removeChatMember(userId, chatId);

    response === "User removed from chat successfully"
      ? onSuccessRemoveMember(response)
      : () => {};

    setRemovingMember(false);
  };

  return {
    handleRemoveMember,
    removingMember,
  };
};

export const useChatMemberHandler = () => {
  const [addingMember, setAddingMember] = useState(false);
  const [removingMember, setRemovingMember] = useState(false);

  const onSuccessRemoveMember = (data: string) => {
    //Return chat members
    //queryClient.invalidateQueries([queryKeys.getTeams]);
  };

  const onSuccessAddMember = (data: string) => {
    //Return chat members
    //queryClient.invalidateQueries([queryKeys.getTeams]);
  };

  const handleRemoveMember = async (
    userId: string | number,
    chatId: string | number,
  ) => {
    setRemovingMember(true);

    const response = await removeChatMember(userId, chatId);

    response === "User removed from chat successfully"
      ? onSuccessRemoveMember(response)
      : () => {};

    setRemovingMember(false);
  };

  const handleAddChatMember = async (
    userId: string | number,
    chatId: string | number,
  ) => {
    setAddingMember(true);

    const response = await removeChatMember(userId, chatId);

    response === "User removed from chat successfully"
      ? onSuccessAddMember(response)
      : () => {};

    setAddingMember(false);
  };

  return {
    handleAddChatMember,
    addingMember,
    handleRemoveMember,
    removingMember,
  };
};
