import React from "react";

function Search() {
  return (
    <>
      <div className="search">
        <label className="search__label" htmlFor="searchInput">
          <input className="search__input" type="search" placeholder="Поиск анализов, отделении и"/>
          <button className="search__btn">Найти</button>
        </label>
      </div>
    </>
  );
}

export default Search;
