import React from 'react';
import {BaseContainer} from "@/components/BaseContainer";
import {FadeInAnimation} from "@/components/FadeInAnimation";
import {Flex} from "@chakra-ui/react";
import SectionItem from './SectionItem'

const features = [
    {
        image: '/images/feature.webp',
        title: 'Find a Therapist',
        desc: ' In need of a Reputable Therapist but not sure where to \n' +
            '                            find one or who to ask for a recommendation. \n' +
            '                            With our Find-a-Therapist feature, get exclusive help from \n' +
            '                            our leading therapists in your \n' +
            '                            area of interest.',

    },
    {
        image: '/images/feature.webp',
        title: 'Regular Mental Health Reports',
        desc: 'By answering questions and recording your mood, you\'ll receive regular mental health reports detailing your symptoms and providing a synopsis of your emotional state.',
        reverse : true,
    },
    {
        image: '/images/feature.webp',
        title: 'Resources to Help',
        desc: ' Lith offers a wide range of courses, guided meditations, sleep aids, and other resources to help you improve your emotional health .',
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