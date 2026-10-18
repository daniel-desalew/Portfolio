// client/src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext"; // <-- Import
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        {" "}
        {/* <-- Wrap App */}
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
