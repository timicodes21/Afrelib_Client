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
import { useModal } from "../utility";
import { useRouter } from "next/router";

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
  const { open, setOpen, closeModal, openModal } = useModal();
  const router = useRouter();

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

  const schema = z
    .object({
      email: string().email("Please enter valid email"),
      firstName: string(),
      lastName: string(),
      school: string().optional(),
      userType: string(),
      dob: string().optional(),
    })
    .refine(
      // If user is a student dob is compulsory
      data => {
        if (data?.userType !== "6y8hXnL5xl1l") {
          // return true for other users
          return true;
        } else {
          // check if student user included date of birth
          if (data?.dob?.trim()) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        path: ["dob"],
        message: "Date of Birth is required",
      },
    );

  const { mutate, isLoading } = useCreateUser();

  const onSuccess = (data: ICreateUserResponse | string) => {
    queryClient.invalidateQueries([queryKeys.getAllUsers]);
    //close modal
  };

  const onError = () => {
    // close modal
    closeModal();
  };

  const onSubmit: SubmitHandler<AddUserFormValues> = data => {
    console.log("data", data);
    const formData: ICreateUserRequest = {
      first_name: data?.firstName,
      last_name: data?.lastName,
      email: data?.email,
      school_name: data?.school,
      role_id: data?.userType,
      date_of_birth: data?.dob ?? "",
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
    open,
    setOpen,
    closeModal,
    openModal,
  };
};
