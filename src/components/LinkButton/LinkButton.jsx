import React from "react";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function LinkButton({
  href,
  backgroundSize = "50%",
  backgroundColor = "#cbcbcb",
  label,
  useLink = true,
  color = "",
  ...rest
}) {
  const Component = () => {
    return (
      <Box
        backgroundPosition={"0 bottom, 0 bottom"}
        backgroundSize={backgroundSize}
        as={"span"}
        backgroundRepeat={"no-repeat"}
        backgroundImage={`linear-gradient(transparent calc(100% - 1px), ${backgroundColor} 1px), linear-gradient(transparent calc(100% - 1px), ${backgroundColor} 1px)`}
        transition={"all 1500ms cubic-bezier(0.23, 1, 0.32, 1)"}
        pt={3}
        pb={2}
        width={"fit-content"}
        _hover={{ backgroundSize: "100%" }}
        color={color}
        {...rest}
      >
        {label}
      </Box>
    );
  };

  return href && useLink ? (
    <Link to={href}>
      <Component />
    </Link>
  ) : (
    <a href={href}>
      <Component />
    </a>
  );
}

export default LinkButton;
