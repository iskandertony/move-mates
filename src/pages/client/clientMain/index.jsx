import React from "react";
import Header from "../../../components/header";
import CardAdd from "../../../components/card-add";
import CardFood from "../../../components/card-food";
import FitnessLog from "../../../components/fitness-log";
import MySlider from "../../../components/slider";
import { Button } from "antd";
import Mood from "../../../components/mood";
import { useNavigate } from "react-router-dom";

const ClientMain = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/coach/1");
  };

  return (
    <div
      className={"container_mobile pt-20 back_ground flex flex-column gap-20"}
    >
      <Header />
      <MySlider />

      <Mood />

      <div className={"flex justify-s gap-5"}>
        <Button block onClick={handleClick}>
          Спорт
        </Button>
        <Button block>Терапия</Button>
      </div>

      <CardAdd
        title={"Добавьте Тренера"}
        text={"Выбирайте тренера по своим предпочтениям."}
        // onClick={() => setShow(true)}
      />
      <CardFood />
      <FitnessLog />
    </div>
  );
};

export default ClientMain;
