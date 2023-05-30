import React from "react";
import Icon from "../icon";
import "./style.scss"
const CardAdd = (props) => {
  const { title, text, onClick } = props;
  return (
    <div className="card card_add" onClick={onClick}>
      <div className={"flex flex-column gap-5"}>
        <div className="title">{title}</div>
        <div className="text">{text}</div>
      </div>
      <Icon name={"add"} className={"icon"}/>
    </div>
  );
};

export default CardAdd;
