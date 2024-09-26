import { StyledEngineProvider } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </StyledEngineProvider>
  </StrictMode>
);
