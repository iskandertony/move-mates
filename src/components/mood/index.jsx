import React from "react";
import Icon from "../../components/icon/index";
import "./style.scss";
const Mood = () => {
  return (
    <div className={"mood pt-20"}>
      <div className={"flex flex-column gap-5"}>
        <div className={"name"}>Ваше настроение</div>
        <div className={"text"}>
          Углубите понимание своих эмоций, ведя ежедневный журнал
          настроения(Скоро будет доступно)
        </div>
      </div>

      <div className={"content"}>
        <div className={"card"}>
          <Icon name={"faces"} />
          <div className={"title"}>Счастливый</div>
        </div>

        <div className={"card"}>
          <Icon name={"faces"} />
          <div className={"title"}>Счастливый</div>
        </div>

        <div className={"card"}>
          <Icon name={"faces"} />
          <div className={"title"}>Счастливый</div>
        </div>
      </div>
    </div>
  );
};

export default Mood;
