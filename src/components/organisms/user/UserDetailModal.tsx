import { Stack, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, ModalFooter } from "@chakra-ui/react";
import { User } from "types/api/user";
import { useEffect, useState, VFC } from "react"
import { PrimaryButton } from "components/atoms/button/PrimaryButton";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  selectUser: User | null;
  isAdmin?: boolean;
}

export const UserDetailModal: VFC<Props> = (props) => {
  const { isOpen, onClose, selectUser, isAdmin = false } = props;

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setUsername(selectUser?.username ?? '');
    setName(selectUser?.name ?? '');
    setEmail(selectUser?.email ?? '');
    setPhone(selectUser?.phone ?? '');
  }, [selectUser]);

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }
  const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  }
  
  const onClickUpdate = () => alert();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
        <ModalOverlay>
          <ModalContent pb={2}>
            <ModalHeader>ユーザー詳細</ModalHeader>
            <ModalCloseButton />
            <ModalBody mx={4}>
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>名前</FormLabel>
                  <Input value={username} isReadOnly={!isAdmin} onChange={onChangeUsername} />
                </FormControl>
                <FormControl>
                  <FormLabel>フルネーム</FormLabel>
                  <Input value={name} isReadOnly={!isAdmin} onChange={onChangeName} />
                </FormControl>
                <FormControl>
                  <FormLabel>メール</FormLabel>
                  <Input value={email} isReadOnly={!isAdmin} onChange={onChangeEmail} />
                </FormControl>
                <FormControl>
                  <FormLabel>TEL</FormLabel>
                  <Input value={phone} isReadOnly={!isAdmin} onChange={onChangePhone} />
                </FormControl>
              </Stack>
            </ModalBody>
            {isAdmin && (
              <ModalFooter>
                <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
              </ModalFooter>
            )}
          </ModalContent>
        </ModalOverlay>
      </Modal>
  );
};