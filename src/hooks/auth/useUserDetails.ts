import { LOCAL_STORAGE_KEY } from "@/data/constants";
import { IUserDetails } from "@/types";
import { useEffect, useState } from "react";

export const useUserDetails = () => {
  const [userDetails, setUserDetails] = useState<IUserDetails>({
    access_token: "",
    first_name: "",
    last_name: "",
    role: "",
    id: 0,
    userId: 0,
    teamId: 0,
    cohortId: "",
    email: "",
    bio: "",
    dob: "",
  });

  let user: IUserDetails;

  useEffect(() => {
    user = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY) ??
        JSON.stringify({
          first_name: null,
          last_name: null,
          access_token: null,
          role: null,
          id: null,
          email: null,
          userId: null,
          teamId: null,
          cohortId: null,
          bio: null,
          dob: null,
        }),
    );

    // set userDetails to user in local storagr if present
    setUserDetails(
      user?.access_token
        ? user
        : {
            first_name: null,
            last_name: null,
            access_token: null,
            role: null,
            id: null,
            userId: null,
            teamId: null,
            cohortId: null,
            email: null,
            bio: null,
            dob: null,
          },
    );
  }, []);

  return { userDetails, setUserDetails };
};
