import React, { useState } from "react";
import ArrowBack from "../../components/arrow-back";
import { Button, Checkbox, Divider, Form, Input, Radio, Select } from "antd";
import userStore from "../../store/user";
import "./style.scss";
import Icon from "../../components/icon";
import { useNavigate } from "react-router-dom";
import Names from "../../components/names";
const { Option } = Select;

const TimeTable = () => {
  const navigate = useNavigate();
  const handleNavIndividual = () => {
    navigate("/timetable/individual");
  };

  const handleNavGroup = () => {
    navigate("/timetable/group");
  };

  const handleNavTime = () => {
    navigate("/timetable/work-hours");
  };
  return (
    <div className={"container_mobile timetable back_ground"}>


      <Names name={"Расписание"} />

      <div>
        <div className={"title"}>Тренер</div>
        {/*<div className={"timetable_card"}>{userStore.user?.userName}</div>*/}
      </div>

      <div>
        <div
          className={"flex alignC gap-10 timetable_card "}
          onClick={handleNavIndividual}
        >
          <Icon name={"personalcard"} />
          <div className={"name"}>Индивидуальная</div>
        </div>
        <div
          className={"flex alignC gap-10 timetable_card"}
          onClick={handleNavGroup}
        >
          <Icon name={"personalcard"} />
          <div className={"name"}>Групповая</div>
        </div>
        <div className={"title"}>Рабочие часы</div>
        <div className={"timetable_card"} onClick={handleNavTime}>
          Добавить
        </div>
      </div>

      <Button>Подтвердить</Button>
    </div>
  );
};

export default TimeTable;
