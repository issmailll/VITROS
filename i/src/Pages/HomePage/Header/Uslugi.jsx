import React from "react";
import { Link } from "react-router-dom";

function Uslugi() {
  return (
    <>
       <div className="header___uslugiWrapper">
        <Link className="heasder__uslugiLink" to="/Лабораторная диагностика">Лабораторная диагностика</Link>
        <Link className="heasder__uslugiLink" to="/Фибросканирование печени">Фибросканирование печени</Link>
        <Link className="heasder__uslugiLink" to="/Ультразвуковая диагностика">Ультразвуковая диагностика</Link>
      </div>
    </>
  );
}

export default Uslugi;
