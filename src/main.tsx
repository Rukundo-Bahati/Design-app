import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import "./index.css";

// Define your custom theme
const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "var(--color-bg)", // Use your custom background color
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
