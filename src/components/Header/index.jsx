import React from "react";
import {
  Box,
  Flex,
  Stack,
  IconButton,
  useColorModeValue,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { BaseContainer } from "@/components/BaseContainer";
import { IoMoon, IoSunny } from "react-icons/io5";
import Logo from "../Logo";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "@/components/Header/MobileNav";

export default function Header() {
  const { isOpen: isMobileNavOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Flex
        as={"header"}
        pos="fixed"
        top="0"
        w={"full"}
        minH={"60px"}
        boxShadow={"sm"}
        zIndex="999"
        justify={"center"}
        css={{
          backdropFilter: "saturate(180%) blur(5px)",
          backgroundColor: useColorModeValue(
            "rgba(255, 255, 255, 0.8)",
            "rgba(26, 32, 44, 0.8)"
          ),
        }}
      >
        <BaseContainer
          px={{ base: "10px", md: "0px" }}
          as={Flex}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            justify={{ base: "start", md: "start" }}
          >
            <Logo />
          </Flex>

          <Stack
            direction={"row"}
            align={"center"}
            spacing={{ base: 0, md: 8 }}
            flex={{ base: 1, md: "auto" }}
            justify={"flex-end"}
          >
            <DesktopNav display={{ base: "none", md: "flex" }} />
            <IconButton
              size={"sm"}
              variant={"ghost"}
              aria-label={"Toggle Color Mode"}
              onClick={toggleColorMode}
              icon={
                colorMode == "light" ? (
                  <IoMoon size={18} />
                ) : (
                  <IoSunny size={18} />
                )
              }
            />
            <IconButton
              display={{ base: "block", md: "none" }}
              onClick={onToggle}
              icon={
                isMobileNavOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              size={"sm"}
              aria-label={"Toggle Navigation"}
            />
          </Stack>
          <MobileNav isOpen={isMobileNavOpen} />
        </BaseContainer>
      </Flex>
    </Box>
  );
}
