import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { Reset } from "./styles/reset.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Reset />
  </StrictMode>
);
