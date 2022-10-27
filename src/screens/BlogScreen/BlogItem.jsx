import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { FadeInAnimation } from "@/components/FadeInAnimation";
import { AppImage } from "@/components/AppImage";
import { LinkButton } from "@/components/LinkButton";
import { Routes } from "@/lib";

function BlogItem({ item }) {
  const {} = item;
  return (
    <Box py={"35px"}>
      <FadeInAnimation>
        <Flex
          flexDirection={["column", null, "row"]}
          justifyContent={"start"}
          alignItems={"center"}
        >
          <AppImage
            src={"/images/blog2.webp"}
            h={"400px"}
            w={"50%"}
            flexGrow={"0"}
          />
          <Box pl={"50px"} maxW={"550px"}>
            <Text
              fontFamily={"heading"}
              fontWeight={"500"}
              my={"22px"}
              fontSize={"2xl"}
            >
              LITH's top tips for managing exam and assignment stress and
              anxiety
            </Text>
            <Text fontFamily={"body"} fontWeight={"500"} my={"20px"}>
              Sleep anxiety is the feeling of worry, nervousness, or unease
              associated with normal anxiety, except it occurs right before or
              during, sleep...
            </Text>
            <LinkButton
              href={`${Routes.research}/${item.id}`}
              label={"Read More"}
            />
          </Box>
        </Flex>
      </FadeInAnimation>
    </Box>
  );
}

export default BlogItem;
