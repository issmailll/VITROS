import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Lab from "./Pages/UslugiPage/Lab/Lab";
import Fab from "./Pages/UslugiPage/Fab/Fab";
import Ultra from "./Pages/UslugiPage/Ultra/Ultra";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Лабораторная диагностика" element={<Lab />} />
        <Route path="/Фибросканирование печени" element={<Fab />} />
        <Route path="/Ультразвуковая диагностика" element={<Ultra />} />
      </Routes>
    </>
  );
}

export default App;
