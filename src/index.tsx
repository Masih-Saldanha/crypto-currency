import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

import "./styles/reset.css";
import "./styles/style.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);