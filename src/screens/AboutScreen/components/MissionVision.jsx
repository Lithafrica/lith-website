import React from 'react';
import {Box, Flex, VStack} from "@chakra-ui/react";
import {AppImage} from "@/components/AppImage";
import {FadeInAnimation} from "@/components/FadeInAnimation";
import {LinkButton} from "@/components/LinkButton";
import {BaseContainer} from "@/components/BaseContainer";
import TextUnderline from "@/components/TextUnderline";

const Data = [
    {
        title: 'Mission', desc: `  We are on a mission to improve the mind health and wellbeing of individuals in
                                        Africa.
                                        Our work is inspired by the satisfaction we get from empowering individuals and
                                        positively impacting lives.`
    },
    {
        title: 'Vision', desc: ` To create multiple tech enabled support systems to guide individuals on the
                                        continent to
                                        greater experiences of wellbeing from a world that demands so much.`
    },
    {
        title: 'Why Choose Us', desc: ` We believe that everyone deserves to live their most optimal life, despite
                                        life’s
                                        demands and subsequently technology should help in make that easier to attain.`
    }
]

function AppIntro() {
    return (
        <Box position={'relative'}>
            <Box
                position={'absolute'}
                top={0}
                w={{base: '100%'}}
                h={'100%'}
                zIndex={5}
                right={0}
            >
                <AppImage objectPosition={'30% 30%'} src={'/images/aboutVision.jpg'} w={'100%'} h={'100%'}/>
            </Box>
            <BaseContainer >
                <Flex
                    bg={'gray.900'}
                    color={'white'}
                    minHeight={'600px'}
                    w={{base: '100%', lg: '72%', xl: '46%'}}
                    h={'100%'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    zIndex={'10'}
                    position={'relative'}
                >
                    <Box maxWidth={{base : '100%' , md : '600px'}} w={'100%'}>
                            <VStack alignItems={'start'} spacing={'20px'}  px={'100px'} py={'70px'}>
                                {Data.map((item, index) => {
                                    return <Box key={index}>
                                        <FadeInAnimation>
                                        <TextUnderline fontFamily={'subtitle'} fontSize={'20px'}
                                                       fontWeight={'500'}>{item.title}</TextUnderline>
                                        <p className="text text_dark pt-5">
                                            {item.desc}
                                        </p>
                                        </FadeInAnimation>
                                    </Box>
                                })}
                            </VStack>
                    </Box>
                </Flex>
            </BaseContainer>
        </Box>
    );
}

export default AppIntro;
