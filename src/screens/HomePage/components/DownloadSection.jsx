import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { BaseContainer } from "@/components/BaseContainer";
import { FadeInAnimation } from "@/components/FadeInAnimation";
import { LinkButton } from "@/components/LinkButton";
import { AppImage } from "@/components/AppImage";

function DownloadSection() {
  return (
    <Box
      id={"DownloadSection"}
      position={"relative"}
      bg={"gray.900"}
      mt={"45px"}
    >
      <Box
        position={"absolute"}
        top={0}
        w={{ base: "100%", lg: "43%" }}
        h={"100%"}
        zIndex={5}
        left={0}
      >
        <AppImage src={"/images/downloadImg.jpg"} w={"100%"} h={"100%"} />
      </Box>
      <BaseContainer
        backgroundColor={{ base: "blackAlpha.700", md: "transparent" }}
        zIndex={"10"}
        position={"relative"}
      >
        <Flex
          minHeight={"600px"}
          w={{ base: "100%", lg: "72%", xl: "56%" }}
          h={"100%"}
          flexDirection={"row-reverse"}
          alignItems={"center"}
          ml={"auto"}
          py={{ base: "52px", md: "auto" }}
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
                Start Your{" "}
                <Box as={"span"} color={"#48BB78"}>
                  Journey
                </Box>{" "}
                to optimal wellness
                <Box as={"span"} color={"#48BB78"}>
                  {" "}
                  with LITH
                </Box>
                <br />{" "}
                <Box as={"span"} color={"#48BB78"}>
                  Take{" "}
                </Box>{" "}
                an Assessment
                <br />
                Connect to{" "}
                <Box as={"span"} color={"#48BB78"}>
                  a therapist
                  <br />
                </Box>
                <Box as={"span"} color={"#48BB78"}>
                  Join{" "}
                </Box>
                a Support Community
              </Text>
              <Text fontSize="lg" color={"brandGray"} py={"24px"}>
                You’re allowed to be human. Download LITH now and let’s
                centralize the focus back to you together.
              </Text>
              <Box
                as={"button"}
                color={"white"}
                bg={"#0e5141"}
                py={"3"}
                px={"6"}
                mt={"24px"}
                mr={"20px"}
              >
                Download For iOS
              </Box>

              <Box
                as={"button"}
                color={"white"}
                bg={"#0e5141"}
                py={"3"}
                px={"6"}
                mt={"24px"}
              >
                Download For Android
              </Box>
            </FadeInAnimation>
          </Box>
        </Flex>
      </BaseContainer>
    </Box>
  );
}

export default DownloadSection;
