import React from "react";
import "./klinik.scss";

function Klink() {
  return (
    <>
      <div className="klinik">
        <div className="container">
          <div className="clinik__mainWrapper">
            <div className="klinik__titleWrapper">
              <h2 className="klinik__title">О клинике</h2>
              <p className="klinik__description">Невозможно представить современную медицину без диагностики, адиагностику без высокоточных клинических исследований. Толькоблагодаря им врачи имеют возможность определить клиническуюкартину и поставить правильный диагноз. <br /> <br />{" "}Лаборатория VITROS DIAGNOSTICS видит своей основной цельюповышение уровня лабораторной диагностики получаемой нашимипациентами, до мирового уровня.</p>
            </div>
            <ul className="clinik__list">
              <li className="clinik__item"><h3 className="clinik__itemTitle">22 лет</h3><p className="clinik__itemSubTitle">На рынке медицинских услуг</p></li>
              <li className="clinik__item"><h3 className="clinik__itemTitle">24/7</h3><p className="clinik__itemSubTitle">Экстренное обслуживание</p></li>
              <li className="clinik__item"><h3 className="clinik__itemTitle">50 тыс+</h3><p className="clinik__itemSubTitle">Довольных пациентов</p></li>
              <li className="clinik__item"><h3 className="clinik__itemTitle">7+</h3><p className="clinik__itemSubTitle">Стаж каждого из сотрудников</p></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Klink;