import { useState } from "react";

export const useAdminProjects = () => {
  const [option, setOption] = useState<"submission" | "evaluation">(
    "submission",
  );
  return { option, setOption };
};
