// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import Home from "./Components/Home";
import FocusAreaPage from "./Components/MenuItem1/FocusAreaPage";
import FocusAreaPage2 from "./Components/MenuItem2/FocusAreaPage2";
import FocusAreaPage3 from "./Components/MenuItem3/FocusAreaPage3";
import FocusAreaPage4 from "./Components/MenuItem4/FocusAreaPage4";


function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Default Page */}
        <Route path="/" element={<Home />} />

        {/* Side Menu Layout Page */}
        <Route path="/sence-1" element={<FocusAreaPage/>} />
        <Route path="/sence-2" element={<FocusAreaPage2/>} />
        <Route path="/sence-3" element={<FocusAreaPage3/>} />
        <Route path="/sence-4" element={<FocusAreaPage4/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
