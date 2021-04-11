/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { User } from "types/api/user";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();

  const login = useCallback((id: string) => {
    setLoading(true);
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      if (res.data) {
        // ホームに遷移
        showMessage({ title: "ログイン成功！", status: "success" })
        history.push("/home");
      } else {
        showMessage({ title: "ユーザがいません", status: "warning" })
      }
    }).catch(() => {
      showMessage({ title: "ログインに失敗しました", status: "error" })
    }).finally(() => {
      setLoading(false);
    })
  }, [history, showMessage]);

  return { login, loading };
};