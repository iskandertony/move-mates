import React, { useState } from "react";
import Names from "../../components/names";
import "./style.scss";
import { Button, Form, DatePicker } from "antd";
import CustomInput from "../../components/input";
import MyCalendar from "../../components/calendar";

const Reschedule = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [showTimeSlots, setShowTimeSlots] = useState(true);

  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];

  const endTimeSlots = timeSlots.filter((time) => time > startTime);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowResult(false);
    setShowTimeSlots(true);
    setStartTime(null);
    setEndTime(null);
  };

  const handleStartTimeClick = (time) => {
    setStartTime(time);
    setEndTime(null);
  };

  const handleEndTimeClick = (time) => {
    setEndTime(time);
    setShowResult(true);
    setShowTimeSlots(false);
  };

  return (
    <Form className={"container_mobile back_ground reschedule"}>
      <Names name={"Перенос"} title={"Отменить"} className={"cansel"} noArrow />

      <div className={"flex flex-column"}>
        <Form.Item label="Тип тренировки">
          <CustomInput noNav text={"Индивидуальная"} />
        </Form.Item>

        <Form.Item label="Специализация">
          <CustomInput noNav text={"стретчинг (МФР)"} />
        </Form.Item>

        <Form.Item>
          <CustomInput noNav text={"Online"} />
        </Form.Item>

        <Form.Item label="Дата тренировки">
          <DatePicker
            format="YYYY-MM-DD"
            placeholder="Выберите дату"
            style={{ width: "100%" }}
            onChange={handleDateChange}
          />
        </Form.Item>

        {selectedDate && showTimeSlots && (
          <>
            <Form.Item label="Время начала">
              {timeSlots.map((time, index) => (
                <Button
                  key={index}
                  style={{ margin: "5px" }}
                  onClick={() => handleStartTimeClick(time)}
                >
                  {time}
                </Button>
              ))}
            </Form.Item>

            {startTime && (
              <Form.Item label="Время окончания">
                {endTimeSlots.map((time, index) => (
                  <Button
                    key={index}
                    style={{ margin: "5px" }}
                    onClick={() => handleEndTimeClick(time)}
                  >
                    {time}
                  </Button>
                ))}
              </Form.Item>
            )}
          </>
        )}

        {showResult && selectedDate && startTime && endTime && (
          <div style={{ marginTop: "20px" }}>
            <p>Дата тренировки: {selectedDate.format("YYYY-MM-DD")}</p>
            <p>Время начала: {startTime}</p>
            <p>Время окончания: {endTime}</p>
          </div>
        )}

        <Form.Item label="Клиент">
          <CustomInput noNav text={"user.name"} />
        </Form.Item>

        <Button className={"button"}>Готово</Button>
      </div>
    </Form>
  );
};

export default Reschedule;
