import {
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { GridView } from "../components/GridView";
import {
  AddIcon,
  DragHandleIcon,
  HamburgerIcon,
  Search2Icon,
  SearchIcon,
} from "@chakra-ui/icons";
import { ListView } from "../components/ListView";

const AllLyrics = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [view, setView] = useState("grid");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const toggleView = (view) => {
    setView(view);
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
          <ButtonGroup ml={4}>
            {view === "grid" ? (
              // <Button
              //
              // >
              //   List View
              // </Button>
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
        <br />
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
