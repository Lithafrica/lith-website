import React from 'react';
import {BaseContainer} from "@/components/BaseContainer";
import {FadeInAnimation} from "@/components/FadeInAnimation";
import {Flex} from "@chakra-ui/react";
import SectionItem from './SectionItem'

const features = [
    {
        image: '/images/app1.svg',
        title: 'Find a Therapist',
        desc: ' In need of a Reputable Therapist but not sure where to \n' +
            '                            find one or who to ask for a recommendation. \n' +
            '                            With our Find-a-Therapist feature, get exclusive help from \n' +
            '                            our leading therapists in your \n' +
            '                            area of interest.',

    },
    {
        image: '/images/app2.svg',
        title: 'Regular Mental Health Reports',
        desc: 'By answering questions and recording your mood, you\'ll receive regular mental health reports detailing your symptoms and providing a synopsis of your emotional state.',
        reverse : true,
    },
    {
        image: '/images/app3.svg',
        title: 'Resources to Help',
        desc: 'LITH offers a wide range of recommended activities, guided meditations, sleep aids, and other resources to help you improve your overall well-being. \n',
    },
]


function FeatureSection() {
    return (
        <BaseContainer
            px={{ base: "24px", xl: "18px" }}>

            <FadeInAnimation>
                <Flex flexDirection={'column'}>
                    {features.map((item) => (
                        <SectionItem key={item.title} item={item}/>
                    ))}

                </Flex>
            </FadeInAnimation>
        </BaseContainer>
    );
}

export default FeatureSection;