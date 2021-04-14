import { Stack, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { User } from "types/api/user";
import { VFC } from "react"

type Props = {
  isOpen: boolean;
  onClose: () => void;
  selectUser: User | null;
}

export const UserDetailModal: VFC<Props> = (props) => {
  const { isOpen, onClose, selectUser } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
        <ModalOverlay>
          <ModalContent pb={6}>
            <ModalHeader>ユーザー詳細</ModalHeader>
            <ModalCloseButton />
            <ModalBody mx={4}>
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>名前</FormLabel>
                  <Input value={selectUser?.username} isReadOnly />
                </FormControl>
                <FormControl>
                  <FormLabel>フルネーム</FormLabel>
                  <Input value={selectUser?.name} isReadOnly />
                </FormControl>
                <FormControl>
                  <FormLabel>メール</FormLabel>
                  <Input value={selectUser?.email} isReadOnly />
                </FormControl>
                <FormControl>
                  <FormLabel>TEL</FormLabel>
                  <Input value={selectUser?.phone} isReadOnly />
                </FormControl>
              </Stack>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>
  );
};