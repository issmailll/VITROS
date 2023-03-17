import React from "react";
import "./intro.scss";
import Search from "./Search";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import microscopeImg from "../../../assets/sliderMicroscopeImg.svg";
import womanImg from "../../../assets/sliderWomenImg.svg";
import manImg from "../../../assets/sliderManImg.svg";
import prevBtn from "../../../assets/prevBtn.svg";

function Intro() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000000, 
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  function PrevArrow(props) {
    const { onClick } = props;
    return (<button className="prev-btn" onClick={onClick}>
      <img src={prevBtn} alt="slider-left-btn" />
      </button>);
  }
  function NextArrow(props) {
    const { onClick } = props;
    return (<button className="next-btn" onClick={onClick}>
      <img className="slider__nextBtnImg" src={prevBtn} alt="slider-right-btn" />
      </button>);
  }

  return (
    <>
      <div className="intro">
        <div className="intro__container container">
          <Search />
          <div className="slider__mainWrapper">
          <Slider {...settings}>
            <div className="slider__wrapper slider-1__wrapper">
              <div className="slider__textWrapper">
                  <p className="slider__subTtitle">Многопрофильная Лаборатория </p>
                  <h3 className="slider__title">Более <span className="slider__span">500</span> видов анализов</h3>
                  <div className="slider__linkWrapper">
                    <a className="slider__link slider__link--red" href="#">Представить анализ</a>
                    <a className="slider__link slider__link--gray" href="#">Узнать больше</a>
                  </div>
              </div>
              <img className="slider__img" src={microscopeImg} alt="slider-microscope-img" />
            </div>
            <div className="slider__wrapper slider-1__wrapper">
              <div className="slider__textWrapper">
                  <p className="slider__subTtitle">Многопрофильная Лаборатория</p>
                  <h3 className="slider__title">Женский чек-ап. Скидка <span className="slider__span">20%</span> весь декабрь</h3>
                  <div className="slider__linkWrapper">
                    <a className="slider__link slider__link--red" href="#">Представить анализ</a>
                    <a className="slider__link slider__link--gray" href="#">Узнать больше</a>
                  </div>
              </div>
              <img className="slider__img" src={womanImg} alt="slider-woman-img" />
            </div>
            <div className="slider__wrapper slider-1__wrapper">
              <div className="slider__textWrapper">
                  <p className="slider__subTtitle">Многопрофильная Лаборатория</p>
                  <h3 className="slider__title">Мужской чек-ап. Скидка <span className="slider__span">20%</span> весь декабрь</h3>
                  <div className="slider__linkWrapper">
                    <a className="slider__link slider__link--red" href="#">Представить анализ</a>
                    <a className="slider__link slider__link--gray" href="#">Узнать больше</a>
                  </div>
              </div>
              <img className="slider__img" src={manImg} alt="slider-man-img" />
            </div>
          </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
