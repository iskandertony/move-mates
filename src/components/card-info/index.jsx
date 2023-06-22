import React, { useState } from "react";
import Icon from "../icon";
import "./style.scss";
import { Button } from "antd";
import moment from "moment";

import listAppointments from "../../store/getAppointments";
import CardAdd from "../card-add";
const CardInfo = (props) => {
  const { selectedDate } = props;
  const [show, setShow] = useState(false);

  let filteredCards = listAppointments.appointments;

  if (listAppointments.appointments) {
    filteredCards = listAppointments.appointments.filter((item) =>
      moment(item.startOfAppointment).isSame(selectedDate, "day")
    );
  }

  filteredCards.sort((a, b) => moment(b.calendar).diff(moment(a.calendar)));
  return (
    <div className="card_info">
      {!filteredCards.length && (
        <CardAdd
          title={"Добавьте новую встречу"}
          onClick={() => setShow(true)}
        />
      )}
      {filteredCards.map((item, id) => (
        <div className="card_info_container" key={id}>
          <div className="card_info_status right_conor">Скоро</div>
          <div className="card_info_info">
            <Icon name={"big_profile"} className="profile" />

            <div className="text">
              <div className="name">{item.clientName}</div>
              <div className="flex gap-5">
                <div className="level">{item.type}</div>
                <div className="level">•{item.clientId}•</div>
                <div className="level">{item.description}</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card_item">
              <Icon name={"small_calendar"} />
              <div>
                {moment(item.startOfAppointment).format("dddd").substring(0, 5)}
                , {moment(item.startOfAppointment).format("D MMMM")}
              </div>
            </div>
            <div className="card_item">
              <Icon name={"clock"} />
              <div>
                {moment(item.startOfAppointment).format("HH:mm")}-
                {moment(item.endOfAppointment).format("HH:mm")}
              </div>
            </div>
            <Button className={"button_color"}>Начать тренировку</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardInfo;
