import { Stack, useColorModeValue } from "@chakra-ui/react";
import { NAV_ITEMS } from "./navData";
import { LinkButton } from "@/components/LinkButton";
import React from "react";
import { useNavigation } from "react-router-dom";

export function DesktopNav(props) {
  const navigation = useNavigation();

  const isActive = (link = "") => {
    // if (link.length === 1) return navigation.location.pathname.length <= 1;
    // return navigation.location.pathname.startsWith(link);
  };
  const textColor = useColorModeValue("gray.800", "gray.200")
  return (
    <Stack direction={"row"} spacing={8} {...props}>
      {NAV_ITEMS.map((navItem) => {
        return (
          <LinkButton
            label={navItem.label}
            backgroundSize={isActive(navItem.link) ? "50%" : "0%"}
            backgroundColor={"#48BB78"}
            key={navItem.link}
            href={navItem.link ?? "#"}
            fontSize={"sm"}
            fontWeight={"bold"}
            color={textColor}
          />
        );
      })}
    </Stack>
  );
}
