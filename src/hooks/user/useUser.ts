import { useState } from "react";
import { z, string } from "zod";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { changeUserPassword, updateUserDetails } from "@/api/users";
import {
  IGetChatMessagesResponse,
  IGetGroupChatResponse,
  ISendChatMessageResponse,
  IGetChatMembersResponse,
  IGetUnreadMessagesResponse,
} from "@/types/apiResponses";
import { queryClient, queryKeys } from "@/data/constants";
import { ISendMessageRequest } from "@/types/apiRequests";

export const useChangePassword = () => {
  const [changingPassword, setChangingPassword] = useState(false);

  const schema = z.object({
    old_password: string().nonempty("Please provide old password"),
    new_password: string().nonempty("Please provide new password"),
  });

  const onSuccess = (data: string) => {
    //Return chat members
    //queryClient.invalidateQueries([queryKeys.getTeams]);
  };

  const handleChangePassword = async (data: {
    old_password: string;
    new_password: string;
  }) => {
    setChangingPassword(true);

    const response = await changeUserPassword({ ...data });

    response === "Password updated successfully"
      ? onSuccess(response)
      : () => {};

    setChangingPassword(false);
  };

  return {
    handleChangePassword,
    changingPassword,
    schema,
  };
};

export const useUpdateUserDetails = () => {
  const [updating, setUpdating] = useState(false);

  const schema = z.object({
    about_me: string().nonempty("Please provide old password"),
  });

  const onSuccess = (data: string) => {
    //Return chat members
    //queryClient.invalidateQueries([queryKeys.getTeams]);
  };

  const handleUpdate = async (data: { [key: string]: string }) => {
    setUpdating(true);

    const response = await updateUserDetails({ ...data });

    response === "Password updated successfully"
      ? onSuccess(response)
      : () => {};

    setUpdating(false);
  };

  return {
    handleUpdate,
    updating,
    schema,
  };
};
