import { LOCAL_STORAGE_KEY, LOGIN } from "@/data/constants";
import { IUserDetails } from "@/types";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useProtectedRoute = () => {
  const router = useRouter();
  let user: IUserDetails;

  useEffect(() => {
    user = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY) ??
        JSON.stringify({
          first_name: null,
          last_name: null,
          access_token: null,
          role: null,
          teamId: null,
          cohortId: null,
          id: null,
          email: null,
          bio: null,
          dob: null,
        }),
    );

    if (user && user?.access_token?.trim()) {
      return;
    } else {
      router.push(LOGIN);
    }
  }, []);
};
