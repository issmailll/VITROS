import React from "react";
import "./header.scss";
import siteLogo from "../../../assets/siteLogo.svg";
import shopIcon from "../../../assets/shopIcon.svg";
import burgerMenu from "../../../assets/burgerMenu.svg";
import burgerMenuClose from "../../../assets/burgerMenuClose.svg";
import HeaderTop from "./HeaderTop";

function Header() {
  return (
    <>
      <div className="header">
        <HeaderTop />
        <div className="header__container container">
          <a className="header__logoLink" href="#">
            <img width="124" height="30" className="header__siteLogo" src={siteLogo} alt="site-logo"/>
          </a>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <a className="header__nav-link" href="#">Выездная лаборатория</a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="#">Анализы</a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link header__nav-link--arrow" href="#">Услуги</a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="#">Франчайзинг</a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link header__nav-link--arrow" href="#">О нас</a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="#">Партнерство</a>
              </li>
            </ul>
            <div className="header__linkWrapper">
              <button className="header__shopIcon">
                <img src={shopIcon} alt="shop-icon" />
              </button>
              <button className="header__burgerMenu">
                <img src={burgerMenu} alt="burger-menu" />
              </button>
              <a className="header__link" href="#">Получить результаты</a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
