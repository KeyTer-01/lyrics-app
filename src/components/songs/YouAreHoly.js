import { Box, Text } from "@chakra-ui/react";
import React from "react";

export const YouAreHoly = () => {
  return (
    <Box>
      <Text as={"b"}>Chant</Text>
      <Text>Aah eh eh aha eh ah ah (x4)</Text>
      <Text as={"b"}>Chorus</Text>
      <Text>
        Heaven and earth singing Holy! Holy!
        <br />
        All the angels crying Holy! Holy!
        <br />
        We will respond Holy! Holy!
        <br />
        You are Holy
        <br />
        El-Adonai
      </Text>
      <br />
      <Text as={"b"}>Bridge</Text>
      <Text>
        You who is like a jasper light
        <br />
        And who is like a sardine stone
        <br />
        You who is like a jasper light
        <br />
        Like sardine stone, like a jasper light
      </Text>
    </Box>
  );
};
