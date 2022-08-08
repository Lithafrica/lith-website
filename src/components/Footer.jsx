import React from 'react';
import {Box, Flex, Text,Stack,chakra, VisuallyHidden, useColorModeValue} from "@chakra-ui/react";
import {BaseContainer} from "@/components/BaseContainer";
import Logo from "@/components/Logo";
import {NAV_ITEMS} from "@/components/Header/navData";
import { FaInstagram, FaMailchimp as BiMailSend , FaTwitter, FaFacebook } from 'react-icons/fa';
import {AppImage} from "@/components/AppImage";

 const SocialButton = ({children, label, href,}) => {
   return (    <chakra.button
                 bg={'white'}
                 color={'black'}
                 rounded={'full'}
                  w={'40px'}
                  h={'40px'}
                 cursor={'pointer'}
                  as={'a'}
                  href={href}
                  display={'inline-flex'}
                  alignItems={'center'}
                 justifyContent={'center'}
                  transition={'background 0.3s ease'}
                _hover={{
                   bg: 'green.600',
                    color:'whiteAlpha.800'
                 }}>
                {/*<VisuallyHidden>{label}</VisuallyHidden>*/}
               {children}
              </chakra.button>
 );};
function Footer() {
    return (
        <Box py={'105px'} mt={'100px'} bg={'#121417'} color={'white'} bottom={'0'}>
            <BaseContainer px={{ base: "24px", xl: "18px" }}>
                <Logo/>
                <Text mt={'34px'}>
                    We are building resilience in African university students and we are helping them reach
                    their highest potentials.
                </Text>
               <Box>
                   <Flex flexDirection={{ base: "column", lg: "row" }}
                         justifyContent={'start'}
                         alignItems={'start'}
                         gap={'123px'}
                         mt={'75px'}
                   >
                       <Box>
                           <Text fontSize={'lg'} >Contact</Text>
                           <Text my={'10px'}>
                               <Box as={'span'} color={'#83858a'}>Email: </Box><br></br>
                               <Box as={'span'} >lith.africa1@gmail.com</Box>
                           </Text>
                           <Text mb={'18px'}>
                               <Box as='span' color={'#83858a'}>Phone: </Box><br></br>
                               <Box as={'span'}>+233 550 86 1693</Box>
                           </Text>
                           <Text>
                               <Box as={'span'}  color={'#83858a'}>Address: </Box><br></br>
                               <Box as={'span'} >l1 University Avenue Berekuso, Eastern Region Ghana</Box>
                           </Text>
                       </Box>

                       <Box>
                           <Text fontSize={'lg'} >Company</Text>
                               {NAV_ITEMS.map((item) => (
                                   <Text href={item.link} key={'index'}   my={'15px'}>{item.label}</Text>
                               ))}
                       </Box>
                       <Box >
                           <Text fontSize={'md'}>Follow us</Text>
                           <Stack direction={'row'} spacing={6} mt={'8px'} mb={'34px'}>
                                   <SocialButton label={'Instagram'} href={'#'}>
                                       <FaInstagram />
                                   </SocialButton>

                                   <SocialButton label={'Facebook'} href={'#'}>
                                       <FaFacebook />
                                   </SocialButton>
                                   <SocialButton label={'Twitter'} href={'#'}>
                                       <FaTwitter />
                                   </SocialButton>
                           </Stack>
                           <Text fontSize={'4xl'}>Get The App</Text>
                           <Box as={'span'} >Start Your Journey to optimal wellness with Lith</Box>
                           <Stack  direction={'row'} spacing={8} mt={'18px'}>
                               <AppImage src={'/images/AppStore.png'} w={'100%'} h={'50px'} objectFit={'contain'}/>
                               <AppImage src={'/images/androidDownload.png'} w={'100%'} h={'50px'} objectFit={'contain'}/>
                           </Stack>

                       </Box>
                   </Flex>

                   <Box  mt={'34px'} maxWidth={'500px'}>
                       <AppImage src={'/images/p5.png'}  w={'100%'} h={'50px'} objectFit={'contain'}/>
                   </Box>
               </Box>
            </BaseContainer>

        </Box>
    );
}

export default Footer;











