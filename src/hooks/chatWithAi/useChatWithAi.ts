import { getChatHistory } from "@/api/chatWithAi";
import { queryKeys } from "@/data/constants";
import { useQuery } from "@tanstack/react-query";

export const useGetChatHistory = () => {
  const { data, isFetching, status } = useQuery(
    [queryKeys.getChatHistory],
    () => getChatHistory(),
  );

  return { data, isFetching, status };
};
