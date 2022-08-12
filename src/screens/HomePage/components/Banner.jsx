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
                <Text as={"span"} color={"brand100"}>
                  positive{" "}
                </Text>
                best friend that fits into your hands
                <Text as={"span"} color={"brand100"}>
                  {" "}
                  everywhere{" "}
                </Text>
                you go.
              </h1>
            </Text>
            <Text fontSize="lg" color={"gray.200"} pb={34} pt="20px">
              We are building resilience in African university students and we
              are helping them reach their highest potentials.
            </Text>
            <Box
              href={"#DownloadSection"}
              as={"a"}
              color={"white"}
              bg={"#0e5141"}
              py={"3"}
              px={"6"}
              mt={"34px"}
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
