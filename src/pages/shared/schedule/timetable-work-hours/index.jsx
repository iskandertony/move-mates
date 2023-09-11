import React, { useState } from "react";
import { Form, TimePicker, Checkbox, Button } from "antd";

import "./style.scss";
import { useNavigate } from "react-router-dom";
import Names from "../../../../components/names";
import Icon from "../../../../components/icon";
import CustomInput from "../../../../components/input";
import CreateWorkTime from "../../../../store/createWortTime";

const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const TimetableWorkHours = () => {
  const navigate = useNavigate();
  const [checkedDays, setCheckedDays] = useState([]);
  const [breaks, setBreaks] = useState({});

  const handleCheckboxChange = (day) => {
    if (checkedDays.includes(day)) {
      setCheckedDays(checkedDays.filter((checkedDay) => checkedDay !== day));
    } else {
      setCheckedDays([...checkedDays, day]);
    }
  };

  const handleCalendar = () => {
    navigate("/setting/profile/work-hours/calendar");
  };

  const handleAddBreak = (day) => {
    setBreaks({ ...breaks, [day]: true });
  };

  const handleRemoveBreak = (day) => {
    const updatedBreaks = { ...breaks };
    delete updatedBreaks[day];
    setBreaks(updatedBreaks);
  };

  const handleFinish = (values) => {
    // Маппинг русских аббревиатур дней недели к английским
    const dayMapping = {
      Пн: "MONDAY",
      Вт: "TUESDAY",
      Ср: "WEDNESDAY",
      Чт: "THURSDAY",
      Пт: "FRIDAY",
      Сб: "SATURDAY",
      Вс: "SUNDAY",
    };

    const worktimeRequests = checkedDays.map((day) => {
      const dayIndex = daysOfWeek.indexOf(day); // Получаем индекс дня недели
      return {
        dayOfWeek: dayMapping[day],
        start: {
          hour: values[`start_time_${dayIndex}`]
            ? values[`start_time_${dayIndex}`].hour()
            : 0,
          minute: values[`start_time_${dayIndex}`]
            ? values[`start_time_${dayIndex}`].minute()
            : 0,
          second: 0,
          nano: 0,
        },
        end: {
          hour: values[`end_time_${dayIndex}`]
            ? values[`end_time_${dayIndex}`].hour()
            : 0,
          minute: values[`end_time_${dayIndex}`]
            ? values[`end_time_${dayIndex}`].minute()
            : 0,
          second: 0,
          nano: 0,
        },
        timeZone: "string", // замените на актуальную информацию
        isBreak: breaks[day] ? true : false, // замените на актуальную информацию
      };
    });

    console.log("Converted payload:", worktimeRequests);

    // Вызываем API
    CreateWorkTime.fetchWorkTime(worktimeRequests);
  };

  return (
    <div className="container_mobile pt-20 flex flex-column gap-20 timetable_work_hours back_ground">
      <Names title={"Назад"} name={"Рабочие часы"} />

      <div className={"text"}>
        Выберите дату и время, в которые вы работаете
      </div>
      <Form onFinish={handleFinish}>
        {daysOfWeek.map((day, index) => (
          <>
            <div className="flexRow" key={index}>
              <div className="check_box">
                <Checkbox onChange={() => handleCheckboxChange(day)} />
                <div className={"day_text"}>{day}</div>
              </div>

              <div className="flexItem">
                <Form.Item name={`start_time_${index}`}>
                  <TimePicker
                    placeholder="00:00"
                    minuteStep={30}
                    format="HH:mm"
                    suffixIcon={null}
                    disabled={!checkedDays.includes(day)}
                  />
                </Form.Item>
                -
              </div>

              <div className="flexItem">
                <Form.Item name={`end_time_${index}`}>
                  <TimePicker
                    placeholder="00:00"
                    minuteStep={30}
                    format="HH:mm"
                    suffixIcon={null}
                    disabled={!checkedDays.includes(day)}
                  />
                </Form.Item>
                <Button
                  onClick={() => handleAddBreak(day)}
                  disabled={!checkedDays.includes(day)}
                >
                  +
                </Button>
              </div>
            </div>

            {breaks[day] && (
              <div className="breakRow" key={index}>
                <div className="breakRow_content">
                  <div className={"title"}>Перерыв</div>
                </div>
                <div className="breakRow_item">
                  <Form.Item name={`break_start_${index}`}>
                    <TimePicker
                      placeholder="00:00"
                      minuteStep={30}
                      format="HH:mm"
                      suffixIcon={null}
                      disabled={!checkedDays.includes(day)}
                    />
                  </Form.Item>
                </div>
                <div className="breakRow_item">-</div>
                <div className="breakRow_item">
                  <Form.Item name={`break_end_${index}`}>
                    <TimePicker
                      placeholder="00:00"
                      minuteStep={30}
                      format="HH:mm"
                      suffixIcon={null}
                      disabled={!checkedDays.includes(day)}
                    />
                  </Form.Item>
                </div>
                <div className="breakRow_img">
                  <Icon name={"trash"} onClick={() => handleRemoveBreak(day)} />
                </div>
              </div>
            )}
          </>
        ))}

        <Form.Item label="Выходные дни">
          <CustomInput text={"Добавить"} onClick={handleCalendar} />
        </Form.Item>

        <Button htmlType="submit" className={"button_done"}>
          Подтвердить
        </Button>
      </Form>
    </div>
  );
};

export default TimetableWorkHours;
