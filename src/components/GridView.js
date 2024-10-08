/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
import { songLyrics } from "../components/constants/songLyrics";
import LyricsModal from "./modals/LyricsModal";

export const GridView = ({ searchQuery }) => {
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
  //   song?.title.toLowerCase().includes(searchQuery.toLowerCase())
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
      <SimpleGrid
        width={"90%"}
        columns={[1, 2, 3, 4]}
        spacing={10}
        justifyContent={"center"}
      >
        {filteredLyrics.length > 0 ? (
          filteredLyrics.map((card, index) => (
            <Card
              key={index}
              border={0}
              boxShadow={0}
              display={"flex"}
              flexDirection={"column"}
            >
              <Image src={card?.thumbnail} borderRadius="lg" p={0} />
              <CardHeader pl={0} pr={0}>
                <Heading size="md">{card?.title}</Heading>
              </CardHeader>
              <CardHeader pt={0} pl={0} pr={0}>
                <Button
                  variant={"outline"}
                  height={"31px"}
                  width={"67px"}
                  borderRadius={"42px"}
                  fontSize={"12px"}
                  fontWeight={"600"}
                  css={viewButtonStyle}
                  onClick={() => toggleDescription(index)}
                >
                  {visibleDescription === index ? "Hide" : "View"}
                </Button>
                <Button
                  variant={"outline"}
                  height={"31px"}
                  // width={"67px"}
                  borderRadius={"42px"}
                  fontSize={"12px"}
                  fontWeight={"600"}
                  css={viewLyricsButtonStyle}
                  onClick={() => openModal(card)}
                >
                  View Lyrics
                </Button>
              </CardHeader>

              <CardBody p={0}>
                <div
                  css={[
                    descriptionContainerStyle,
                    visibleDescription === index
                      ? descriptionVisibleStyle
                      : descriptionHiddenStyle,
                  ]}
                >
                  <Text fontSize={"14px"}>{card?.description}</Text>
                </div>
              </CardBody>
              {/* <CardFooter
              pt={0}
              pl={0}
              pr={0}
              display={"flex"}
              // justifyContent={"space-between"}
            >
              <Button
                variant={"outline"}
                height={"31px"}
                width={"67px"}
                borderRadius={"42px"}
                fontSize={"12px"}
                fontWeight={"600"}
                onClick={() => toggleDescription(index)}
              >
                {visibleDescription === index ? "Hide" : "View"}
              </Button>
              <Button
                variant={"outline"}
                height={"31px"}
                width={"67px"}
                borderRadius={"42px"}
                fontSize={"12px"}
                fontWeight={"600"}
                ml={4}
              >
                {card?.listen}
              </Button>
            </CardFooter> */}
            </Card>
          ))
        ) : (
          <Text fontSize={"xl"}>Song Not Found!</Text>
        )}
      </SimpleGrid>
      <LyricsModal
        isOpen={modalOpen}
        onClose={closeModal}
        song={selectedSong}
      />
    </>
  );
};
