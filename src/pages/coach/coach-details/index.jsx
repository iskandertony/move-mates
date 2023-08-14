import React, { useEffect, useState } from "react";
import "./style.scss";
import Icon from "../../../components/icon";
import CardUserInfo from "../../../components/card-user-info";
import ArrowBack from "../../../components/arrow-back";
import { getClient } from "../../../api";
import { useParams } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import Names from "../../../components/names";
import Avatar from "../../../components/avatar";
import CardBooking from "../../../components/card-booking";
import CardInfo from "../../../components/card-info";
import Tab from "../../../components/tab";

const CoachDetails = () => {
  const tabsData = [
    {
      name: "Квалификация",
      content: "Содержание для Квалификации...",
    },
    {
      name: "Сертификаты",
      content: "Содержание для Сертификаты...",
    },
  ];

  return (
    <div className="container_mobile back_ground">
      <Names name={"Профиль тренерa"} />

      <div className={"flex flex-column justify-s alignC TextA-c pt-20"}>
        <div>
          <Avatar />
        </div>
        <div className={"flex flex-column"}>
          <div>user.name</div>
          <div>тренер</div>
        </div>
      </div>

      <div>
        <div>map.response</div>
      </div>

      <div>
        <div>
          <CardBooking text={"Индивидуальная тренировка"} />
        </div>
        <div>
          <CardBooking text={"Групповая тренировка"} />
        </div>
      </div>

      <div className={"flex flex-column gap-10"}>
        <div>Обо мне</div>
        <div>
          <div>Опыт</div>
          <div>user.info</div>
        </div>
        <div>
          <div>Опыт</div>
          <div>user.info</div>
        </div>
        <div>
          <div>Опыт</div>
          <div>user.info</div>
        </div>
        <div>
          <div>Опыт</div>
          <div>user.info</div>
        </div>
        <div>
          <div>Опыт</div>
          <div>user.info</div>
        </div>
      </div>

      <Tab tabs={tabsData} />
    </div>
  );
};

export default CoachDetails;
