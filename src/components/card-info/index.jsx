import React, { useEffect, useState } from "react";
import Icon from "../icon";
import "./style.scss";
import { Button } from "antd";
import moment from "moment";
import authStore from "../../store/auth";
import { getAppointments } from "../../api";
const CardInfo = (props) => {
  const { selectedDate } = props;
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (authStore.token) {
        const filter = {
          from: moment(selectedDate).toISOString(),
          size: 3,
          page: 0,
        };
        try {
          const response = await getAppointments(filter);
          console.log("response", response);
          setInfo(response.content);
        } catch (error) {
          console.log("error", error);
        }
      }
    };

    fetchData();
  }, [selectedDate]);

  const today = moment().startOf("day");
  let filteredCards = info;

  if (selectedDate) {
    if (!moment(selectedDate).isSame(today)) {
      filteredCards = info.filter((item) =>
        moment(item.startOfAppointment).isSame(selectedDate, "day")
      );
    }
  }

  filteredCards.sort((a, b) => moment(b.calendar).diff(moment(a.calendar)));
  return (
    <div className="card_info">
      {filteredCards.map((item) => (
        <div className="card_info_container">
          <div className="card_info_status right_conor">Скоро</div>
          <div className="card_info_info">
            <Icon name={"big_profile"} className="profile" />

            <div className="text">
              <div className="name">{item.clientName}</div>
              <div className="flex gap-5">
                <div className="level">{item.level}</div>
                <div className="level">{item.format}</div>
                <div className="level">{item.status}</div>
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
            <Button>Начать тренировку</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardInfo;
