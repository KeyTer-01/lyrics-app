import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import dummyImage from "../assets/images/dummyImage.JPG";
import penIcon from "../assets/icons/penIcon.svg";

export const GridView = () => {
  const cardData = [
    {
      title: "God is Light",
      description:
        "This is the message that we have heard of Him and we declare unto you",
      lyrics: "View",
      listen: "listen",
    },
    {
      title: "Hail The Most High",
      description: "You are the God in all the earth",
      lyrics: "View",
      listen: "listen",
    },
    {
      title: "Heavens React",
      description: "Teach us to live the anointed life ",
      lyrics: "View",
      listen: "listen",
    },
    {
      title: "Hail The Most High",
      description: "You are the God in all the earth",
      lyrics: "View",
      listen: "listen",
    },
    {
      title: "God is Light",
      description:
        "This is the message that we have heard of Him and we declare unto you",
      lyrics: "View",
      listen: "listen",
    },
    {
      title: "Heavens React",
      description: "Teach us to live the anointed life ",
      lyrics: "View",
      listen: "listen",
    },
    {
      title: "God is Light",
      description:
        "This is the message that we have heard of Him and we declare unto you",
      lyrics: "View",
      listen: "listen",
    },
    {
      title: "Hail The Most High",
      description: "You are the God in all the earth",
      lyrics: "View",
      listen: "listen",
    },
    {
      title: "Heavens React",
      description: "Teach us to live the anointed life ",
      lyrics: "View",
      listen: "listen",
    },
    {
      title: "Hail The Most High",
      description: "You are the God in all the earth",
      lyrics: "View",
      listen: "listen",
    },
    {
      title: "God is Light",
      description:
        "This is the message that we have heard of Him and we declare unto you",
      lyrics: "View",
      listen: "listen",
    },
    {
      title: "Heavens React",
      description: "Teach us to live the anointed life ",
      lyrics: "View",
      listen: "listen",
    },
  ];
  return (
    <>
      <SimpleGrid
        width={"90%"}
        columns={[1, 2, 3, 4]}
        spacing={6}
        justifyContent={"center"}
      >
        {cardData.map((card, index) => (
          <Card key={index} border={0} boxShadow={0}>
            <Image src={dummyImage} borderRadius="lg" p={4} />
            <CardHeader>
              <Heading size="md">{card.title}</Heading>
            </CardHeader>
            <CardBody pt={0}>
              <Text>{card.description}</Text>
            </CardBody>
            <CardFooter pt={0}>
              <Button
                variant={"outline"}
                height={"31px"}
                width={"67px"}
                borderRadius={"42px"}
                fontSize={"12px"}
                fontWeight={"600"}
                // rightIcon={}
              >
                {card.lyrics}
              </Button>
              <Button
                variant={"outline"}
                height={"31px"}
                width={"67px"}
                borderRadius={"42px"}
                fontSize={"12px"}
                fontWeight={"600"}
                ml={2}
              >
                {card.listen}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
};
