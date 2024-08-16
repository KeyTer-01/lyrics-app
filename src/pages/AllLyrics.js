import {
  Box,
  ButtonGroup,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { GridView } from "../components/GridView";
import { DragHandleIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { ListView } from "../components/ListView";

const AllLyrics = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const defaultView = useBreakpointValue({ base: "list", md: "grid" });
  const [view, setView] = useState(defaultView);

  useEffect(() => {
    setView(defaultView);
  }, [defaultView]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const toggleView = (view) => {
    setView(view);
  };

  return (
    <>
      <Flex flexDirection={"column"} alignItems={"center"} padding={6} pt={0}>
        <Flex
          width={"100%"}
          height={"100px"}
          justifyContent={"center"}
          alignItems={"center"}
          position={"fixed"}
          zIndex={1}
          backgroundColor={"#fff"}
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
            <ButtonGroup ml={4}>
              {view === "grid" ? (
                <IconButton
                  backgroundColor={"transparent"}
                  aria-label="List"
                  icon={<HamburgerIcon />}
                  onClick={() => toggleView("list")}
                  isActive={view === "list"}
                />
              ) : (
                <IconButton
                  backgroundColor={"transparent"}
                  aria-label="List"
                  icon={<DragHandleIcon />}
                  onClick={() => toggleView("grid")}
                  isActive={view === "grid"}
                />
              )}
            </ButtonGroup>
          </Flex>
        </Flex>
        <Box mt={"100px"}></Box>
        {view === "grid" ? (
          <GridView searchQuery={searchQuery} />
        ) : (
          <ListView searchQuery={searchQuery} />
        )}
      </Flex>
    </>
  );
};

export default AllLyrics;
