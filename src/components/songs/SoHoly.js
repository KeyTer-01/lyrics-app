import { Box, Text } from "@chakra-ui/react";
import React from "react";

export const SoHoly = () => {
  return (
    <Box>
      <Text as={"b"}>Verse</Text>
      <Text>
        My soul bless Your Name, You are so holy
        <br />
        My soul bless Your Name, You are so holy
        <br />
        My soul bless Your Name, You are so holy
      </Text>
      <br />
      <Text as={"b"}>Chorus</Text>
      <Text>
        Yahweh, Your Name is great
        <br />
        Your Name is great, Yahweh
        <br />
        Yahweh, Your Name is greatly to be praised
      </Text>
      <br />
      <Text as={"b"}>Reprise</Text>
      <Text>
        Resp.: Holy, holy, holy, holy
        <br />
        Call: Lord I hail You and cry
        <br />
        Resp.: Holy, holy, holy, holy
        <br />
        Call: All of the Angels they cry
        <br />
        Resp.: Holy, holy, holy, holy
      </Text>
    </Box>
  );
};
