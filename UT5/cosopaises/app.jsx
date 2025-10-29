import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import Country from "./Country";
import LivesContextProvider from "../contexts/livesContext";
import VisitedContextProvider from "../contexts/VisitedContext";

export default function App() {
  return (
    <LivesContextProvider>
      <VisitedContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:code" element={<Country />} />
          </Routes>
        </BrowserRouter>
      </VisitedContextProvider>
    </LivesContextProvider>
  );
}