import { useState } from "react";
import { z, string } from "zod";
import { SubmitHandler } from "react-hook-form/dist/types";
import { AddUserFormValues } from "@/types/formValues";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "@/api/users";
import { ICreateUserRequest } from "@/types/apiRequests";
import { ICreateUserResponse } from "@/types/apiResponses";

const useCreateUser = () => {
  return useMutation(createUser);
};

export const useAdminUsers = () => {
  const [activeTab, setActiveTab] = useState<"admin" | "users">("users");

  const activeTabStyle = {
    boxShadow:
      "0px 1px 3px rgba(16, 24, 40, 0.15), 0px 1px 2px rgba(16, 24, 40, 0.1)",
    borderRadius: "8px",
    background: "#FFF",
    px: 3,
    py: 1,
  };

  const inActiveTabStyle = {
    px: 3,
    py: 1,
  };

  const schema = z.object({
    email: string().email("Please entera valid email"),
    firstName: string(),
    lastName: string(),
    school: string().optional(),
    userType: string(),
  });

  const { mutate, isLoading } = useCreateUser();

  const onSuccess = (data: ICreateUserResponse | string) => {};

  const onError = () => {};

  const onSubmit: SubmitHandler<AddUserFormValues> = data => {
    console.log("data form", data);
    const formData: ICreateUserRequest = {
      first_name: data?.firstName,
      last_name: data?.lastName,
      email: data?.email,
      school_name: data?.school,
      role_id: data?.userType,
    };

    mutate(formData, { onSuccess, onError });
  };

  return {
    activeTab,
    setActiveTab,
    activeTabStyle,
    inActiveTabStyle,
    onSubmit,
    schema,
    isLoading,
  };
};
