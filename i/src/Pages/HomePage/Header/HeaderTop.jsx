import React from "react";

function HeaderTop() {
  return (
    <>
      <div className="headerTop">
        <div className="headerTop__container container">
          <ul className="headerTop__list">
            <li className="headerTop__item">+998 (71) 203-00-77</li>
            <li className="headerTop__item">Пн-Сб: 08:00 - 18:00</li>
            <li className="headerTop__item">
              Время сдачи анализов с 8:00- 11:30
            </li>
          </ul>
          <div className="headerTop__langWrapper">
            <button className="headerTop__btn headerTop__btn--after">Ру</button>
            <button className="headerTop__btn headerTop__btn--after">Уз</button>
            <button className="headerTop__btn">En</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderTop;
