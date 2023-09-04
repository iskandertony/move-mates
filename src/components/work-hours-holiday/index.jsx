import React, { useState } from "react";
import {TimePicker, Checkbox, Button, notification} from "antd";
import moment from "moment";
import "./style.scss";
import Icon from "../icon";

const WorkHoursHolidayComponent = ({ selectedDate, onClose }) => {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [allDay, setAllDay] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);
  const [error, setError] = useState(null);
  const handleStartTimeChange = (time) => {
    setStartTime(time);
  };

  const handleEndTimeChange = (time) => {
    setEndTime(time);
  };

  const handleAllDayChange = (e) => {
    setAllDay(e.target.checked);
  };

  const handleDelete = (day) => {
    setSelectedDays((prevDays) => prevDays.filter((d) => !d.date.isSame(day)));
  };

  const handleAdd = () => {
    if (!allDay && (!startTime || !endTime)) {

      notification.error({
        message: "Ошибка",
        description: "Укажите время или выберите 'Весь день'",
        placement: "topRight"
      });
      return;
    }
    setSelectedDays((prevDays) => [
      ...prevDays,
      {
        date: selectedDate,
        allDay,
        startTime,
        endTime,
      },
    ]);
    setError(null);
  };

  return (
    <div className={"work_hours_holiday_component"}>
      {selectedDays.map((day, index) => (
        <div key={index} className={"selected_day"}>
          <div className={"input"}>
            <div>
              {day.date.format("DD-MM")}, {day.date.format("dd")}
            </div>
            <Icon name={"trash"} onClick={() => handleDelete(day.date)} />
          </div>
          {!day.allDay && (
            <div className={"time_range"}>
              <div className={"input"}>{day.startTime.format("HH:mm")}</div>
              <div>-</div>
              <div className={"input"}>{day.endTime.format("HH:mm")}</div>
            </div>
          )}
          {day.allDay && (
            <Checkbox checked={true} disabled={true}>
              Весь день
            </Checkbox>
          )}
        </div>
      ))}

      <div className={"flex flex-column gap-10"}>
      <div className={"input"}>
        <div>
          {selectedDate.format("DD-MM")}, {selectedDate.format("dd")}
        </div>
        <Icon name={"trash"} onClick={onClose} />
      </div>

      {!allDay && (
        <div className={"flex alignC gap-5 time"}>
          <TimePicker
            format="HH:mm"
            onChange={handleStartTimeChange}
            value={startTime}
            placeholder="Начало"
          />
          <div>-</div>
          <TimePicker
            format="HH:mm"
            onChange={handleEndTimeChange}
            value={endTime}
            placeholder="Конец"
          />
        </div>
      )}

      <div className={"flex alignC justify-s"}>
        <Checkbox checked={allDay} onChange={handleAllDayChange}>
          Весь день
        </Checkbox>
        <Button onClick={handleAdd}>Добавить</Button>
      </div>
      </div>
    </div>
  );
};

export default WorkHoursHolidayComponent;
