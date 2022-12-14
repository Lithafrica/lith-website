import React, { useLayoutEffect } from "react";
import Header from "../components/Header";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Footer from "../components/Footer";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
function AppLayout(props) {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  const bg = useColorModeValue("white", "gray.800");
  return (
    <Box bg={bg}>
      <Header />
      <div className={"mt-14"}>{props.children}</div>
      <Footer />
    </Box>
  );
}

export default AppLayout;
