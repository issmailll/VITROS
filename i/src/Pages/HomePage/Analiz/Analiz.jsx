import React from "react";
import "./analiz.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { famousAnalizess } from "../../../../famousAnalizes";
import shopIcon from "../../../assets/bagIconNoHover.svg";
import shopIconHover from "../../../assets/bagIconHover.svg";
import dobavleno from "../../../assets/dobavleno.svg";

function Analiz() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(famousAnalizess);
  }, []);

  return (
    <>
      <div className="analiz">
        <div className="container">
          <div className="analiz__titleMainWrapper">
            <div className="analiz__titleWrapper">
              <h2 className="analiz__title">Популярные анализы</h2>
              <p className="analiz___subTitle">Вы можете добавить нужные анализы в корзину</p>
            </div>
            <Link className="analiz__link" to="/analizi">Посмотреть все анализы (500)</Link>
          </div>
            {
              data.map((el) => {
                return <ul className="analiz__list" key={el.id}>
                  {
                    el.famousAnalizes.map((ell) => {
                      return <li className="analiz__item" key={ell.id}>
                        <div className="analiz__itemTitleWrapper">
                            <h3 className="anali__itemTitle">{ell.title}</h3>
                            <p className="analiz__itemSubTitle">{ell.subTitle}</p>
                        </div>
                        <div>
                            <p className="analiz__itemCost">{ell.price}</p>
                            <button className="analiz__itemBtn">B корзину
                            
                            </button>
                        </div>
                      </li>
                    })
                  }
                </ul>
              })
            }
          <Link className="analiz__link analiz__link--mobile" to="/analizi">Посмотреть все анализы (500)</Link>
        </div>
      </div>
    </>
  );
}

export default Analiz;
