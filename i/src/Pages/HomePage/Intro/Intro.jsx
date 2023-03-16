import React from "react";
import "./intro.scss";
import Search from "./Search";

function Intro() {
  return (
    <>
      <div className="intro">
        <div className="intro__container container">
          <Search />
        </div>
      </div>
    </>
  );
}

export default Intro;
