import {Box, Flex, Text} from "@chakra-ui/react";
import {AppImage} from "@/components/AppImage";
import {FadeInAnimation} from "@/components/FadeInAnimation";


export default function SectionItem({item}) {
    const {reverse = false , desc ,image , title } = item ;
    return <Box>
        <FadeInAnimation>
            <Flex
                flexDirection={["column", null , null, reverse ? "row-reverse" : 'row']}
                py={"15px"}
                alignItems={'center'}
            >

                <Box paddingLeft={{lg : reverse ? '12px' : '0px'}}>
                    <Text textAlign={'center'}  fontFamily={"heading"} fontWeight={"500"} my={"22px"} fontSize={'4xl'}>{title}</Text>
                    <Text fontFamily={"body"} fontWeight={"500"} textAlign={'left'} >{desc}</Text>
                </Box>
                <AppImage
                    objectPosition={{base : 'center' , lg : reverse ? 'left' : 'right'}}
                    minHeight={"500px"} src={image} h={"100%"} w={"100%"} objectFit={'contain'}/>
            </Flex>
        </FadeInAnimation>

    </Box>;
}
