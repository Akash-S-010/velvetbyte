import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ReactLenis } from "lenis/react"; 

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true, duration: 1.2 }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReactLenis>
  </StrictMode>
);
