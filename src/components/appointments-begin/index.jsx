import React, { useEffect, useState } from "react";
import "./style.scss";
import userStore from "../../store/user";
import { observer } from "mobx-react";

import { Button, Input, Modal } from "antd";

import { Select } from "antd";

import { useNavigate } from "react-router-dom";
import Names from "../names";
import Avatar from "../avatar";
import Reschedule from "../reschedule";
import ListInfoTrain from "../list-info-train";
import ContactClient from "../contact-client";
import ModalCancel from "../modal-cancel";

const AppointmentsBegin = observer(() => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleCall = () => {
    navigate("/video-call");
  };

  const handleChange = (value) => {
    if (value === "cancel") {
      setShow(true);
    } else if (value === "reschedule") {
      navigate("/appointments-begin/reschedule");
    }
  };


  return (
    <div className="container_mobile appointments_begin secondary pt-20 back_ground">
      <div className={"appointments_begin_content"}>
        <Names title={"Главная"} name={"О тренировке"} />

        <div className="card">
          <Reschedule onChange={handleChange} />
          <Avatar />
          <div className="flex flex-column">
            <div className="title">{userStore.user?.userName}</div>
            <div className={"flex alignCc gap-5"}>
              <div className="text">{userStore.role} -</div>
              <div className={"text"}>12 -</div>
              <div className={"text"}>32 -</div>
              <div className={"text"}>2</div>
            </div>
          </div>
        </div>

        <ListInfoTrain />

        <ContactClient />
      </div>

      {show && <ModalCancel show={show} />}

      <Button onClick={handleCall} className={" button_done button_color"}>
        Начать тренировку
      </Button>
    </div>
  );
});

export default AppointmentsBegin;
