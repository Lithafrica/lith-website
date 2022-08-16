import React from "react";
import { AppImage } from "@/components/AppImage";
import { Box, Text, Flex } from "@chakra-ui/react";
import { BaseContainer } from "@/components/BaseContainer";
import { FadeInAnimation } from "@/components/FadeInAnimation";

function PageHeader({
  image,
  objectPosition,
  textColor = "white",
  introHead,
  introBody,
}) {
  return (
    <Box position={"relative"}>
      <Box position={"absolute"} top={0} w={"100%"} h={"100%"} zIndex={5}>
        <AppImage
          objectPosition={objectPosition}
          src={image}
          w={"100vw"}
          h={"100%"}
        />
      </Box>

      <BaseContainer px={["8px", "16px", "2%"]}>
        <Flex
          w={{ base: "100%", lg: "72%", xl: "56%" }}
          h={"100%"}
          minHeight={"450px"}
          position={"relative"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"start"}
          zIndex={"10"}
        >
          <FadeInAnimation>
            <Text
              color={textColor}
              fontSize="4xl"
              fontWeight="500"
              fontFamily={"heading"}
            >
              {introHead}
            </Text>
            <Text color={textColor}>{introBody}</Text>
          </FadeInAnimation>
        </Flex>
      </BaseContainer>
    </Box>
  );
}

export default PageHeader;
