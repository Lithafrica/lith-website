import React from "react";
import { Box } from "@chakra-ui/react";

export function BaseContainer({ children, ...rest }) {
  return (
    <Box maxW="84rem" w={"full"} mx={"auto"} {...rest}>
      {children}
    </Box>
  );
}
