import Banner from "./components/Banner";
import HomeIntro from "./components/IntroSection";
import AppIntro from "@/screens/HomePage/components/AppIntro";
import Blog from "@/screens/HomePage/components/Blog";
import DownloadSection from "@/screens/HomePage/components/DownloadSection";
import {Box} from "@chakra-ui/react";
import {Assets} from "@/lib";
import React from "react";
import {BaseContainer} from "@/components/BaseContainer";

export const HomePageScreen = () => {
  return (
    <>
      <Banner />
      <HomeIntro />
      <AppIntro />
      {/*<Blog />*/}
      <DownloadSection />
        <BaseContainer mt={'100px'}>
            <Box mx={'auto'} zIndex={'6'} as={'img'} src={Assets.fastCompany} h={'300px'} width={'300px'}/>
        </BaseContainer>
    </>
  );
};
