import { useState } from "react";
import { z, string } from "zod";
import { SubmitHandler } from "react-hook-form/dist/types";
import { AddUserFormValues } from "@/types/formValues";
import { useInfiniteQuery, useMutation } from "@tanstack/react-query";
import { createUser, enableOrDisableUser, getAllusers } from "@/api/users";
import { ICreateUserRequest } from "@/types/apiRequests";
import {
  ICreateUserResponse,
  IGetAllUsersResponse,
} from "@/types/apiResponses";
import { queryClient, queryKeys } from "@/data/constants";

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
        return lastPage?.length !== 0 ? pages.length + 1 : null;
      },
    },
  );

  const allUsers: IGetAllUsersResponse[] = [];
  data?.pages &&
    Array.isArray(data?.pages) &&
    data?.pages?.map(
      page =>
        Array.isArray(page) &&
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
  const [statusOptions, setStatusOptions] = useState<
    "disabled" | "active" | ""
  >("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedRole, setSelectedRole] = useState<
    "Student" | "Mentor" | "Panelist"
  >("Student");
  const [userDetails, setUserDetails] = useState<{
    id: number;
    isEnabled?: boolean;
  }>({ id: 0 });

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
    dob: string(),
  });

  const { mutate, isLoading } = useCreateUser();

  const onSuccess = (data: ICreateUserResponse | string) => {
    queryClient.invalidateQueries([queryKeys.getAllUsers]);
  };

  const onError = () => {};

  const onSubmit: SubmitHandler<AddUserFormValues> = data => {
    const formData: ICreateUserRequest = {
      first_name: data?.firstName,
      last_name: data?.lastName,
      email: data?.email,
      school_name: data?.school,
      role_id: data?.userType,
      date_of_birth: data?.dob,
    };

    mutate(formData, { onSuccess, onError });
  };

  const handleEnableDisable = async (
    type: "enable" | "disable",
    userId: number,
  ) => {
    setIsUpdating(true);
    const res = await enableOrDisableUser(type, userId);
    if (res?.first_name) {
      queryClient.invalidateQueries([queryKeys.getAllUsers]);
    }
    setIsUpdating(false);
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
    statusOptions,
    setStatusOptions,
    handleEnableDisable,
    isUpdating,
    userDetails,
    setUserDetails,
  };
};
