import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ColorProvider } from "./Contexts/ColorContext.jsx";
import { DataProvider } from "./Contexts/DataContext.jsx";
import { BarProvider } from "./Contexts/BarContext.jsx";
import { AudioProvider } from "./Contexts/AudioContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BarProvider>
      <AudioProvider>
    <ColorProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </ColorProvider>
    </AudioProvider>
    </BarProvider>
  </StrictMode>
);
