import {
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { GridView } from "../components/GridView";
import { AddIcon, Search2Icon, SearchIcon } from "@chakra-ui/icons";

const AllLyrics = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <>
      <Flex
        flexDirection={"column"}
        // justifyContent={"center"}
        alignItems={"center"}
        width={"100vw"}
        padding={6}
      >
        <Flex
          width={"90%"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <InputGroup>
            <Input
              placeholder="Search Lyrics"
              size="md"
              type="search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <InputRightElement>
              <IconButton
                backgroundColor={"transparent"}
                aria-label="Search"
                icon={<SearchIcon />}
              />
            </InputRightElement>
          </InputGroup>
        </Flex>
        <br />
        <GridView searchQuery={searchQuery} />
      </Flex>
    </>
  );
};

export default AllLyrics;
