import React from "react";
import Icon from "../icon";
import "./style.scss";
const CardFood = () => {
  return (
    <div className="card_food">
      <div className="content">
        <div className="title">Отчет о приеме пищи</div>
        <div className="text">Проверьте, что ваши клиенты ели сегодня</div>
      </div>
      <div className="icon_content">
        <div className={" icon1"}>
          <Icon name={"profilecircle"} className={"icon "} />
        </div>

          <div className={" icon2"}>
              <Icon name={"profilecircle"} className={"icon "} />
          </div>
          <div className={" icon3"}>
              <Icon name={"profilecircle"} className={"icon "} />
          </div>
          <div className={" icon4"}>
              <Icon name={"profilecircle"} className={"icon "} />
          </div>
      </div>
    </div>
  );
};

export default CardFood;
