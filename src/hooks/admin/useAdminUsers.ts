import { useState } from "react";
import { z, string } from "zod";
import { SubmitHandler } from "react-hook-form/dist/types";
import { AddUserFormValues } from "@/types/formValues";
import { useInfiniteQuery, useMutation } from "@tanstack/react-query";
import { createUser, getAllusers } from "@/api/users";
import { ICreateUserRequest } from "@/types/apiRequests";
import {
  ICreateUserResponse,
  IGetAllUsersResponse,
} from "@/types/apiResponses";
import { queryClient, queryKeys } from "@/data/constants";
import { useModal } from "../utility";

const useCreateUser = () => {
  return useMutation(createUser);
};

export const useGetAllUsers = () => {
  const getUsers = async (pageNo: 1) => {
    let response = await getAllusers(pageNo);
    return response;
  };

  const {
    data,
    status,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery(
    [queryKeys.getAllUsers],
    ({ pageParam = 1 }) => getUsers(pageParam),
    {
      getNextPageParam: (lastPage, pages) => {
        // console.log("lastpage", lastPage, "pages", pages);
        return lastPage?.length !== 0 ? pages.length + 1 : null;
      },
    },
  );

  const allUsers: IGetAllUsersResponse[] = [];
  Array.isArray(data?.pages) &&
    data?.pages?.map(page =>
      page?.map((el: IGetAllUsersResponse) => allUsers.push(el)),
    );

  return {
    allUsers,
    status,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};

export const useAdminUsers = () => {
  const [activeTab, setActiveTab] = useState<"admin" | "users">("users");
  const { open, setOpen, openModal, closeModal } = useModal();
  const [selectedRole, setSelectedRole] = useState<
    "Student" | "Mentor" | "Panelist"
  >("Student");

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

  const onSuccess = (data: ICreateUserResponse | string) => {
    queryClient.invalidateQueries([queryKeys.getAllUsers]);
    closeModal();
  };

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
    selectedRole,
    setSelectedRole,
    open,
    setOpen,
    openModal,
    closeModal,
  };
};
