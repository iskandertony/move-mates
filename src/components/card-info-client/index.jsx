import React from "react";
import Icon from "../icon";
import "./style.scss";
import { Button } from "antd";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import listAppointments from "../../store/getAppointments";

import { observer } from "mobx-react";
import MySlider from "../slider";
import Avatar from "../avatar";
const CardInfoClient = observer((props) => {
  const { selectedDate } = props;
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/appointments-begin");
  };

  let filteredCards = listAppointments.appointments;

  if (listAppointments.appointments) {
    filteredCards = listAppointments.appointments.filter((item) =>
      moment(item.startOfAppointment).isSame(selectedDate, "day")
    );
  }

  filteredCards.sort((a, b) => moment(b.calendar).diff(moment(a.calendar)));
  console.log("sdf", filteredCards);
  return (
    <div className="card_info">
      {filteredCards.map((item, id) => (
        <div className="card_info_container" key={id}>
          <div className="card_info_status right_conor">
            <Icon name={"check"} />
          </div>
          <div className="card_info_info">
            <Avatar />

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
            <div className="card_content">
              <div className="card_item">
                <Icon name={"small_calendar"} />
                <div>
                  {moment(item.startOfAppointment).format("dd")}, {""}
                  {moment(item.startOfAppointment).format("D MMMM")}
                </div>
              </div>
              <div className="card_item">
                <Icon name={"clock"} />
                <div>
                  {moment(item.startOfAppointment).format("HH:mm")}-
                  {moment(item.endOfAppointment).format("HH:mm")}
                </div>
              </div>
            </div>
            <Button className={"button_color"} block onClick={handleStart}>
              Начать тренировку
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
});

export default CardInfoClient;
