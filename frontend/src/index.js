import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import ChatProvider from "./Context/ChatProvider";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root")); // Use createRoot

root.render(
  <ChakraProvider>
    <BrowserRouter>
      <ChatProvider>
        <App />
      </ChatProvider>
    </BrowserRouter>
  </ChakraProvider>,
);
