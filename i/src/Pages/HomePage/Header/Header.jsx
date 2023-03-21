import React from "react";
import "./header.scss";
import siteLogo from "../../../assets/siteLogo.svg";
import shopIcon from "../../../assets/shopIcon.svg";
import burgerMenu from "../../../assets/burgerMenu.svg";
import burgerMenuClose from "../../../assets/burgerMenuClose.svg";
import HeaderTop from "./HeaderTop";
import Uslugi from "./Uslugi";
import { useState } from "react";

function Header() {
  const [ showHeaderTop, setShowHeaderTop ] = useState(false);
  const [ showNavList, setShowNavList ] = useState(false);
  const [ showLink, setShowLink ] = useState(false);
  const [ uslugi, setUslugi ] = useState(false);
  const [ header, setShowHeader ] = useState(false);

  function handleBurgerClick() {
    setShowHeaderTop(!showHeaderTop);
    setShowNavList(!showNavList);
    setShowLink(!showLink);
    setShowHeader(!header);
  }
  const toggleUslugi = () => {setUslugi(!uslugi)};

  return (
    <>
      <div className={showNavList ? "header header--show" : "header"}>
       <HeaderTop  className={showNavList ? "headerTop headerTop--show" : "headerTop"}/>
        <div className="header__container container">
          <a className="header__logoLink" href="#"><img width="124" height="30" className="header__siteLogo" src={siteLogo} alt="site-logo"/></a>
          <nav className="header__nav">
            <ul className={showNavList ? "header__nav-list header__nav-list--show" : "header__nav-list"}>
              <li className="header__nav-item"><a className="header__nav-link" href="#">Выездная лаборатория</a></li>
              <li className="header__nav-item"><a className="header__nav-link" href="#">Анализы</a></li>
              <li className="header__nav-item header__nav-item--uslugi"><button onClick={toggleUslugi} className="header__nav-link header__nav-link--uslugi header__nav-link--arrow" href="#">Услуги</button>{uslugi && <Uslugi />}</li>
              <li className="header__nav-item"><a className="header__nav-link" href="#">Франчайзинг</a></li>
              <li className="header__nav-item"><a className="header__nav-link header__nav-link--arrow" href="#">О нас</a></li>
              <li className="header__nav-item"><a className="header__nav-link" href="#">Партнерство</a></li>
            </ul>
            <div className="header__linkWrapper">
              <button className="header__shopIcon">
                <span>0</span>
                <img src={shopIcon} alt="shop-icon" />
              </button>
              <button onClick={handleBurgerClick} className="header__burgerMenu">{showHeaderTop?<img src={burgerMenuClose} alt="burger-menu-close" />:<img src={burgerMenu} alt="burger-menu"/>}</button>
              <a className={showLink ? "header__link header__link--show" : "header__link"} href="#">Получить результаты</a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
