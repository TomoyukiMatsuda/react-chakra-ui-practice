import { Center, Spinner, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { VFC, memo, useEffect, useCallback } from "react";

import { UserCard } from "components/organisms/user/UserCard";
import { useAllUsers } from "hooks/useAllUsers";
import { UserDetailModal } from "components/organisms/user/UserDetailModal";
import { useSelectedUser } from "hooks/useSelectedUser";

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();
  const { selectedUser, onSelectUser} = useSelectedUser();

  const onClickUser = useCallback((id: number) => {
    onSelectUser({ users, id, onOpen });
  }, [users, onSelectUser, onOpen]);

  useEffect(() => getUsers(), []);
  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                id={user.id}
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClickUser={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} selectUser={selectedUser} />
    </>
  )
});
