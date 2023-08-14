import React from "react";
import "./style.scss";
const CardUserInfo = (props) => {
  const { height, weight, gender, dateOfBirth } = props;
  return (
    <div className="card_user_info pt-20">
      <div className={"flex gap-5 flex-column"}>
        <div className={"card"}>
          <div className={"name"}>Возраст</div>
          <div>{dateOfBirth}</div>
        </div>

        <div className={"card"}>
          <div className={"name"}>Вес</div>
          <div>{weight}</div>
        </div>
      </div>
      <div className={"flex gap-5 flex-column"}>
        <div className={"card"}>
          <div className={"name"}>Пол</div>
          <div>{gender}</div>
        </div>
        <div className={"card"}>
          <div className={"name"}>Рост</div>
          <div>{height}</div>
        </div>
      </div>
    </div>
  );
};

export default CardUserInfo;
