// import React , {Fragment} from 'react'
import Header from '../components/Header'
import {Box, useColorModeValue} from "@chakra-ui/react";
import Footer from '../components/Footer'

function AppLayout(props) {
    const bg=useColorModeValue('white', 'gray.800' )
  return (
    <Box bg={bg}>
      <Header/>
      <div className={'mt-14'}>{props.children}</div>
      <Footer />
    </Box>
  )
}

export default AppLayout