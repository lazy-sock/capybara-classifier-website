import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./root";

import Ai from "./routes/ai";
import Anmelden from "./routes/anmelden";
import AppPage from "./routes/app";
import Code from "./routes/code";
import Connect from "./routes/connect";
import GetStarted from "./routes/get_started";
import Hardware from "./routes/hardware";
import Home from "./routes/home";
import HowItWorks from "./routes/how_it_works";
import ImagePage from "./routes/image_page";
import Registrieren from "./routes/registrieren";
import Settings from "./routes/settings";
import {ThemeProvider} from "./routes/ThemeProvider";
import Wiki from "./routes/wiki";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ai" element={<Ai />} />
        <Route path="anmelden" element={<Anmelden />} />
        <Route path="app" element={<AppPage />} />
        <Route path="code" element={<Code />} />
        <Route path="connect" element={<Connect />} />
        <Route path="get_started" element={<GetStarted />} />
        <Route path="hardware" element={<Hardware />} />
        <Route path="how_it_works" element={<HowItWorks />} />
        <Route path="image_page" element={<ImagePage />} />
        <Route path="registrieren" element={<Registrieren />} />
        <Route path="settings" element={<Settings />} />
        <Route path="wiki" element={<Wiki />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);