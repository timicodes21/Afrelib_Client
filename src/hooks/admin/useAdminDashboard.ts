import { SubmitHandler } from "react-hook-form/dist/types";
import { createUpdate, getWeeklyUpdates } from "@/api/updates";
import { queryClient, queryKeys } from "@/data/constants";
import { useMutation, useQuery } from "@tanstack/react-query";
import { z, string, number } from "zod";
import { WeeklyUpdatesFormValues } from "@/types/formValues";
import { ICreateUpdateRequest } from "@/types/apiRequests";
import { IGetWeeklyUpdatesResponse } from "@/types/apiResponses";
import { useState } from "react";

export const useGetWeeklyUpdates = () => {
  const { data, status, isFetching } = useQuery(
    [queryKeys.getWeeklyUpdates],
    () => getWeeklyUpdates(),
  );

  return { data, status, isFetching };
};

export interface IWeeklyUpdate {
  week: string;
  title: string;
  body: string;
}

export const useAdminDashboard = () => {
  const WeeklyUpdatesschema = z.object({
    week: string(),
    title: string(),
    body: string(),
  });

  const { mutate, isLoading: isLoadingUpdates } = useMutation(createUpdate);

  const onSuccessUpdates = () => {
    queryClient.invalidateQueries([queryKeys.getWeeklyUpdates]);
  };

  const onSubmitUpdate = (
    data: WeeklyUpdatesFormValues,
    callBack: () => void,
  ) => {
    const formData: ICreateUpdateRequest = {
      week: Number(data?.week),
      title: data?.title,
      body: data?.body,
    };

    mutate(formData, {
      onSuccess: () => {
        // This call back would run after user has added weekly update, This call back can be closing a modal
        callBack();
        onSuccessUpdates();
      },
      onError: () => {},
    });
  };

  const [weeklyUpdate, setWeeklyUpdate] = useState<IWeeklyUpdate>(
    {} as IWeeklyUpdate,
  );

  return {
    WeeklyUpdatesschema,
    isLoadingUpdates,
    onSubmitUpdate,
    weeklyUpdate,
    setWeeklyUpdate,
  };
};
