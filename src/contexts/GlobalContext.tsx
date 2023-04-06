import { useUserDetails } from "@/hooks/auth/useUserDetails";
import { IUserDetails } from "@/types";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
} from "react";

interface IGlobalContext {
  userDetails: IUserDetails;
  setUserDetails: Dispatch<SetStateAction<IUserDetails>>;
}

const GlobalContext = createContext({} as IGlobalContext);
const useGlobalContext = () => useContext(GlobalContext);

function GlobalProvider({ children }: PropsWithChildren) {
  const { userDetails, setUserDetails } = useUserDetails();

  return (
    <GlobalContext.Provider
      value={{ userDetails: userDetails, setUserDetails }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { useGlobalContext, GlobalProvider };
