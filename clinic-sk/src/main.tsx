import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { lightTheme } from "./styles/themes/light-theme.ts";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyles.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </StrictMode>
);
