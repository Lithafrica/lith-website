import React from "react";
import PageHeader from "@/components/PageHeader";
import { BaseContainer } from "@/components/BaseContainer";
import { FadeInAnimation } from "@/components/FadeInAnimation";
import { Box, Text } from "@chakra-ui/react";
import FeatureSection from "@/screens/FeaturesScreen/components/FeatureSection";
import { Assets } from "@/lib";
export function FeaturesScreen(props) {
  return (
    <>
      <PageHeader
        image={Assets.howItWorks}
        introHead={"The Idea Behind LITH"}
        introBody={
          "LITH uses a centralized technology system to solve problems such as major depressive disorder, anxiety, eating disorders, and self-image issues in University students."
        }
      />
      <BaseContainer px={["18px", "16px", "2%"]} py={"75px"}>
        <FadeInAnimation>
          <Text fontSize="4xl" fontFamily={"heading"} fontWeight={"500"}>
            Curbing depression in African University students
          </Text>
          <Text fontSize={"md"} mt="7" mb={"20px"}>
            The app is equipped with licenced therapists that are available for
            the students to chat with in the event the student needs an
            additional layer of support. The system issues push notifications to
            suggest behavioural changes, activities, and positive messaging to
            help improve the overall mental well-being of the user.
          </Text>
          <Text fontSize={"md"} mt="7" mb={"20px"}>
            LITH is also using the social network concept to boost personal
            growth and to make it more centralized to solve mental health
            issues. Unlike any other mental health apps, LITH has support groups
            moderated by our A.I systems to provide maximum support for the
            student’s mental health.
          </Text>
        </FadeInAnimation>
      </BaseContainer>
      <FeatureSection />
    </>
  );
}
