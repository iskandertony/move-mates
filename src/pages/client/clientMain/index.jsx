import React, { useState } from "react";
import Header from "../../../components/header";
import CardAdd from "../../../components/card-add";
import CardFood from "../../../components/card-food";
import FitnessLog from "../../../components/fitness-log";

import Mood from "../../../components/mood";
import { useNavigate } from "react-router-dom";
import img from "../../../assets/imgs/validateps.png";

import TabCircle from "../../../components/tab-circle";
import "./style.scss";
import CardInfoClient from "../../../components/card-info-client";
import Icon from "../../../components/icon";
import MySlider from "../../../components/slider";
const ClientMain = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Спорт");

  const handleClick = () => {
    navigate("/client/calendar/event");
  };

  return (
    <div
      className={
        "container_mobile pt-20 back_ground client_main flex flex-column gap-20"
      }
    >
      <Header />
      <MySlider img={img} />

      <Mood />

      <TabCircle
        name={"Спорт"}
        subName={"Терапия"}
        onClick={setActiveTab}
        activeTab={activeTab}
      />

      <CardAdd
        title={"Добавьте тренировку"}
        text={"Выбирайте тренера по своим предпочтениям."}
        onClick={handleClick}
      />
      <div>
        <div className={"flex alignC justify-s"}>
          <div className={"name"}>Сегодняшние тренировки</div>
          <Icon name={"calendar"} />
        </div>
        <CardInfoClient />
      </div>
      <CardFood />
      <FitnessLog />
    </div>
  );
};

export default ClientMain;
