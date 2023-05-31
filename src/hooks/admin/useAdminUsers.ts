import { useState } from "react";
import { z, string } from "zod";
import { SubmitHandler } from "react-hook-form/dist/types";
import { AddUserFormValues } from "@/types/formValues";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import {
  createUser,
  enableOrDisableUser,
  getAllusers,
  resetUserPassword,
} from "@/api/users";
import { ICreateUserRequest } from "@/types/apiRequests";
import {
  ICreateUserResponse,
  IGetAllUsersResponse,
  User,
} from "@/types/apiResponses";
import { queryClient, queryKeys } from "@/data/constants";
import { useModal } from "../utility";
import { useRouter } from "next/router";
import { getAllAdmin } from "@/api/admin";
import { toast } from "react-hot-toast";

const useCreateUser = () => {
  return useMutation(createUser);
};

export const useGetAllAdmin = () => {
  const { data, isFetching, status } = useQuery<
    IGetAllUsersResponse[] | string
  >([queryKeys.getAllAdmin], () => getAllAdmin());

  return { data, isFetching, status };
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
    "Student" | "Mentor" | "Panelist" | "admin"
  >("Student");
  const [userDetails, setUserDetails] = useState<{
    id: number;
    isEnabled?: boolean;
  }>(
    {} as {
      id: number;
      isEnabled?: boolean;
    },
  );
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
      roleName: string(),
      dob: string().optional(),
    })
    .refine(
      // If user is a student dob is compulsory
      data => {
        if (data?.roleName !== "Student") {
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

  const onSubmit = (data: AddUserFormValues, closeModal: () => void) => {
    const formData: ICreateUserRequest = {
      first_name: data?.firstName,
      last_name: data?.lastName,
      email: data?.email,
      school_name: data?.school,
      role_id: data?.userType,
      date_of_birth: data?.dob ?? "",
    };

    mutate(formData, {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getAllUsers]);
        closeModal();
      },
      onError: () => {
        closeModal();
      },
    });
  };

  const handleEnableDisable = async (
    type: "enable" | "disable",
    userId: number,
    closeModal: () => void,
  ) => {
    setIsUpdating(true);
    const res = await enableOrDisableUser(type, userId);
    if (res?.first_name) {
      queryClient.invalidateQueries([queryKeys.getAllUsers]);
      closeModal();
      setIsUpdating(false);
      return;
    } else {
      toast.error(
        typeof res === "string"
          ? res
          : "An error occured, Please try again later",
      );
    }
    setIsUpdating(false);
    closeModal();
  };

  const handleReset = async (id: number, closeModal: () => void) => {
    setIsUpdating(true);
    const res = await resetUserPassword(id);
    // handle success
    if (typeof res === "object" && res?.email) {
      queryClient.invalidateQueries([queryKeys.getAllUsers]);
      closeModal();
      return setIsUpdating(false);
    }
    if (typeof res === "string") {
      toast.error(res);
      closeModal();

      return setIsUpdating(false);
    }
    toast.error("An error occured, Please try again later");
    closeModal();

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
    handleReset,
  };
};
