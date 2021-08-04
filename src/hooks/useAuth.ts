/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { User } from "types/api/user";
import { useLoginUser } from "./useLoginUser";
import { useMessage } from "./useMessage";


export const useAuth = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const login = useCallback((id: string) => {
    setLoading(true);
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      if (res.data) {
        const isAdmin = res.data.id === 10 ? true : false;
        setLoginUser({ ...res.data, isAdmin });
        showMessage({ title: "ログイン成功！", status: "success" })
        history.push("/home");
      } else {
        showMessage({ title: "ユーザがいません", status: "warning" })
        setLoading(false);
      }
    }).catch(() => {
      showMessage({ title: "ログインに失敗しました", status: "error" })
      setLoading(false);  
    })
  }, [history, showMessage]);

  return { login, loading };
};