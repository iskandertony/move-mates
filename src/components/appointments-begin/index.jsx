import React, { useEffect } from "react";
import "./style.scss";
import ArrowBack from "../arrow-back";
import userStore from "../../store/user";
import currentAppointments from "../../store/getCurrentAppointments";
import { observer } from "mobx-react";
import listUsers from "../../store/listUsers";
import { Button, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import {useNavigate} from "react-router-dom";
const AppointmentsBegin = observer(() => {
    const navigate = useNavigate();

const handleCall = () => {
    navigate("/video-call");
}


  // useEffect(() => {
  //   currentAppointments.setId(userStore.user?.id);
  // }, []);
  return (
    <div className="container_mobile appointments_begin pt-20">
      <div className={"flex gap-20"}>
        <ArrowBack />
        <div>О тренировке</div>
      </div>

      <div className="card">
        <div>img</div>
        <div className="flex flex-column">
          <div className="title">{userStore.user?.userName}</div>
          <div className="text">{userStore.role}</div>
        </div>
      </div>
      <div>
        <TextArea placeholder="Description" />
      </div>
      <Button onClick={handleCall}>Начать тренировку</Button>
    </div>
  );
});

export default AppointmentsBegin;
