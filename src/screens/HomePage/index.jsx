import Banner from "./components/Banner";
import HomeIntro from "./components/IntroSection";
import AppIntro from "@/screens/HomePage/components/AppIntro";
import DownloadSection from "@/screens/HomePage/components/DownloadSection";
import {Box , Text} from "@chakra-ui/react";
import {Assets} from "@/lib";
import React from "react";
import {BaseContainer} from "@/components/BaseContainer";
import AppLayout from "@/layout/AppLayout";
export const HomePageScreen = () => {
  return (
    <AppLayout>
      <Banner />
      <HomeIntro />
      <AppIntro />
      <DownloadSection />
        <BaseContainer mt={'100px'}>
            <Text fontWeight={'bold'} fontSize="lg" textAlign={'center'} mb={'40px'}>Featured In</Text>
            <Box mx={'auto'} zIndex={'6'} as={'img'} src={Assets.fastCompany} h={'300px'} width={'300px'}/>
        </BaseContainer>
    </AppLayout>
  );
};
