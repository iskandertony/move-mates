import React from "react";
import Header from "../../components/header";
import CardAdd from "../../components/card-add";
import CardFood from "../../components/card-food";
import FitnessLog from "../../components/fitness-log";

const ClientMain = () => {
  return (
    <div
      className={"container_mobile pt-20 back_ground flex flex-column gap-10"}
    >
      <Header />
      <div className={"text"}>Доброе утро, Катя Петрова👋🏻</div>
      <div className={"name"}>Мои тренеры</div>
      <CardAdd
        title={"Добавьте Тренера"}
        text={"Выбирайте тренера по своим предпочтениям."}
        // onClick={() => setShow(true)}
      />
      <CardFood />
      <FitnessLog/>
      <div className={"name"}>Статьи о здоровье</div>
    </div>
  );
};

export default ClientMain;
