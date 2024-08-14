import {
  Flex,
  Image,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";

const LyricsModal = ({ isOpen, onClose, song }) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const testing = () => {
    console.log(song);
  };

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent minWidth={"800px"} p={8}>
          <ModalCloseButton className="modal-close-button" />
          <Flex>
            <Stack width={"300px"}>
              <Image
                src={song?.thumbnail}
                borderRadius="lg"
                p={0}
                width={"270px"}
                height={"270px"}
              />
              <Text fontSize={"lg"} as="b" mt={4}>
                {song?.title}
              </Text>
              <Text fontSize={"sm"} as="em" mt={2}>
                {song?.scripture}
              </Text>
            </Stack>
            <Stack width={"350px"}>
              {song ? song?.description : "No song selected"}
            </Stack>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LyricsModal;
