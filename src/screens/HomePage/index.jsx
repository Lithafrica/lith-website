import Banner from "./components/Banner";
import HomeIntro from "./components/IntroSection";
import AppIntro from "@/screens/HomePage/components/AppIntro";
import Blog from "@/screens/HomePage/components/Blog";
import DownloadSection from "@/screens/HomePage/components/DownloadSection";
import {Box} from "@chakra-ui/react";
import {Assets} from "@/lib";
import React from "react";

export const HomePageScreen = () => {
  return (
    <>
      <Banner />
      <HomeIntro />
      <AppIntro />
      {/*<Blog />*/}
      <DownloadSection />
    </>
  );
};
