import { Stack, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { VFC } from "react"

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

export const UserDetailModal: VFC<Props> = (props) => {
  const { isOpen, onClose } = props;

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
                  <Input value="松田" isReadOnly />
                </FormControl>
                <FormControl>
                  <FormLabel>フルネーム</FormLabel>
                  <Input value="まつだともゆき" isReadOnly />
                </FormControl>
                <FormControl>
                  <FormLabel>メール</FormLabel>
                  <Input value="dkaoaifd@dkao.com" isReadOnly />
                </FormControl>
                <FormControl>
                  <FormLabel>TEL</FormLabel>
                  <Input value="090-0000-0000" isReadOnly />
                </FormControl>
              </Stack>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>
  );
};