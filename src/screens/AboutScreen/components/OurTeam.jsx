import React, { useState, useEffect } from "react";
import { Box, Text, Flex, useColorModeValue } from "@chakra-ui/react";
import { AppImage } from "@/components/AppImage";
import { LinkButton } from "@/components/LinkButton";
import { BaseContainer } from "@/components/BaseContainer";
import { PhotoSwipe } from "react-pswp";
import "react-pswp/dist/index.css";
import { Teams } from "@/lib/teamData";

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

  useEffect(() => {
    if (!open && index !== null) setOpen(true);
  }, [index]);

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
      <div
        className={
          "grid gap-x-10 gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        }
      >
        {Teams.map((item, index) => (
          <Box
            onClick={() => setIndex(index)}
            position={"relative"}
            overflow={"hidden"}
            key={index}
          >
            <Box inset={"0"} position={"absolute"}>
              <AppImage h={"full"} w={"full"} src={item.img} />
            </Box>
            <Flex alignItems={"end"} position={"relative"} minH={"559px"}>
              <Box
                width={"100%"}
                backgroundColor={"#2b2c2ebf"}
                px={"22px"}
                pb={"20px"}
                color={"white"}
              >
                <Box>
                  <Text
                    my={"6px"}
                    fontSize="23px"
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
        ))}
      </div>
      <PhotoSwipe
        container={container}
        onIndexChange={setIndex}
        onOpenChange={setOpen}
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
