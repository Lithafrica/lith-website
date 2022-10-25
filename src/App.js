import "./styles/globals.scss";
import { theme } from "./theme";
import { ChakraProvider } from "@chakra-ui/react";
import { HomePageScreen } from "./screens/HomePage";
import { AboutScreen } from "@/screens/AboutScreen";
import { FeaturesScreen } from "@/screens/FeaturesScreen";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageScreen />,
  },
  { path: "/about-us", element: <AboutScreen /> },
  { path: "/features", element: <FeaturesScreen /> },
]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
