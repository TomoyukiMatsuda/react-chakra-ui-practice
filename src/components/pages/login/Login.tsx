import { Flex, Box, Heading, Divider, Input, Stack } from "@chakra-ui/react";
import { PrimaryButton } from "components/atoms/button/PrimaryButton";
import { useAuth } from "hooks/useAuth";
import React, { VFC, memo, useState } from "react";

export const Login: VFC = memo(() => {
  const { login, loading } = useAuth();
  const [inputId, setInputId] = useState('');

  const onChangeInputId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputId(e.target.value);
  }
  const onClickLogin = () => {
    login(inputId);
  }

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="lg" h="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">ユーザー管理アプリ</Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder="ユーザID入力" value={inputId} onChange={onChangeInputId} />
          <PrimaryButton
            disabled={inputId === ""}
            loading={loading}
            onClick={onClickLogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  )
});
