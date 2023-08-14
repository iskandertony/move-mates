import React from "react";
import Icon from "../icon";
import "./style.scss"
const CardBooking = (props) => {
  const { onClick,text } = props;
  return (
    <div>
      <div className={"flex alignC gap-10 card_booking "} onClick={onClick}>
        <Icon name={"personalcard"} />
        <div className={"name"}>{text}</div>
      </div>
    </div>
  );
};

export default CardBooking;
