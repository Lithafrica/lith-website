import React from "react";
import { Text, Box, Flex } from "@chakra-ui/react";
import { AppImage } from "@/components/AppImage";
import { BaseContainer } from "@/components/BaseContainer";
import { FadeInAnimation } from "@/components/FadeInAnimation";

const blogdata = [
  {
    title: `Rockstars vs Superstars — get to know your people`,
    name: `Jeanette Galan`,
    image: "/images/blog1.png",
    date: "Sep 22, 2020 2 min read",
    desc: `The purpose of therapy is to help you become your own parent—journaling helps you do that.`,
  },
  {
    title: `Rockstars vs Superstars — get to know your people`,
    name: `Jeanette Galan`,
    image: "/images/blog2.webp",
    date: "Sep 22, 2020 2 min read",
    desc: `The purpose of therapy is to help you become your own parent—journaling helps you do that.`,
  },
  {
    title: `Journaling and therapy have more in common than you think`,
    name: `Jeanette Galan`,
    image: "/images/blog3.jpeg",
    date: "Sep 22, 2020 2 min read",
    desc: `The purpose of therapy is to help you become your own parent—journaling helps you do that.`,
  },
];

function Blog() {
  return (
    <BaseContainer px={{ base: "24px", xl: "18px" }} py={"60px"}>
      <FadeInAnimation>
        <Text fontSize={"25px"}>Research</Text>
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          justifyContent={{ lg: "space-evenly", xl: "space-between" }}
          pt={"65px"}
        >
          {blogdata.map((item) => (
            <Box
              mb={"50px"}
              maxW={{ lg: "310px", xl: "400px" }}
              key={item.title}
            >
              <AppImage src={item.image} h={"400px"} w={"full"} />
              <Text fontFamily={"subtitle"} fontWeight={"500"} my={"22px"}>
                {item.title}
              </Text>
              <div my={"20px"}>{item.desc}</div>
            </Box>
          ))}
        </Flex>
      </FadeInAnimation>
    </BaseContainer>
  );
}

export default Blog;
