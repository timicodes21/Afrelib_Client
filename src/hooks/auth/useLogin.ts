import { LoginFormValues } from "./../../types/formValues";
import { useState } from "react";
import { z, string } from "zod";
import { SubmitHandler } from "react-hook-form/dist/types";
import { useRouter } from "next/router";
import {
  ADMIN_DASHBOARD,
  DASHBOARD,
  LOCAL_STORAGE_KEY,
} from "@/data/constants";
import { useMutation } from "@tanstack/react-query";
import { adminLogin } from "@/api/admin";
import { IAdminLoginRequest, IUserLoginRequest } from "@/types/apiRequests";
import { IAdminLoginResponse, IUserLoginResponse } from "@/types/apiResponses";
import { useGlobalContext } from "@/contexts/GlobalContext";
import { loginUser } from "@/api/users";

const useAdminLogin = () => {
  return useMutation(adminLogin);
};

const useLoginUser = () => {
  return useMutation(loginUser);
};

export const useLogin = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const router = useRouter();

  const { setUserDetails } = useGlobalContext();

  const schema = z.object({
    email: string().email("Please enter a valid email"),
    password: string(),
  });

  const { mutate: loginAdmin, isLoading: isLoadingAdmin } = useAdminLogin();

  const { mutate: userLogin, isLoading } = useLoginUser();

  const onSuccess = (data: IUserLoginResponse) => {
    if (data?.access_token) {
      router.push(DASHBOARD);
    }

    const userDetails = {
      first_name: data?.UserDetails?.first_name,
      last_name: data?.UserDetails?.last_name,
      access_token: data?.access_token,
      role: data?.UserDetails?.role_name,
      id: data?.UserDetails?.id,
    };

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userDetails));
    setUserDetails(userDetails);
  };

  const onError = () => {};

  const onSuccessAdmin = (data: IAdminLoginResponse) => {
    if (data?.access_token) {
      router.push(ADMIN_DASHBOARD);
    }

    const userDetails = {
      first_name: data?.adminDetails?.first_name,
      last_name: data?.adminDetails?.last_name,
      access_token: data?.access_token,
      role: "admin",
      id: data?.adminDetails?.id,
    };

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userDetails));
    setUserDetails(userDetails);
  };

  const onErrorAdmin = () => {};

  const onSubmit: SubmitHandler<LoginFormValues> = data => {
    const formData: IUserLoginRequest = {
      email: data?.email,
      password: data?.password,
    };

    userLogin(formData, { onSuccess, onError });
  };

  const onSubmitAdmin: SubmitHandler<LoginFormValues> = data => {
    const formData: IAdminLoginRequest = {
      email: data?.email,
      password: data?.password,
    };

    loginAdmin(formData, { onSuccess: onSuccessAdmin, onError: onErrorAdmin });
  };

  return {
    selectedRole,
    setSelectedRole,
    schema,
    onSubmit,
    onSubmitAdmin,
    isLoadingAdmin,
    isLoading,
  };
};
