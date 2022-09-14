import React from 'react';
import PageHeader from "@/components/PageHeader";
import AboutIntro from "@/screens/AboutScreen/components/AboutIntro";
import MissionVision from "@/screens/AboutScreen/components/MissionVision";
import OurTeam from "@/screens/AboutScreen/components/OurTeam";
export function AboutScreen() {
    return (
        <>
             <PageHeader objectPosition={'30% 30%'} image={'/images/aboutHeader.jpg'} introHead={'About Us'} introBody={'We are empowering individuals and positively impacting lives. We believe in the power of technology and its ability to be a transformative tool for change. \n'}/>
             <AboutIntro/>
             <MissionVision/>
             <OurTeam/>
        </>
    );
}

