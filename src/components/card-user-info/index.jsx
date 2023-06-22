import React from "react";
import "./style.scss"
const CardUserInfo = (props) => {
  const {height, weight, gender, dateOfBirth} = props
  return (
    <div className="card_user_info card">
      <div>Общая информация</div>
      <div className="two-columns">
        <div>
          <div>Возраст</div>
          <div>{dateOfBirth}</div>
        </div>
        <div>
          <div>Пол</div>
          <div>{gender}</div>
        </div>
        <div>
          <div>Уровень</div>
          <div>29 лет</div>
        </div>
        <div>
          <div>Вес</div>
          <div>{weight}</div>
        </div>
        <div>
          <div>Рост</div>
          <div>{height}</div>
        </div>
      </div>
      <div>
        <div>Цель</div>
        <div>Похудение, ведение здорового образа жизни</div>
      </div>
    </div>
  );
};

export default CardUserInfo;
