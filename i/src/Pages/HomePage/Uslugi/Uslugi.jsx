import React from "react";
import { Link } from "react-router-dom";
import "./uslugi.scss";
import uslugiLabImg from "../../../assets/uslugiLabImg.svg";
import uslugiFabImg from "../../../assets/uslugiFabImg.svg";
import uslugiUltraImg from "../../../assets/ulsugiUltraImg.svg";

function Uslugi() {
  return (
    <>
      <div className="uslugi">
        <div className="container">
          <div className="uslugi__titleWrapper">
            <h2 className="uslugi__title">Услуги</h2>
            <p className="uslugi__subTitle">Наш профессиональные услуги для вас</p>
          </div>
          <ul className="uslugi__list">
            <li className="uslugi__item">
                <Link to="/Лабораторная диагностика">
                    <img className="uslugi__itemImg" src={uslugiLabImg} alt="labaratory-icon" />
                    <h3 className="uslugi__itemTtitle">Лабораторная диагностика</h3>
                </Link>
            </li>
            <li className="uslugi__item">
                <Link to="/Фибросканирование печени">
                   <img className="uslugi__itemImg" src={uslugiFabImg} alt="fabric-icon" />
                   <h3 className="uslugi__itemTtitle">Фибросканирование печени</h3>
                </Link>
            </li>
            <li className="uslugi__item">
              <Link to="/Ультразвуковая диагностика">
                  <img className="uslugi__itemImg" src={uslugiUltraImg} alt="ultra-diagnostic-icon" />
                  <h3 className="uslugi__itemTtitle">Ультразвуковая диагностика</h3>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Uslugi;
