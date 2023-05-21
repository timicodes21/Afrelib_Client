import { z, string, number } from "zod";

export const useSupport = () => {
  const schema = z.object({
    name: string(),
    description: string(),
  });

  return { schema };
};
