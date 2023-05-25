import { z, string, number } from "zod";
import { SubmitHandler } from "react-hook-form/dist/types";
import { SupportFormValues } from "@/types/formValues";
import { useState } from "react";
import { IPostSupportRequest } from "@/types/apiRequests";
import { postSupport, viewSupport } from "@/api/support";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/data/constants";

export const useGetSupport = () => {
  const { data, isFetching } = useQuery([queryKeys.getSupport], () =>
    viewSupport(),
  );

  return { data, isFetching };
};

export const useSupport = () => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const schema = z.object({
    name: string(),
    description: string(),
    file: string().optional(),
  });

  const handleSubmitSupport: SubmitHandler<SupportFormValues> = async data => {
    const formData: IPostSupportRequest = {
      file: data?.file ?? "",
      title: data?.name,
      description: data?.description,
    };
    setIsLoading(true);
    const response = await postSupport(formData);
    if (typeof response === "object") {
      toast.success("Message sent");
      setIsLoading(false);
      return;
    }
    if (typeof response === "string") {
      toast.error(response);
      setIsLoading(false);
      return;
    }
    toast.error("An error occured");
    setIsLoading(false);
  };

  return { schema, handleSubmitSupport, url, setUrl, isLoading };
};
