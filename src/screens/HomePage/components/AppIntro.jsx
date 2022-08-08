import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { AppImage } from "@/components/AppImage";
import { FadeInAnimation } from "@/components/FadeInAnimation";
import { LinkButton } from "@/components/LinkButton";
import { BaseContainer } from "@/components/BaseContainer";
import { Routes } from "@/lib";
import TextUnderline from "@/components/TextUnderline";

function AppIntro() {
  return (
    <Box position={"relative"} bg={"gray.900"} mt={"45px"}>
      <Box
        position={"absolute"}
        top={0}
        w={{ base: "100%", lg: "50%" }}
        h={"100%"}
        zIndex={5}
        right={0}
      >
        <AppImage src={"/images/homeImg.jpg"} w={"100%"} h={"100%"} />
      </Box>
      <BaseContainer
        backgroundColor={{ base: "blackAlpha.900", xl: "transparent" }}
        zIndex={"10"}
        position={"relative"}
      >
        <Flex
          minHeight={"600px"}
          w={{ base: "100%", xl: "56%" }}
          h={"100%"}
          flexDirection={"column"}
          justifyContent={"center"}
          zIndex={"10"}
          position={"relative"}
          px={{ base: "24px", xl: "18px" }}
        >
          <Box maxWidth={"600px"} w={"100%"}>
            <FadeInAnimation>
              <Text
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="500"
                fontFamily={"heading"}
                color={"white"}
              >
                The <TextUnderline>App</TextUnderline> Designed <br />
                for People Seeking <TextUnderline>Help</TextUnderline>.
              </Text>
              <Text fontSize="lg" color={"brandGray"} py={"24px"}>
                Lith provides a centralized platform for solving problems such
                as major depressive disorder, anxiety, eating disorders, and
                self-image issues in University students. If you have no time to
                go for your counselling session or you’re in too much distress,
                you can use Lith to reach a therapist anytime, anywhere.
              </Text>
              <LinkButton
                href={Routes.features}
                label={"Learn more"}
                color={"white"}
              />
            </FadeInAnimation>
          </Box>
        </Flex>
      </BaseContainer>
    </Box>
  );
}

export default AppIntro;
