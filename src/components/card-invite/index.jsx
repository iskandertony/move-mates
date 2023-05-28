import React from "react";
import "./style.scss";
import Icon from "../icon";
const CardInvite = () => {
  return (
    <div className="card_invite card ">
      <Icon name={"big_calendar"} />
      <div>
        <div>iska</div>
        <div className={"flex gap-5"}>
            <Icon name={"location"}/>
            <div>213</div>
            <div>asd</div>
        </div>
      </div>

      <Icon name={"small_calendar"} />
    </div>
  );
};

export default CardInvite;
