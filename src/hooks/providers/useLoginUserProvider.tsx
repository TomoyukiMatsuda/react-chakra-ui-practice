import { Dispatch, createContext, ReactNode, SetStateAction, useState } from "react"
import { User } from "types/api/user";


type LoginUser = User & { isAdmin: boolean };

export type LoginUserContextType = {
  loginUser: LoginUser | null;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
};

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

// ログインユーザー情報を保持する context children のコンポーネントでvalueが利用可能になる
// つまり <LoginUserProvider>タグで囲まれたコンポーネントでchildrenが利用可能になる
export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null);

  return (
    // Context はProviderを保持していて{children}を挟んで return する
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {/*children（参照するコンポーネント）で value の値を参照できる  */}
      {children}
    </LoginUserContext.Provider>
  );
};
