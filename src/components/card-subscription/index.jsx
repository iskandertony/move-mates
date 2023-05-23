import React from "react";
import Icon from "../icon";
import "./style.scss";
import { Button, Divider } from "antd";
const CardSubscription = () => {
  const subscription = [
    {
      name: "Премиум ежемесячная",
      price: "$10,99/в месяц",
      account: "1 аккаунт",
      item1: "Инструменты управления клиентами",
      item2: "Безлимитные тренировки",
      item3: "Настроенные материалы тренировок",
      item4: "Аналитика и отчетность",
    },
    {
      name: "Премиум eжегодная",
      price: "$10,99/в месяц",
      account: "1 аккаунт",
      item1: "Инструменты управления клиентами",
      item2: "Безлимитные тренировки",
      item3: "Настроенные материалы тренировок",
      item4: "Аналитика и отчетность",
    },
  ];
  return (
    <div className="card_subscription">
      {subscription.map((item) => (
        <div className="card_subscription_content">
          <div className="info">
            <div className="title">{item.name}</div>
            <div className="price">{item.price}</div>
            <div className="price">{item.account}</div>
          </div>
          <Divider />
          <div className="content">
            <div className="item">
              <Icon name={"done"} />
              {item.item1}
            </div>
            <div className="item">
              <Icon name={"done"} />
              {item.item2}
            </div>
            <div className="item">
              <Icon name={"done"} />
              {item.item3}
            </div>
            <div className="item">
              <Icon name={"done"} />
              {item.item4}
            </div>
          </div>
          <Button>Начать</Button>
        </div>
      ))}
    </div>
  );
};

export default CardSubscription;
