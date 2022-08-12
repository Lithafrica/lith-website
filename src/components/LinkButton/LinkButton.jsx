import React from "react";
import Link from "next/link";
import { Box } from "@chakra-ui/react";

function LinkButton({
  href,
  backgroundSize = "50%",
  backgroundColor = "#cbcbcb",
  label,
  color = "",
  ...rest
}) {
  return (
    <Link href={href}>
      <a>
        <Box
          backgroundPosition={"0 bottom, 0 bottom"}
          backgroundSize={backgroundSize}
          as={"span"}
          backgroundRepeat={"no-repeat"}
          backgroundImage={`linear-gradient(transparent calc(100% - 1px), ${backgroundColor} 1px), linear-gradient(transparent calc(100% - 1px), ${backgroundColor} 1px)`}
          transition={"all 1500ms cubic-bezier(0.23, 1, 0.32, 1)"}
          className="pt-3 pb-2 link w-fit"
          _hover={{ backgroundSize: "100%" }}
          color={color}
          {...rest}
        >
          {label}
        </Box>
      </a>
    </Link>
  );
}

export default LinkButton;