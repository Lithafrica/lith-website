import "./styles/globals.scss";
import { theme } from "./theme";
import { ChakraProvider } from "@chakra-ui/react";
import { HomePageScreen } from "./screens/HomePage";
import { AboutScreen } from "@/screens/AboutScreen";
import { BlogScreen } from "@/screens/BlogScreen";
import { FeaturesScreen } from "@/screens/FeaturesScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Routes } from "@/lib";
import BlogContentScreen from "@/screens/BlogContentScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageScreen />,
  },
  { path: Routes.AboutUs, element: <AboutScreen /> },
  { path: Routes.research, element: <BlogScreen /> },
  { path: Routes.research + "/:id", element: <BlogContentScreen /> },
  { path: Routes.features, element: <FeaturesScreen /> },
]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
