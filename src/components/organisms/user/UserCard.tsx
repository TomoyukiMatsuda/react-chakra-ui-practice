import {  Text, Box, Stack, Image } from "@chakra-ui/react";
import { VFC } from "react"

type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClickUser: (id: number) => void;
}

export const UserCard: VFC<Props> = (props) => {
  const { id, imageUrl, userName, fullName, onClickUser } = props;

  return (
    <Box 
      w="260px"
      h="260px"
      bg="white"
      borderRadius="15px"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={() => onClickUser(id)}
    >
      <Stack textAlign="center">
        <Image
          borderRadius="full"
          boxSize="160px"
          alt="プロフィール"
          src={imageUrl}
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">{userName}</Text>
        <Text fontSize="sm" color="gray">{fullName}</Text>
      </Stack>
    </Box>
  );
};