import { useState } from "react";
import { z, string } from "zod";
import {
  changeUserPassword,
  updateUserDetails,
  getLoggedInUser,
} from "@/api/users";
import { IGetChatMessagesResponse } from "@/types/apiResponses";
import { LOCAL_STORAGE_KEY } from "@/data/constants";
import { useGlobalContext } from "@/contexts/GlobalContext";

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
  const { setUserDetails } = useGlobalContext();
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
    const updatedUser = await getLoggedInUser();

    const storedUser = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY) || "",
    );

    const newStoredUser = { ...storedUser, ...updatedUser };

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newStoredUser));
    setUserDetails(newStoredUser);

    //console.log(updatedUser);

    response === "user updated successfully" ? onSuccess(response) : () => {};

    setUpdating(false);
  };

  return {
    handleUpdate,
    updating,
    schema,
  };
};
