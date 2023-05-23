import React from "react";
import "./style.scss";
import Header from "../../components/header";
import Icon from "../../components/icon";
import CardInfo from "../../components/card-info";
import CardClient from "../../components/card-client";
import CardFood from "../../components/card-food";
import CardStatistics from "../../components/statistics";

const Main = () => {
  return (
    <div className="main back_ground container_mobile">
      <Header />
      <div>Доброе утро, Айдай</div>

      <div className="main_title">
        <div>
          <h2>Сегодняшние тренировки</h2>
        </div>
        <div>
          <Icon name={"calendar"} />
        </div>
      </div>

        <CardInfo/>

      <div className="main_title">
        <div>
          <h2>Новые клиенты</h2>
        </div>
        <div>
          <h6>Сегодня</h6>
        </div>
      </div>

        <CardClient/>
        <CardFood/>

        <h2>Статистика</h2>
        <CardStatistics/>
    </div>
  );
};

export default Main;
