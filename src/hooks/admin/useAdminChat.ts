import { useState } from "react";
import { z, string, number } from "zod";
import { SubmitHandler } from "react-hook-form/dist/types";
import { CreateGroupChatFormValues } from "@/types/formValues";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";

import { adminCreateGroupChat } from "@/api/chats";
import { ICreateGroupChatResponse } from "@/types/apiResponses";
import { ICreateGroupChatRequest } from "@/types/apiRequests";
import { queryClient, queryKeys } from "@/data/constants";

const useCreateGroupChat = () => {
  return useMutation(adminCreateGroupChat);
};

export const useAdminChat = () => {
  const groupChatSchema = z.object({
    name: string().nonempty("Please provide group name"),
    members: number().array().nonempty("Please choose group members"),
  });

  const { mutate, isLoading: creatingGroupChat } = useCreateGroupChat();

  const onSuccess = (data: ICreateGroupChatResponse | string) => {
    queryClient.invalidateQueries([queryKeys.getChats]);
  };

  const onError = () => {};

  const createGroupChat: SubmitHandler<CreateGroupChatFormValues> = data => {
    const formData: ICreateGroupChatRequest = {
      chatName: data.name,
      chatDescription: data.description || "New group chat",
      chatType: "group",
      userIds: data.members,
    };

    //console.log(formData);

    mutate(formData, { onSuccess, onError });
  };

  return {
    groupChatSchema,
    createGroupChat,
    creatingGroupChat,
  };
};
