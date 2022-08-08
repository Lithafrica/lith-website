import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { AppImage } from "@/components/AppImage";
import { FadeInAnimation } from "@/components/FadeInAnimation";
import { BaseContainer } from "@/components/BaseContainer";
import TextUnderline from "@/components/TextUnderline";
import { Assets } from "@/lib";

function Banner() {
  return (
    <Box position={"relative"}>
      <Box position={"absolute"} inset={0} zIndex={5}>
        <AppImage
          objectPosition={{ base: "50% 50%", md: "0% 0%" }}
          src={Assets.aboutHeader}
          w={"100%"}
          h={"100%"}
        />
      </Box>
      <BaseContainer
        zIndex={"10"}
        py={"150px"}
        position={"relative"}
        backgroundColor={{ base: "blackAlpha.500", md: "transparent" }}
      >
        <Box
          w={{ base: "100%", lg: "72%", xl: "56%" }}
          maxWidth={"700px"}
          px={{ base: "24px", xl: "18px" }}
        >
          <FadeInAnimation>
            <Text
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight="500"
              fontFamily={"heading"}
            >
              <h1 className="text-white">
                LITH, the{" "}
                <TextUnderline
                  lineColor={"green.900"}
                  as={"span"}
                  color={"green.300"}
                >
                  positive{" "}
                </TextUnderline>
                best friend that fits into your hands
                <TextUnderline
                  lineColor={"green.900"}
                  as={"span"}
                  color={"green.300"}
                >
                  {" "}
                  everywhere{" "}
                </TextUnderline>
                you go.
              </h1>
            </Text>
            <Text fontSize="lg" color={"gray.200"} py="20px">
              We are building resilience in African university students and we
              are helping them reach their highest potentials.
            </Text>
            <Box
              as={"button"}
              color={"white"}
              bg={"#0e5141"}
              py={"3"}
              px={"6"}
              mt={"24px"}
            >
              Download LITH Now
            </Box>
          </FadeInAnimation>
        </Box>
      </BaseContainer>
    </Box>
  );
}

export default Banner;
