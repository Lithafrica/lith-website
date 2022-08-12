import { Stack, Link, useColorModeValue } from "@chakra-ui/react";
import { NAV_ITEMS } from "./navData";
import { LinkButton } from "@/components/LinkButton";
import React from "react";
import { useRouter } from "next/router";

export function DesktopNav(props) {
  const router = useRouter();
  const isActive = (link = "") => {
    if (link.length === 1) return router.pathname.length <= 1;
    return router.pathname.startsWith(link);
  };
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
            color={useColorModeValue("gray.800", "gray.200")}
          />
        );
      })}
    </Stack>
  );
}
