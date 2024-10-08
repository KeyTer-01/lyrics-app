/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
import { songLyrics } from "../components/constants/songLyrics";
import LyricsModal from "./modals/LyricsModal";

export const ListView = ({ searchQuery }) => {
  const [visibleDescription, setVisibleDescription] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);

  const toggleDescription = (index) => {
    setVisibleDescription((prevIndex) => (prevIndex === index ? null : index));
  };

  const openModal = (song) => {
    setSelectedSong(song);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const descriptionContainerStyle = css`
    max-height: 0px;
    overflow: hidden;
    transition: max-height 0.1s ease-out, padding 0.5s ease-out;
  `;

  const descriptionVisibleStyle = css`
    max-height: 100%; /* Adjust this value based on the content height */
    padding: 10px 0; /* Adjust padding as needed */
  `;

  const descriptionHiddenStyle = css`
    padding: 0;
  `;

  const viewButtonStyle = css`
    display: none;
    @media (max-width: 768px) {
      display: inline-block;
    }
  `;

  const viewLyricsButtonStyle = css`
    display: inline-block;
    @media (max-width: 768px) {
      display: none;
    }
  `;

  // const filteredLyrics = songLyrics.filter((song) =>
  //   song.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  const filteredLyrics = songLyrics.filter((song) => {
    const descriptionString = ReactDOMServer.renderToStaticMarkup(
      song.description
    ).toLowerCase();

    return (
      song?.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      descriptionString.includes(searchQuery.toLowerCase())
    );
  });

  return (
    <>
      <Box width={"90%"} mx="auto">
        {filteredLyrics.length > 0 ? (
          filteredLyrics.map((card, index) => (
            <>
              <Flex
                key={index}
                direction={"column"}
                mb={6}
                border="1px solid #e2e8f0"
                borderRadius="lg"
                //   overflow="hidden"
                boxShadow="xs"
                //   alignItems={"center"}
                // width={["100%", "80%"]}
              >
                <Flex>
                  <Image
                    src={card?.thumbnail}
                    boxSize={["80px", "100px"]}
                    objectFit="cover"
                    borderLeftRadius={"10px"}
                  />

                  <Box p={4} flex="1">
                    <Heading size={["xs", "md"]} mb={2}>
                      {card?.title}
                    </Heading>
                    <Box>
                      <Button
                        variant={"outline"}
                        height={["18px", "31px"]}
                        // width={["40px", "67px"]}
                        borderRadius={"42px"}
                        fontSize={["9px", "12px"]}
                        fontWeight={"600"}
                        css={viewButtonStyle}
                        onClick={() => toggleDescription(index)}
                      >
                        {visibleDescription === index ? "Hide" : "View"}
                      </Button>
                      <Button
                        variant={"outline"}
                        height={["18px", "31px"]}
                        borderRadius={"42px"}
                        fontSize={["9px", "12px"]}
                        fontWeight={"600"}
                        css={viewLyricsButtonStyle}
                        onClick={() => openModal(card)}
                      >
                        View Lyrics
                      </Button>
                    </Box>
                  </Box>
                </Flex>

                <Box
                  css={[
                    descriptionContainerStyle,
                    visibleDescription === index
                      ? descriptionVisibleStyle
                      : descriptionHiddenStyle,
                  ]}
                >
                  <Text fontSize={"14px"} pl={4} pr={4} pt={0}>
                    {card?.description}
                  </Text>
                </Box>
              </Flex>
            </>
          ))
        ) : (
          <Text fontSize={"xl"}>Song Not Found!</Text>
        )}
      </Box>
      <LyricsModal
        isOpen={modalOpen}
        onClose={closeModal}
        song={selectedSong}
      />
    </>
  );
};
