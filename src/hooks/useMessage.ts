import { useToast } from "@chakra-ui/react"
import { useCallback } from "react"

type Props = {
  title: string;
  status: "success" | "error" | "warning" | "info";
};

export const useMessage = () => {
  const toast = useToast();

  // useCallback(コールバック関数, 依存配列);
  // 依存要素が更新されれば関数が再生しえされる。依存要素がなければ依存配列は[]でOK
  const showMessage = useCallback((props: Props) => {
  const { title, status } = props;

    toast({
      title,
      status,
      position: "top",
      duration: 3000,
      isClosable: true,
    })
  }, []);

  return { showMessage };
};