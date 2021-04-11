import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "types/api/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<Array<User>>([]);
  const { showMessage } = useMessage();

  const getUsers = useCallback(() => {
    setLoading(true);
    axios.
      get<Array<User>>("https://jsonplaceholder.typicode.com/users").then((res) => {
        setUsers(res.data);
      }).catch(() => {
        showMessage({ title: "ユーザー取得失敗", status: "error" })
      }).finally(() => {
        setLoading(false);
      })
  }, []);

  return { getUsers, users, loading };
}