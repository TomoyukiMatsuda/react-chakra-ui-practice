import { useContext } from "react";
import { LoginUserContext, LoginUserContextType } from "hooks/providers/useLoginUserProvider";

export const useLoginUser = (): LoginUserContextType => useContext(LoginUserContext);
