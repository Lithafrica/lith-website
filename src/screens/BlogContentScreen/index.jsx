import React from "react";
import {Box, Text} from "@chakra-ui/react";
import {BaseContainer} from "@/components/BaseContainer";
import {AppImage} from "@/components/AppImage";

function BlogContent() {
  return (
        <Box maxWidth={'1200px'}  mx={'auto'} mt={'65px'}>
          <AppImage src={'/images/blog2.webp'} h={'400px'} w={'100%'}/>
          <Box mx={{base:'24px', lg:'auto'}}>
            <Text fontSize={'4xl'} mt={'25px'} mb={'45px'}>Lith's top tips for managing exam and assignment stress and anxiety</Text>
              <Text>
                  Sleep anxiety is the feeling of worry, nervousness,
                  or unease associated with normal anxiety,
                  except it occurs right before or during, sleep...
                  Sleep anxiety is the feeling of worry, nervousness,
                  or unease associated with normal anxiety,
                  except it occurs right before or during, sleep...<br/><br/>
                  Sleep anxiety is the feeling of worry, nervousness, or unease associated with normal anxiety, except it occurs right before or during, sleep... Sleep anxiety is the feeling of worry, nervousness, or unease associated with normal anxiety, except it occurs right before or during, sleep... Sleep anxiety is the feeling of worry, nervousness, or unease associated with normal anxiety, except it occurs right before or during, sleep... Sleep anxiety is the feeling of worry, nervousness, or unease associated with normal anxiety, except it occurs right before or during, sleep... Sleep anxiety is the feeling of worry, nervousness, or unease associated with normal anxiety, except it occurs right before or during, sleep... Sleep anxiety is the feeling of worry, nervousness, or unease associated with normal anxiety, except it occurs right before or during, sleep...
                  <br/><br/>
                  Sleep anxiety is the feeling of worry, nervousness, or unease associated with normal anxiety, except it occurs right before or during, sleep... Sleep anxiety is the feeling of worry, nervousness, or unease associated with normal anxiety, except it occurs right before or during, sleep... Sleep anxiety is the feeling of worry, nervousness, or unease associated with normal anxiety, except it occurs right before or during, sleep... Sleep anxiety is the feeling of worry, nervousness, or unease associated with normal anxiety, except it occurs right before or during, sleep... Sleep anxiety is the feeling of worry, nervousness, or unease associated with normal anxiety, except it occurs right before or during, sleep... Sleep anxiety is the feeling of worry, nervousness, or unease associated with normal anxiety, except it occurs right before or during, sleep...
              </Text>
          </Box>
        </Box>
  );
}

export default BlogContent;
