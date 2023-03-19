import React from "react";
import "./analiz.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Analiz() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:2003/famousAnalizes")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log(error));
  }, []);

  const handleClick = (id) => {
    fetch(`http://localhost:2003/famousAnalizes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ active: !data.find(el => el.id === id).active }),
    })
      .then((response) => response.json())
      .then((result) => setData(data.map((item) => item.id === result.id ? result : item)))
      .catch((error) => console.log(error));
  };

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
          <ul className="analiz__list">
            {data.slice(0, 4).map((el) => {
              return (
                <li className="analiz__item" key={el.id}>
                  <div className="analiz__titleWrapper">
                    <h3 className="analiz__itemTitle">{el.title}</h3>
                    <p className="analiz__itemSubTitle">{el.subTitle}</p>
                  </div>
                  <p className="analiz__itemCost">{el.price} сум</p>
                  <button onClick={() => handleClick(el.id)}  className="analiz__itemBtn">
                  {el.active ? "Добавлено" : "В корзину"}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Analiz;
