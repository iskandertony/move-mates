import React from "react";
import Icon from "../icon";
import "./style.scss"
const CardClient = () => {
  const clients = [
    {
      name: "Айдай",
      calendar: "Понед, 16 мая, 10:30 am",
    },
      {
          name: "Иска",
          calendar: "Понед, 16 мая, 10:30 am",
      },
  ];
  return (
    <div className="card_client">
      {clients.map((item) => (
        <div className="card_client_container">
          <Icon name={"profilecircle"} className={"card_icon"}/>
          <div className="content">
            <div>{item.name}</div>
            <div className="text">
              <Icon name={"clock"} />
              <div>{item.calendar}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardClient;
