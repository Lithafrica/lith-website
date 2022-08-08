import React from 'react';
import {Box} from "@chakra-ui/react";
import {BaseContainer} from "@/components/BaseContainer";
import BlogItem from "@/screens/BlogScreen/BlogItem";


const  blogData=[
    {
        title: `Building resilience and supporting student mental health`,
        name: `Jeanette Galan`,
        image: '/images/bl1.png',
        date: 'Sep 22, 2020 2 min read',
        desc: `The purpose of therapy is to help you become your own parent—journaling helps you do that.`,
    },
    {
        title: `Lith's top tips for managing exam and assignment stress and anxiety`,
        name: `Jeanette Galan`,
        image: '/images/bl1.png',
        date: 'Sep 22, 2020 2 min read',
        desc: `Sleep anxiety is the feeling of worry, nervousness, or unease associated with normal anxiety, except it occurs right before or during, sleep...`,
    },
    {
        title: `Using Meditation and Mindfulness to Help your Mental Health`,
        name: `Jeanette Galan`,
        image: '/images/bl1.png',
        date: 'Sep 22, 2020 2 min read',
        desc: `The purpose of therapy is to help you become your own parent—journaling helps you do that.`,
    },
    {
        title: `Rockstars vs Superstars — get to know your people`,
        name: `Jeanette Galan`,
        image: '/images/bl1.png',
        date: 'Sep 22, 2020 2 min read',
        desc: `The purpose of therapy is to help you become your own parent—journaling helps you do that.`,
    },
    {
        title: `Journaling and therapy have more in common than you think`,
        name: `Jeanette Galan`,
        image: '/images/bl1.png',
        date: 'Sep 22, 2020 2 min read',
        desc: `The purpose of therapy is to help you become your own parent—journaling helps you do that.`,
    },
    {
        title: `Journaling and therapy have more in common than you think`,
        name: `Jeanette Galan`,
        image: '/images/bl1.png',
        date: 'Sep 22, 2020 2 min read',
        desc: `The purpose of therapy is to help you become your own parent—journaling helps you do that.`,
    },
]
export function BlogScreen(props) {
    return (
       <Box>
           <BlogItem item={{
               title: `Journaling and therapy have more in common than you think`,
               name: `Jeanette Galan`,
               image: '/images/bl1.png',
               date: 'Sep 22, 2020 2 min read',
               desc: `The purpose of therapy is to help you become your own parent—journaling helps you do that.`,
           }}/>
           <BaseContainer py={'45px'}>
               {blogData.map((item , index) => (<BlogItem key={index} item={item}/>))}
           </BaseContainer>
       </Box>
    );
}
