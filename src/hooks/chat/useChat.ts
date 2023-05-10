import { useState } from "react";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import {
  getAllUserGroupChats,
  getAllChatMessages,
  sendChatMessage,
  removeChatMember,
} from "@/api/chats";
import {
  IGetChatMessagesResponse,
  IGetGroupChatResponse,
  ISendChatMessageResponse,
} from "@/types/apiResponses";
import { queryClient, queryKeys } from "@/data/constants";
import { ISendMessageRequest } from "@/types/apiRequests";

export const useGetUserGroupChats = (userId: string | number) => {
  const {
    data,
    status,
    isFetching: fetchingChats,
  } = useQuery<IGetGroupChatResponse[], Error>(
    [queryKeys.getChats, userId],
    () => getAllUserGroupChats(userId),
  );

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

  return { messages, status, fetchingMsgs };
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
