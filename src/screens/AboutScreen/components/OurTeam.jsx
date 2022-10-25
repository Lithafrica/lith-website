import React, { useState, useEffect } from "react";
import { Box, Text, Flex, SimpleGrid } from "@chakra-ui/react";
import { AppImage } from "@/components/AppImage";
import { LinkButton } from "@/components/LinkButton";
import { BaseContainer } from "@/components/BaseContainer";
import { PhotoSwipe } from "react-pswp";
import "react-pswp/dist/index.css";
import { Teams } from "@/lib/teamData";
import { AspectRatio } from "@chakra-ui/react";

const container = Teams.map((el, i) => ({
  uid: i,
  src: el.img,
  msrc: el.img,
  w: 1000,
  h: 1000,
  title: el.about,
}));

function OurTeam() {
  const [index, setIndex] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <BaseContainer my={"100px"}>
      <Text
        mb={"32px"}
        fontSize="4xl"
        fontFamily={"heading"}
        fontWeight={"500"}
        px={{ base: "24px", xl: "18px" }}
      >
        Meet our Team
      </Text>
      <SimpleGrid
        columns={[2, null, null, 3]}
        spacingX={[1, 10]}
        spacingY={10}
        mx={6}
      >
        {Teams.map((item, index) => (
          <AspectRatio ratio={4 / 5}>
            <Box
              onClick={(e) => {
                e.preventDefault();
                setIndex(index);
                setOpen(true);
              }}
              position={"relative"}
              overflow={"hidden"}
              key={index}
              h={"full"}
              w={"full"}
            >
              <Box inset={"0"} position={"absolute"} overflow={"hidden"}>
                <AppImage h={"full"} w={"full"} src={item.img} />
              </Box>
              <Flex
                w={"full"}
                h={"full"}
                alignItems={"end"}
                position={"relative"}
              >
                <Box
                  width={"100%"}
                  backgroundColor={"#2b2c2ebf"}
                  px={"22px"}
                  pb={"20px"}
                  color={"white"}
                >
                  <Box cursor={"pointer"}>
                    <Text
                      my={"6px"}
                      fontSize={["16px", "23px"]}
                      fontFamily={"heading"}
                      fontWeight={"500"}
                    >
                      {item.name}
                    </Text>
                    <Flex mb={"6px"} justifyContent={"space-between"}>
                      <LinkButton
                        href={""}
                        label={item.role}
                        backgroundColor={"#48BB78"}
                      />
                    </Flex>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </AspectRatio>
        ))}
      </SimpleGrid>
      <PhotoSwipe
        container={container}
        onIndexChange={setIndex}
        onOpenChange={(isOpen) => {
          setOpen(isOpen);
        }}
        index={index}
        open={open}
        theme={{
          foreground: "#9a9a9a",
          background: "#0f0f0f",
        }}
      />
    </BaseContainer>
  );
}

export default OurTeam;
