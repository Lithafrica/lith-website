import { Box, chakra } from "@chakra-ui/react";
import { default as NextImage } from "next/image";

const Image = chakra(NextImage, {
  baseStyle: { maxH: 120, maxW: 120 },
  shouldForwardProp: (prop) =>
    [
      "width",
      "height",
      "src",
      "alt",
      "layout",
      "quality",
      "placeholder",
      "blurDataURL",
      "loader ",
    ].includes(prop),
});

export const AppImage = ({
  src,
  alt,
  objectFit,
  objectPosition = "100% 100%",
  ...rest
}) => {
  return (
    <Box position="relative" {...rest}>
      <Image
        objectPosition={objectPosition}
        objectFit={objectFit || "cover"}
        layout="fill"
        src={src}
        alt={alt}
      />
    </Box>
  );
};
