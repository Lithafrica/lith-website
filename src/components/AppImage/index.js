import { Box } from "@chakra-ui/react";

export const AppImage = ({
  src,
  alt,
  objectFit,
  objectPosition = "100% 100%",
  ...rest
}) => {
  return (
    <Box 
      overflow={'hidden'} position="relative" {...rest}
         as='img'
        objectPosition={objectPosition}
        objectFit={objectFit || "cover"}
        layout="fill"
        src={src}
        alt={alt}
      />
  );
};
