import Banner from "./components/Banner";
import HomeIntro from "./components/IntroSection";
import AppIntro from "@/screens/HomePage/components/AppIntro";
import Blog from "@/screens/HomePage/components/Blog";
import DownloadSection from "@/screens/HomePage/components/DownloadSection";

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
