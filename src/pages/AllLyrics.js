import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { GridView } from "../components/GridView";

const AllLyrics = () => {
  return (
    <>
      <Flex
        flexDirection={"column"}
        // justifyContent={"center"}
        alignItems={"center"}
        width={"100vw"}
        padding={4}
      >
        <Flex width={"90%"} justifyContent={"space-between"}>
          <Text> All Lyrics </Text>
          <Text> Change View </Text>
        </Flex>
        <GridView />
      </Flex>
    </>
  );
};

export default AllLyrics;
