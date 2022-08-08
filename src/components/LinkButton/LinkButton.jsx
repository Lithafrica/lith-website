import React from "react";
import Link from "next/link";
import { Box } from "@chakra-ui/react";

function LinkButton({ href, label, color }) {
  return (
    <Link href={href}>
      <a>
        <Box
          backgroundPosition={"0 bottom, 0 bottom"}
          backgroundSize={"50%"}
          as={"span"}
          backgroundRepeat={"no-repeat"}
          backgroundImage={
            "linear-gradient(transparent calc(100% - 1px), #cbcbcb 1px),\n" +
            "  linear-gradient(transparent calc(100% - 1px), #cbcbcb 1px)"
          }
          transition={"all 1500ms cubic-bezier(0.23, 1, 0.32, 1)"}
          className="pt-3 pb-2 link w-fit"
          _hover={{ backgroundSize: "100%" }}
          color={color || ""}
        >
          {label}
        </Box>
      </a>
    </Link>
  );
}

export default LinkButton;
