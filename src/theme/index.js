import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: "UberMoveText-Regular, system-ui, sans-serif",
    heading: "UberMove-Medium, system-ui, sans-serif",
    subtitle: "UberMoveText-Medium, system-ui, sans-serif",
  },
  colors: {
    discord: "#7289da",
    brandGray: "#9a9a9a", //'#83858a'
    brand100: "#48BB78",
  },
  shadows: {
    largeSoft: "rgba(60, 64, 67, 0.15) 0px 2px 10px 6px;",
  },
  styles: {
    global: {
      "html, #__next": {
        height: "100%",
      },
      "#__next": {
        display: "flex",
        flexDirection: "column",
      },
      body: {
        overflowX: "hidden",
        overflowY: "scroll", // Always show scrollbar to avoid flickering
      },
      html: {
        scrollBehavior: "smooth",
      },
      "#nprogress": {
        pointerEvents: "none",
      },
      "#nprogress .bar": {
        background: "green.200",
        position: "fixed",
        zIndex: "1031",
        top: 0,
        left: 0,
        width: "100%",
        height: "2px",
      },
    },
  },
});
