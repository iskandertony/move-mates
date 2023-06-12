import React from "react";
import "./style.scss"
const FitnessLog = () => {
  return (
    <div className={"fitness_log"}>
      <div className={"fitness_log_card"}>
        <div className={"title"}>Часы сна</div>
        <div className={"text"}>8ч 30мин</div>
      </div>
      <div className={"fitness_log_card"}>
        <div className={"title"}>Тренировки</div>
        <div className={"text"}>1ч 30мин</div>
      </div>
    </div>
  );
};

export default FitnessLog;
