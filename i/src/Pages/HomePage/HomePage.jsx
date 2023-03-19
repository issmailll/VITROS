import React from "react";
import Analiz from "./Analiz/Analiz";
import Header from "./Header/Header";
import Intro from "./Intro/Intro";
import Uslugi from "./Uslugi/Uslugi";

function HomePage() {
  return (
    <>
      <Header />
      <Intro />
      <Uslugi />
      <Analiz />
    </>
  );
}

export default HomePage;
