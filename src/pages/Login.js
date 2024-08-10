import { Box, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import backgroundImage from "../assets/images/dummyImage.JPG";

const Login = () => {
  return (
    <>
      <Box
        w="100vw"
        h="100vh"
        backgroundImage={`url(${backgroundImage})`}
        backgroundSize="cover"
        backgroundPosition="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0, 0, 0, 0.8)"
          zIndex="1"
        />
        <Box
          position="relative"
          zIndex="2"
          display="flex"
          //   alignItems="center"
          justifyContent="space-between"
          height="100%"
          width="90%"
          pt={8}
        >
          <Box
            w={"50%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box h={"162px"} w={"452px"}>
              <Text color={"#fff"} fontSize={48} fontWeight={600}>
                Welcome to
              </Text>
              <Text color={"#fff"} fontSize={80} fontWeight={700}>
                OneLyrics
              </Text>
            </Box>
          </Box>
          <Box
            w={"50%"}
            display={"Flex"}
            justifyContent={"Center"}
            alignItems={"center"}
          >
            <Box
              w={"500px"}
              h={"80%"}
              backgroundColor={"#fff"}
              borderRadius={8}
            >
              <Text>Welcome to</Text>
              <Text>OneLyrics</Text>
            </Box>
          </Box>

          {/* Your login form or other content here */}
        </Box>
      </Box>
    </>
  );
};

export default Login;
