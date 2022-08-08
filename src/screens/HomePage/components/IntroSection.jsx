import { Flex, Text, Box } from "@chakra-ui/react";
import React from "react";
import { FadeInAnimation } from "@/components/FadeInAnimation";
import { AppImage } from "@/components/AppImage";
import { LinkButton } from "@/components/LinkButton";
import { BaseContainer } from "@/components/BaseContainer";
import { Routes } from "@/lib";

function HomeIntro() {
  return (
    <BaseContainer px={{ base: "24px", xl: "18px" }} py={"75px"}>
      <FadeInAnimation>
        <Text
          fontSize={{ base: "3xl", md: "4xl" }}
          fontFamily={"heading"}
          fontWeight={"500"}
        >
          Changing the Face of Mental Health in Africa
        </Text>
        <Text
          maxW={{ base: "100%", lg: "80%" }}
          fontSize={"lg"}
          mt="7"
          mb={"20px"}
        >
          We’re on a mission to change the face of mental health in Africa. Our
          work is inspired by the satisfaction we get from empowering
          individuals and positively impacting lives. We want to centralize the
          focus back to the individual, giving the student the chance to monitor
          his/her own life.
        </Text>
      </FadeInAnimation>
      <FadeInAnimation>
        <Flex
          flexDirection={["column", null, "row"]}
          rowGap={"34px"}
          columnGap={"78px"}
          py={"65px"}
        >
          {services.map((item) => (
            <Box textAlign={{ base: "center", md: "start" }} key={item.title}>
              <AppImage
                src={item.image}
                h={"200px"}
                w={"full"}
                objectPosition={"50% 50%"}
                objectFit={"contain"}
              />
              <Text
                fontFamily={"subtitle"}
                fontWeight={"500"}
                mt={"32px"}
                mb={"22px"}
              >
                {item.title}
              </Text>
              <Text fontSize={"lg"} my={"20px"}>
                {item.desc}
              </Text>
            </Box>
          ))}
        </Flex>
        <LinkButton href={Routes.AboutUs} label={"Learn more"} />
      </FadeInAnimation>
    </BaseContainer>
  );
}

export default HomeIntro;

const services = [
  {
    image: "/images/img1.png",
    title: "Put People First",
    desc: "Putting people first gives us a deep sense of meaning. People are at the heart of who we are & what we do.",
  },
  {
    image: "/images/img2.png",
    title: "Safe & Inclusive",
    desc: "We work around the clock to create a digital space that is safe and inclusive for everyone.",
  },
  {
    image: "/images/img.png",
    title: "Balanced Lifestyle & Overall Wellness",
    desc: "The purpose of our therapy is to help you achieve a balanced lifestyle",
  },
];
